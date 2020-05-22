import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

/* RESPOSIVE */

const ClientDetail = props => {
    console.log(props.location.pathname)
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.adminLoadClients(props.location.pathname);
    }, [])

    return (
        <>
            <div className="cointainer mt-4" id="adminprofile">
                <Link to='/admin/profile' className="btn btn-danger ml-5 mt-4">Volver a Administrador </Link>
                <Link to='/admin/client' className="btn btn-primary ml-2 mt-4">Volver a Clientes</Link>
                <Link to='/admin/profesional' className="btn btn-warning ml-2 mt-4">Volver a Profesionales</Link>
                <br />
                <br />
                <div className="cointainer" >
                    <div className="row">
                        <div className="container">

                            {
                                !!store.clients && store.currentUser.user.role.id === 1 &&
                                <div className="col-md-12 col-xs-12">
                                    <h1 className="text-center">Información detallada del cliente</h1>
                                    <br />
                                    <div className="card-deck">
                                        <div className="card col-md-11 col-xs-11 ml-5">
                                            <div className="card-deck">
                                                <div className="col-md-8 col-xs-8 mt-3 mb-3 ml-3">
                                                    <h5>Nombre: {store.clients[0].name}</h5>
                                                    <h5>Apellido: {store.clients[0].last_name}</h5>
                                                    <h5>ID cliente: {store.clients[0].id}</h5>
                                                    <h5>Status: {store.clients[0].is_active ? "Activo" : "Inactivo"}</h5>
                                                    <h5>Total Planes: {store.clients[0].all_plans.length}</h5>
                                                    <h5>Inscripción: {store.clients[0].date_created}</h5>
                                                    <h5>Usuario: {store.clients[0].email}</h5>
                                                </div>
                                                <div className="col-md-3 col-xs-3 mt-4 mr-2">
                                                    <img src="https://picsum.photos/200/300" className="img-top rounded-circle" alt="avatar" width="200" height="200" />
                                                </div>
                                            </div>

                                            <div className="card-header">
                                                <form onSubmit={(e) => actions.changeActiveStatus(e, props.location.pathname)}>
                                                    <div className="form-check-inline" >
                                                        <input className="form-check-input ml-4" type="radio" name="is_active" id="exampleRadios1" value={!store.clients[0].is_active} onChange={actions.handleChange} />
                                                        <label className="form-check-label ml-2 mr-5" htmlFor="exampleRadios1">
                                                            {!store.clients[0].is_active === true ? "Activate" : "Desactivate"}   </label>

                                                        <button type="submit" className="btn btn-secondary btn-block">Change status</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientDetail;
