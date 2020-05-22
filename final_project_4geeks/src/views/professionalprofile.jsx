import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import FitGoodImage from '../images/fitgood.jpeg';
/* RESPONSIVE */

const ProfessionalProfile = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
            {
                !!store.currentUser && (store.currentUser.user.role.id == 3 || store.currentUser.user.role.id == 2) ?
                    <>
                        <div className="container mt-3">
                            <div className="row">
                                <div className="col-md-12 col-xs-12 card">

                                    <div className="row" /* superior*/>
                                        <div className="col-md-3 col-xs-3" /*imagen de perfil*/>
                                            <button type="button" id='profile-edit-avatar' data-toggle="modal" data-target="#edit-profile-avatar">
                                                <img src={store.path + /avatar/ + store.currentUser.user.role.id + '/' + store.currentUser.user.avatar} className="img-top ml-4 mt-3" alt="..." width="200" height="190" />

                                            </button>

                                        </div>
                                        <div className="col-md-7 col-xs-7" /*saludo */>
                                            <h1 className="card-title text-center mt-3">Hola {store.currentUser.user.name} {store.currentUser.user.lastname}!</h1>
                                       <br/>
                                        <h5 className="">Edad:  {store.currentUser.user.age} años</h5>
                                        <h5 className="">Especialidades:  {store.currentUser.user.specialties}</h5>
                                        <h5 className="">Descripción:  {store.currentUser.user.description}</h5>
                                        <h5 className="">Fecha de inscripción:  {store.currentUser.user.created}</h5>
                                        </div>
                                        <div className="col-md-2 col-xs-2 " /*imagen extra*/>
                                            <img src={FitGoodImage} className="mt-4" width="160" height="100" />
                                        </div>
                                        <div className="col-md-2 col-xs-2 offset-md-10 " /*imagen extra*/>
                                            <button type="button" data-toggle="modal" data-target="#edit-profile">
                                                <i className="fas fa-cog"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="container">
                                        {/* <div className="col-md col-xs mt-3 text-center alert alert-info" >
                                        Sabemos que en estos momentos te encuentras realizando cambios
                                        en tu estilo de vida y queremos ayudarte a que estos cambios sean rapido y efectivos!
                                    </div> */}

                                        <div className="card-header mt-2 mb-2" >
                                            <h4> Tus clientes actuales son:</h4>
                                        </div>

                                        {
                                            !!store.currentUser.user && !!store.currentUser.user.planes_id > 0 ?
                                                store.currentUser.user.planes_id.map((elem, i) => {
                                                    return (
                                                        <div className="container" >

                                                            <div className="card col-md-11 col-xs-11 ml-5 mb-3" key={i} >
                                                                <br />
                                                                <div className="row" /*Nombre cliente*/>
                                                                    <div className="col-md-1 col-xs-1"></div>
                                                                    <div className="col-md-5 col-xs-5 ml-3">
                                                                        <h5 className="card-text">Nombre del cliente: </h5></div>
                                                                    <div className="col-md-5 col-xs-5 ">
                                                                        <h5> {store.currentUser.user.planes_id.length > 0 ? elem.all_plans.client_name : ''}</h5>
                                                                    </div>
                                                                </div>

                                                                <div className="row" /*Objetivo*/>
                                                                    <div className="col-md-1 col-xs-1"></div>
                                                                    <div className="col-md-5 col-xs-5 ml-3">
                                                                        <h5 className="card-text">Su Objetivo es: </h5>
                                                                    </div>
                                                                    <div className="col-md-5 col-xs-5 ">
                                                                        <h5>  {store.currentUser.user.planes_id.length > 0 ? elem.all_plans.objective : ''}</h5>
                                                                    </div>
                                                                </div>

                                                                <div className="row" /*plan*/>
                                                                    <div className="col-md-1 col-xs-1"></div>
                                                                    {/* <div className="col-md-5 col-xs-5 ml-3">
                                                                        <h5 className="card-text">El plan que enviaste es: </h5>
                                                                    </div>
                                                                    <div className="col-md-5 col-xs-5 ">
                                                                        {
                                                                            store.currentUser.user.role.id === 2 ?
                                                                                <h5> {store.currentUser.user.planes_id.length > 0 ? elem.all_plans.dieta : ''}</h5>
                                                                                :
                                                                                <h5> {store.currentUser.user.planes_id.length > 0 ? elem.all_plans.entrenamiento : ''}</h5>

                                                                        }

                                                                    </div> */}
                                                                </div>
                                                                <br />
                                                            </div>

                                                        </div>
                                                    )
                                                })
                                                :
                                                <div className="alert alert-warning" role="alert">
                                                    {store.error} You don´t have clients in your database :(
                                                </div>
                                        }
                                    </div>
                                    <br />

                                </div>
                            </div>
                        </div>

                        {/* // <!-- Modal Foto Perfil --> */}
                        <div className="modal fade" id="edit-profile-avatar" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Editar Foto Perfil</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={(e) => actions.editAvatar(e, store.currentUser.user.role.id, store.currentUser.user.role.id == 2 ? store.currentUser.user.nutritionist_id : store.currentUser.user.trainer_id)}>
                                            <div className="form-group">
                                                <input type="file" className="form-control" id="exampleInputEmail1" placeholder="Enter email"
                                                    name='avatar'
                                                    onChange={actions.handleChangeFiles} />
                                            </div>


                                            <button type="submit" className="btn btn-primary">Cambiar Mi Foto</button>
                                            <button type="button" className="btn btn-secondary ml-3" data-dismiss="modal">Close</button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* // <!-- Modal Edit Perfil --> */}
                        <div className="modal fade" id="edit-profile" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Editar mi Perfil</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={(e) => actions.editProfesionalProfile(e, store.currentUser.user.role.id, store.currentUser.user.role.id == 2 ? store.currentUser.user.nutritionist_id : store.currentUser.user.trainer_id)}>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Descripción</label>
                                                <textarea autoFocus rows='3' className="form-control" id="exampleInputEmail1" placeholder="Editar descripción"
                                                    name='description'
                                                    onChange={actions.handleChange}
                                                    defaultValue={store.currentUser.user.description} />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Especialidades</label>
                                                <textarea rows='3' className="form-control" id="exampleInputEmail1" placeholder="Editar especialidades"
                                                    name='specialties'
                                                    onChange={actions.handleChange}
                                                    defaultValue={store.currentUser.user.specialties} />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Edad</label>
                                                <input autoFocus type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter email"
                                                    name='age'
                                                    onChange={actions.handleChange}
                                                    defaultValue={store.currentUser.user.age} />
                                            </div>


                                            <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                                            <button type="button" className="btn btn-secondary ml-3" data-dismiss="modal">Close</button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
            }


        </>
    )
}
export default ProfessionalProfile;