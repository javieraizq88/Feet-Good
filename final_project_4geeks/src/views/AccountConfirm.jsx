import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

/* RESPONSIVE*/ 

const AccountConfirm = props => {
    const { store, actions } = useContext(Context)
    const handleSubmit = e => {
        actions.login(e, props.history, 4, 'profile' )
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-4 offset-md-4 my-3 font2">
                        {
                            store.error &&
                            <>
                                <div className="alert alert-danger" role="alert">
                                    Usuario o contraseña incorrectos
                        </div>
                            </>
                        }
                        <h1>Confirmar tu cuenta</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Correo electronico</label>
                                <input autoFocus type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"
                                    name='email'
                                    onChange={actions.handleChange} />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                    name='password'
                                    onChange={actions.handleChange} />
                            </div>                            

                            <button type="submit" className="btn btn-info btn-block my-3">Confirmar</button>
                        </form>
                        <Link to='/request_password'><small>Olvidaste tu contraseña?</small></Link>


                    </div>
                </div>
            </div>

        </>

    )
}

export default AccountConfirm;