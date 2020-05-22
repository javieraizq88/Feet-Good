import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { useParams, Link } from 'react-router-dom';
import uid from 'uid'
/* RESPONSIVE */

const ProfessionalClientPlans = props => {
    const [client, setClient] = useState();
    const { store, actions } = useContext(Context);
    const { id } = useParams();


    useEffect(() => {
        fetch(store.path + "/admin/client/" + id, {
            method: 'GET',
            headers: {
                "Content-type": 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (data && data.length > 0) {
                    setClient(data[0])
                }
            })

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    {
                        !!client && (store.currentUser.user.role.id == 3 || store.currentUser.user.role.id == 2)? (
                            <>
                                <h3 className="ml-2 mt-3 d-inline-flex">Nombre del cliente: {client.name} {client.last_name}</h3>

                                {/* Boton para descargar plantilla */}
                                <p className='d-inline-flex float-right'> Descargar plantilla de  {store.currentUser.user.role.id == 2 ? 'nutricion ' : 'entrenamiento '} &nbsp;
                                                    <button type="button">{store.currentUser.user.role.id == 3 ?
                                        <a href={store.path + '/download/Pauta_Entrenamiento_fit_good.xlsx'} target='_blank'><i class="fas fa-file-download"></i></a>
                                        :
                                        <a href={store.path + '/download/Pauta_alimentacion_Fit_Good.docx'} target='_blank'><i class="fas fa-file-download"></i></a>}
                                    </button></p>
                                {
                                    client.all_plans.map((plan) => {
                                        const id_num = uid(11)
                                        return (
                                            <>
                                                <div className="card my-4">
                                                    <div className="card-header">
                                                        <h4 className='d-inline-flex'>Detalles del plan</h4><p className='d-inline-flex float-right'> Actualizar pauta de {store.currentUser.user.role.id == 2 ? 'nutricion ' : 'entrenamiento '} &nbsp;
                                                    <button type="button" data-toggle="modal" data-target={'#' + id_num}>
                                                                <i class="fas fa-edit"></i></button></p>
                                                    </div>
                                                    <div className="card-body">
                                                        <h5>Nutricionista:</h5>
                                                        <p className="card-title">{plan.detail.nutritionist_name}</p>
                                                        <h5>Personal Trainer:</h5>
                                                        <p className="card-text">{plan.detail.trainer_name}</p>
                                                        <h5>Objetivo:</h5>
                                                        <p className="card-text">{plan.detail.objective}</p>
                                                        <h5>Fecha de inicio:</h5>
                                                        <p className="card-text">{plan.detail.created}</p>
                                                        <Link to={"/profile/professional/clients/" + client.id + "/plans/" + plan.detail.id + "/diet"} type="button" className="btn btn-primary ml-4 mr-5">Pauta alimentaria</Link>
                                                        <Link to={"/profile/professional/clients/" + client.id + "/plans/" + plan.detail.id + "/training"} type="button" className="btn btn-warning mr-5">Pauta de ejercicios</Link>
                                                        <Link to={"/profile/professional/clients/" + client.id + "/ficha/" + plan.detail.id} type="button" className="btn btn-danger">Ficha del cliente</Link>
                                                        <Link to={store.currentUser.user.role.id == 2 ?
                                                            "/profile/professional/clients/contact/nutritionist/" + id + '/' + plan.detail.id :
                                                            "/profile/professional/clients/contact/trainer/" + id + '/' + plan.detail.id} type="button" className="btn btn-primary ml-5">Contactar al cliente</Link>
                                                    </div>
                                                </div>
                                                {/* Actualizar Plan */}
                                                <div className="modal fade" id={id_num} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">Actualizar plan de {store.currentUser.user.role.id == 2 ? 'nutricion ' : 'entrenamiento '}</h5>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <form onSubmit={(e) => actions.uploadFile(e, store.currentUser.user.role.id, plan.detail.id)}>
                                                                    <div className="form-group">
                                                                        <input type="file" className="form-control" id="exampleInputEmail1" placeholder="Enter email"
                                                                            name={store.currentUser.user.role.id == 2 ? 'diet' : 'workout'}
                                                                            onChange={actions.handleChangeFiles}
                                                                        />
                                                                        <input type="hidden" value={plan.detail.dieta} id="" />
                                                                        <input type="hidden" value={plan.detail.entrenamiento} id="" />
                                                                    </div>


                                                                    <button type="submit" className="btn btn-primary">Actualizar</button>
                                                                    <button type="button" className="btn btn-secondary ml-3" data-dismiss="modal">Close</button>
                                                                </form>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })

                                }
                            </>
                        ) :
                            <div className="spinner-border text-info" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}
export default ProfessionalClientPlans;