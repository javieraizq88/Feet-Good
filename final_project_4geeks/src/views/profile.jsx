import React, { useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
/* RESPONSIVE*/

const Profile = props => {
    const { store, actions } = useContext(Context)
    console.log(props)
    return (
        <>
            {
                !!store.currentUser && store.currentUser.user.role.id == 4 ?
                    <>
                        <div className="container my-3">
                            <div className="row">
                                <div className="col-md-12 col-xs-12 card">

                                    <div className="row" name="superior">
                                        <div className="col-md col-xs" /*imagen de perfil*/>
                                            <button type="button" id='profile-edit-avatar' data-toggle="modal" data-target="#edit-profile-avatar-client">

                                                <img src={store.path + /avatar/ + store.currentUser.user.role.id + '/' + store.currentUser.user.avatar} className="img-top ml-4 mt-3" width="200" height="190" />
                                            </button>
                                        </div>
                                        <div className="col-md col-xs" /*saludo */>
                                            <h1 className="card-title mt-5 font2">Hola {store.currentUser.user.name}!</h1>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="col-md col-xs mt-3 text-center alert alert-info font2" >
                                            Sabemos que en estos momentos te encuentras realizando cambios
                                            en tu estilo de vida y queremos ayudarte a que estos cambios sean rápidos y efectivos!
                                    </div>

                                        <div className="card-header font2" /* titulo detalles del plan */>
                                            <h5>Tu plan actual es el siguiente</h5>
                                        </div>

                                        <div className="card-body font2">
                                            <div className="row" /*Fecha inicio*/>
                                                <div className="col-md-3 col-xs-3"></div>
                                                <div className="col-md-3 col-xs-3">
                                                    <h5 className="card-text">Fecha de inicio: </h5></div>
                                                <div className="col-md-4 col-xs-4 ">
                                                    {store.currentUser.user.planes_id.length > 0 ? store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.created : ''}
                                                </div>
                                            </div>
                                            <br />

                                            <div className="row" /*Objetivo*/>
                                                <div className="col-md-3 col-xs-3"></div>
                                                <div className="col-md-3 col-xs-3">
                                                    <h5 className="card-text">Tu objetivo es: </h5>
                                                </div>
                                                <div className="col-md-4 col-xs-4">
                                                    {store.currentUser.user.planes_id.length > 0 ? store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.objective : ''}
                                                </div>
                                            </div>
                                            <br />

                                            <div className="row" /*Nutricionsita */>
                                                <div className="col-md-3 col-xs-3"></div>
                                                <div className="col-md-3 col-xs-3">
                                                    <h5 className="card-text">Tu nutricionista es: </h5>
                                                </div>
                                                <div className="col-md-4 col-xs-4">
                                                    {store.currentUser.user.planes_id.length > 0 ? store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_name + " " + store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_last_name : ''}
                                                </div>
                                            </div>
                                            <br />

                                            <div className="row" /*personal trainer*/>
                                                <div className="col-md-3 col-xs-3"></div>
                                                <div className="col-md-3 col-xs-3">
                                                    <h5 className="card-text">Tu personal trainer es: </h5>
                                                </div>
                                                <div className="col-md-4 col-xs-4">
                                                    {store.currentUser.user.planes_id.length > 0 ? store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_name + " " + store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_last_name : ''}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <br />

                                    <div className="row">
                                        <div className="col-md-5 col-xs-5">
                                            <Link to='/profile/client/health-team' type="button" className="btn btn-outline-info ml-4">Contactar a mi equipo de salud</Link>
                                        </div>
                                        <div className="col-md-4 col-xs-4">
                                            <Link to='/profile/client/plans' type="button" className="btn btn-outline-info ">Ver mis planes anteriores</Link>
                                        </div>
                                        <div className="col-md-3 col-xs-3">
                                            <Link to='/profile/client/crear-plan' type="button" className="btn btn-outline-info ml-2">Contratar un nuevo plan</Link>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                        {/* // <!-- Modal Foto Perfil --> */}
                        <div className="modal fade" id="edit-profile-avatar-client" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Editar Foto Perfil</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={(e) => actions.editAvatar(e, store.currentUser.user.role.id, store.currentUser.user.client_id)}>
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
                    </>
                    :
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
            }


        </>

    )
}


export default Profile
