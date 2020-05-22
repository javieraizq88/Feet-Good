import React, { useContext } from 'react'
import { Context } from '../store/appContext'
/* RESPONSIVE*/ 

const Register = props => {
    const { store, actions } = useContext(Context)
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-4 offset-md-4 font2">
                        {
                            !!store.error &&
                            <div className="alert alert-danger mt-2" role="alert">
                                {store.error}
                            </div>
                        }
                        <h1 className="my-2">Registro</h1>
                        <form onSubmit={(e) => actions.register_client(e, props.history)}>

                            <div className="form-group">
                                <label for="exampleInputEmail1">Nombre</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su nombre"
                                    onChange={actions.handleChange}
                                    name='name' />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Apellidos </label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese ambos apellidos"
                                    onChange={actions.handleChange}
                                    name='lastname' />
                            </div>

                            <legend className="col-form pt-0">Indique su género</legend>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"
                                    value='Masculino'
                                    onChange={actions.handleChange}
                                    name='gender' />
                                <label className="custom-control-label" for="customRadio1">Masculino</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"
                                    value='Femenino'
                                    onChange={actions.handleChange}
                                    name='gender' />
                                <label className="custom-control-label" for="customRadio2">Femenino</label>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su email"
                                    onChange={actions.handleChange}
                                    name='email' />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingrese su contraseña"
                                    onChange={actions.handleChange}
                                    name='password' />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Confirme su contraseña</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirme su contraseña"
                                    onChange={actions.handleChange}
                                    name='confirmedPassword' />
                            </div>
                            <div classname="form-group row" >
                                <label for="input" >Foto</label>
                                <div className="form-group row">
                                    <input type="file" classname="form-control-file" id="exampleFormControlFile1"
                                        onChange={actions.handleChangeFiles}
                                        name="avatar" />
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-info btn-block mb-3">Submit</button>
                        </form>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Register