import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';


const NavBar = props => {
    const { store, actions } = useContext(Context);

    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-dark navColor">
                <Link className="navbar-brand font3 ml-3" to="/">Fit good</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            store.currentUser === null &&
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link font2" to="/register">Registrate</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'>Iniciar sesión</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link font2" to="/team">Nuestros especialistas<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle font2" to="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Trabaja con nosotros
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item font2" to="/register/profesional/3">Registrate como entrenador </Link>
                                        <Link className="dropdown-item font2" to="/register/profesional/2">Registrate como nutricionista </Link>
                                    </div>
                                </li>
                            </>

                        }

                        
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>Quienes somos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact-us'>Contactanos</Link>
                        </li>

                        {
                            !!store.currentUser && store.currentUser.user.role.name === 'client'
                            &&
                            <>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/team">Nuestros especialistas<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Mi perfil
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/profile">Mi perfil </Link>
                                        <Link className="dropdown-item" to="/profile/ayuda">Ayuda </Link>
                                        {/* <Link className="dropdown-item" to="/profile/client/health-team">My health team</Link> */}
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" onClick={() => actions.logout(props.history)}>Cerrar Sesion</Link>
                                    </div>
                                </li>
                            </>
                        }
                        {
                            !!store.currentUser && store.currentUser.user.role.name !== 'client' && store.currentUser.user.role.name !== 'admin'
                            &&
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Mi perfil profesional
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/profile/professional">Mi perfil</Link>
                                    <Link className="dropdown-item" to="/profile/professional/clients">Mis clientes</Link>
                                    <Link className="dropdown-item" to="/profile/professional/ayuda">Ayuda</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" onClick={() => actions.logout(props.history)}>Cerrar Sesion</Link>
                                </div>
                            </li>
                        }
                        {
                            !!store.currentUser && store.currentUser.user.role.name === 'admin'
                            &&
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Administrador
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/admin/profile">Perfil </Link>
                                    <Link className="dropdown-item" to="/admin/client">Clientes </Link>
                                    <Link className="dropdown-item" to="/admin/profesional">Profesionales</Link>
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item" onClick={() => actions.logout(props.history)}>Cerrar Sesion</button>                                </div>
                            </li>
                        }
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default withRouter(NavBar);