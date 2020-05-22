import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { useParams, Link } from 'react-router-dom';
/* RESPONSIVE*/

const ProfessionalDetails = props => {
    const { store, actions } = useContext(Context);
    const { id, role_id } = useParams();

    useEffect(() => {
        actions.adminLoadProfesionals('/admin/profesional' + '/' + role_id + '/' + id)
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 my-5">
                        {
                            !!store.profesionals && !!store.profesionals[0] ?

                                <div className="card mt-3 mb-3 bg-transparent">
                                    <div className="row no-gutters">
                                        <div className="col-md-4 col-xs-4">
                                            <img src={`${store.path}/static/images/avatar/${store.profesionals[0].role_id === 2 ? "nutritionist/" : "trainer/"}${store.profesionals[0].avatar}`} className="card-img team-cards px-3 py-3" />
                                        </div>
                                        <div className="col-md-8 col-xs-8">
                                            <div className="card-body">
                                                <h3 className="card-title">{store.profesionals[0].name + " " + store.profesionals[0].lastname + ", " + store.profesionals[0].age}</h3>
                                                <h5 className="card-text">Especialidad:</h5>
                                                <p className="card-text">{store.profesionals[0].specialties}</p>
                                                <h5 className="card-text">Descripción:</h5>
                                                <p className="card-text">{store.profesionals[0].description}</p>
                                                {
                                                    role_id == 2 && store.nutritionist_email !== null && store.nutritionist_email == store.profesionals[0].email ?
                                                        <>
                                                        <div className="alert alert-primary" role="alert">
                                                            {'Se ha añadido a ' + store.profesionals[0].name + ' ' + store.profesionals[0].lastname + ' a tu plan'}
                                                        </div>
                                                        {
                                                            !!store.trainer_email && !!store.nutritionist_email ? "" : <Link to="/personal-trainers" className="btn btn-outline-info">Agregar un entrenador</Link>
                                                        }
                                                       
                                                        </>
                                                        :
                                                        role_id == 3 && store.trainer_email !== null && store.trainer_email == store.profesionals[0].email ?
                                                            <>
                                                            <div className="alert alert-primary" role="alert">
                                                                {'Se ha añadido a ' + store.profesionals[0].name + ' ' + store.profesionals[0].lastname + ' a tu plan'}
                                                            </div>
                                                            {
                                                                !!store.trainer_email && !!store.nutritionist_email ? "" :  <Link to="/nutritionists" className="btn btn-outline-info">Agregar un nutricionista</Link>
                                                            }
                                                            </>
                                                            :
                                                            <div className="form-check-inline" >
                                                                <input className="form-check-input ml-4" type="radio" name={role_id == 2 ? 'nutritionist_email' : 'trainer_email'} id="exampleRadios1" value={store.profesionals[0].email} onChange={actions.handleChange} />
                                                                <label className="form-check-label ml-2 mr-5" htmlFor="exampleRadios1">
                                                                    Añadir a mi plan
                                                                </label>
                                                            </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="spinner-border text-info" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                        }
                        {
                            !!store.trainer_email && !!store.nutritionist_email && <small>Has añadido un nutritionista y un entrenador a tu proximo plan, continuar, has click <Link to='/profile/client/crear-plan'> aqui </Link></small>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfessionalDetails;