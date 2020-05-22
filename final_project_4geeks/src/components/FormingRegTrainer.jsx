import React, { useContext } from "react"
import { Context } from "../store/appContext";

const FormRegTrainer = props => {
    const {store, actions} = useContext(Context)
    return (
        <>
            <div className="container font2">
                <br />
                <h1 classname="text-justify-center" >Formulario de registro para entrenador</h1>
                <br />
                {
                    !!store.error &&
                    <div className="alert alert-danger mt-2" role="alert">
                        {store.error}
                    </div>
                }
                <form id="loginForm" onSubmit={(e)=>actions.register_profesional(e,3,props.history)}>
                    <div classname="form-group row" >
                        <label for="input">Nombre</label>
                        <input required type="text" className="form-control" id="nameprof" aria-describedby="name"
                        onChange={actions.handleChange}  name="name"/>
                        <small id="nameprof" className="form-text text-muted">Escriba su nombre completo</small>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="input">Apellido</label>
                        <input required type="text" className="form-control" id="lastnameprof" aria-describedby="lastname"
                        onChange={actions.handleChange} 
                        name="lastname"/>
                        <small id="lastnameprof" className="form-text text-muted">Escriba ambos apellidos</small>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="inputEmail3" >Correo electronico</label>
                        <input required type="email" className="form-control" id="emailprof" aria-describedby="emailprof"
                        onChange={actions.handleChange} 
                        name="email"/>
                        <small id="emailprof" className="form-text text-muted">El email que escriba, va a ser su usuario</small>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="input" >Contraseña</label>
                        <input required type="password" className="form-control" id="passordprof" aria-describedby="passordprof" 
                        onChange={actions.handleChange}
                        name="password"/>
                        <br />
                    </div>
                    <div classname="form-group row" >
                        <label for="input" >Confirme su contraseña</label>
                        <input required type="password" className="form-control" id="passordprof" aria-describedby="passordprof" 
                        onChange={actions.handleChange}
                        name="confirmedPassword"/>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="input" >Foto</label>
                        <div className="form-group row">
                            <input type="file" classname="form-control-file" id="exampleFormControlFile1" 
                            onChange={actions.handleChangeFiles}
                            name="avatar"/>
                            <br />
                            <br />
                        </div>
                    </div>

                    <div classname="form-group row" >
                        <label for="input">Especialidades</label>
                        <input type="text" className="form-control" id="specialties" 
                        onChange={actions.handleChange}
                        name="specialties"/>
                        <br />
                    </div>

                    

                    <div classname="form-group row" >
                        <label for="input">Edad</label>
                        <input required type="text" className="form-control" id="age" 
                        onChange={actions.handleChange}
                        name="age"/>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="input">Descripción</label>
                        <textarea required className="form-control" id="description" rows="3"
                        onChange={actions.handleChange} name="description"></textarea>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="input">Certificado de antecedentes</label>
                        <input required type="file" className="form-control-file" id="background" 
                        onChange={actions.handleChangeFiles}
                        name="background"/>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="input">Certificado de título</label>
                        <input required type="file" className="form-control-file" id="profesional_title" 
                        onChange={actions.handleChangeFiles}
                        name="profesional_title"/>
                        <br />
                    </div>

                    
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" 
                        onChange={actions.handleChange}/>
                        <label className="form-check-label" for="exampleCheck1">Acepto términos y condiciones</label>
                    </div>

                    <button  type="submit" className="btn btn-info">Enviar formulario</button>
                </form>
            </div>
            <br />
        </>
    )
}

export default FormRegTrainer;