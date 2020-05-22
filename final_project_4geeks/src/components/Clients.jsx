import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
/* RESPONSIVE */

const Clients = props => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.adminLoadClients("/admin/client")
    }, [])
    const filteredClients = () => {
        if (!store.clients) return;

        const clientIds = store.currentUser.user.planes_id.map((plan) => plan.all_plans.client_id);
        return store.clients.filter((client) => clientIds.includes(client.id))
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <h1 className="text-center font2">Mis clientes</h1>
                        {
                            !!store.clients && (store.currentUser.user.role.id == 3 || store.currentUser.user.role.id == 2) ?
                                filteredClients().map((client, i) => {
                                    return (
                                        <div key={client.id} className="card border-info m-3 p-3 bg-transparent">
                                            <div className="row no-gutters">
                                                <div className="col-md-4 col-xs-4">
                                                    <img src={`${store.path}/static/images/avatar/clients/${client.avatar}`} className="card-img square" alt="..." />
                                                </div>
                                                <div className="col-md-8 col-xs-8">
                                                    <div className="card-body">
                                                        <Link to={`/profile/professional/clients/${client.id}`} className="btn btn-outline-info float-right">Ver planes de cliente</Link>
                                                        <h5 className="card-title">{client.name + ' ' + client.last_name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <div className="spinner-border m-5" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients;