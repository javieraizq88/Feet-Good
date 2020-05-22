import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
/* RESPONSIVE */

const ProfesionalDetail = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.adminLoadProfesionals(props.location.pathname);
    }, [])
    return (
        <>
            {
                !!store.currentUser && store.currentUser.user.role.id === 1 ?
                    <div className="container mt-4" id="adminprofile">

                        <Link to='/admin/profile' className="btn btn-danger mt-3 ml-5">Volver a Administrador </Link>
                        <Link to='/admin/profesional' className="btn btn-warning mt-3 ml-3">Ir a Profesionales</Link>
                        <Link to='/admin/client' className="btn btn-primary mt-3 ml-3">Ir a Clientes</Link>
                        <br />
                        <br />
                        <div className="cointainer" >
                            <div className="row">
                                <div className="container">

                                    {
                                        !!store.profesionals && store.profesionals.length > 0 ?
                                            <>
                                                <div className="col-md-12 col-xs-12">
                                                    <h1 className="text-center">Información detallada del Profesional</h1>
                                                    <br />

                                                    <div className="card-deck">
                                                        <div className="card col-md-11 col-xs-11 ml-5">
                                                            <div className="card-deck">
                                                                <div className="col-md-8 col-xs-8 mt-3 mb-3 ml-3">
                                                                    <h5>Nombre: {store.profesionals[0].name}</h5>
                                                                    <h5>Apellido: {store.profesionals[0].lastname}</h5>
                                                                    <h5>Descripción: {store.profesionals[0].description ? " " : "Sin información"}</h5>
                                                                    <h5>Usuario: {store.profesionals[0].email}</h5>
                                                                    <h5>ID: {store.profesionals[0].id}</h5>
                                                                    <h5>Status: {store.profesionals[0].is_active ? "Activo" : "Inactivo"}</h5>
                                                                    <h5>Fecha de registro: {store.profesionals[0].register_date}</h5>
                                                                    <h5>Profesional: {store.profesionals[0].role_id}</h5>
                                                                    <h5>Especialidades: {store.profesionals[0].specialties}</h5>
                                                                    <h5>Título: <a href={`${store.path}/static/images/profesional_title/${store.profesionals[0].role_id === 2 ? 'nutritionist' : 'trainer'}/${store.profesionals[0].profesional_title}`} target="_blank"> {store.profesionals[0].profesional_title} </a></h5>
                                                                    <h5>Antecedentes: <a href={`${store.path}/static/images/background/${store.profesionals[0].role_id === 2 ? 'nutritionist' : 'trainer'}/${store.profesionals[0].background}`} target="_blank"> {store.profesionals[0].background} </a></h5>
                                                                </div>
                                                                <div className="col-md-3 col-xs-3 mt-4 mr-2">
                                                                    <img src="https://picsum.photos/200/300" className="img-top rounded-circle" alt="avatar" width="200" height="200" />
                                                                </div>
                                                            </div>

                                                            <div className="card-header">
                                                                <form onSubmit={() => actions.changeActiveStatus(props.location.pathname)}>
                                                                    <div className="form-check-inline" >
                                                                        <input className="form-check-input ml-4" type="radio" name="is_active" id="exampleRadios1" value={!store.profesionals[0].is_active} onChange={actions.handleChange} />
                                                                        <label className="form-check-label ml-2 mr-5" htmlFor="exampleRadios1">
                                                                            {!store.profesionals[0].is_active === true ? "Activate" : "Desactivate"}   </label>

                                                                        <button type="submit" className="btn btn-secondary btn-block">Change status</button>
                                                                    </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>

            }

        </>
    )
}

export default ProfesionalDetail