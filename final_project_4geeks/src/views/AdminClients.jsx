import React, { useEffect, useContext } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

/* RESPONSIVE */

const AdminClients = props => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.adminLoadClients(props.location.pathname);
    }, [])

    return (
    <div className="container mt-4" id="adminprofile">         
        <>
         <Link to='/admin/profile' className="btn btn-danger mt-3 ml-5">Volver a Administrador</Link>
         <Link to='/admin/profesional' className="btn btn-warning mt-3 ml-4">Ir Profesionales</Link>

            <h1 className="text-center mt-2" >Lista total de clientes </h1>
            <br />
            <div className="cointainer" >
                <div className="row">
                    <div className="container">
                            {
                                !!store.clients > 0 ?
                                    store.clients.map((elem, index) => {

                                        return (
                                            <div className="card col-md-10 col-xs-11 border-primary mb-4 ml-5" key={index}>
                                                <div className="card-header border-primary"><h3>{elem.name + ' ' + elem.last_name}</h3></div>
                                                <div className="card-body">
                                                    <p className="card-text ml-3">ID : {elem.id}</p>
                                                    <p className="card-text ml-3">Inscripción : {elem.date_created}</p>
                                                    <p className="card-text ml-3">Email : {elem.email}</p>
                                                    {/* <p className="card-text ml-3">Status : {elem.is_active ? "Active" : "Inactive"}</p> */}
                                                    <Link to={"/admin/client/" + elem.id} className={"btn btn-info text-white text-center list-group-item-action " + (elem.is_active)}> Más información</Link>
                                                </div>
                                            </div>
                                        )
                                    }) :
                                    <div className="alert alert-warning" role="alert">
                                        {store.errors}
                                    You have no Clients in your database :(
                                </div>
                            }
                        </div>
                    </div>
                </div>
        </>
            </div>
  
    )
}

export default AdminClients