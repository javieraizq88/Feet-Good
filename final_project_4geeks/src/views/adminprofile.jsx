import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom'
/* RESPOSIVE */
const AdminProfile = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div >
                {
                    !!store.currentUser && store.currentUser.user.role.id === 1 ?
                        <>
                            <div class="container mt-4" id="adminprofile" >
                                <div className="row" >
                                    <div class="col-md col-xs container">
                                        <div class="row">
                                            <div class="col-md-4 col-xs-4">
                                                <img src="https://picsum.photos/200/300" class="img-top ml-3 mt-3" alt="avatar" width="200" height="200" />
                                            </div>
                                            <div class="col-md col-xs">
                                                <br />
                                                <br />
                                                <br />
                                                <h1 class="card-title ml-5">Hola {store.currentUser.user.name}!</h1>
                                            </div>
                                        </div>
                                        <br />
                                        <br />

                                        <div class="card">
                                            <div class="card-header">
                                                <h5>¿Qué te gustaría revisar hoy?</h5></div>
                                        </div>
                                        <br />

                                        <div class="row">
                                            <div class="col-md-2 col-xs-2"></div>
                                            <div class="col-md-5 col-xs-5">
                                                <h5 class="card-text mt-2">Ver todos los clientes</h5>
                                                <Link to='/admin/client' class="btn btn-primary ml-5">Clientes</Link>
                                            </div>
                                            <div class="col-md-4 col-xs-4">
                                                <h5 class="card-text mt-2">Ver todos los Profesionales </h5>
                                                <Link to='/admin/profesional' class="btn btn-warning ml-5">Profesionales</Link>
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>

                        </>
                        :
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                }
            </div>
        </>

    )
}
export default AdminProfile;