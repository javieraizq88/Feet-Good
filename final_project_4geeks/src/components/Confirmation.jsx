import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { useHistory, useParams } from 'react-router-dom'
/* RESPONSIVE */

const Confirmation = props => {
    const { actions } = useContext(Context)
    let token = props.match.params.token
    const history = useHistory();
    const {role_id} = useParams()
    // useEffect(() => {
    // }, [actions, token])
    return (
        <div className="container">
            <h1 className="mt-2 offset-md-3">Crear nueva contraseña</h1>
            <hr />
            <div className="row">
                <div className="col-md-3 col-xs-3"></div>
                <div className="col-md-6 col-xs-6 form-group modal-body">
                    <label htmlFor="LoginConsuEmail" className="form-label ">Ingrese nueva contraseña</label>
                    <input type="password" name="password" className="col-md-6 col-xs-6" onChange={e => actions.handleChange(e)} className="form-control"></input>
                    <br/>
                    <label htmlFor="LoginConsuEmail" className="form-label ">Confirme constraseña</label>
                    <input type="password" name="confirmedPassword" onChange={e => actions.handleChange(e)} className="form-control"></input>
                    <br/>
                    <button className="float-right" onClick={() => actions.getPasswordChange(token, props.history,role_id)}>Enviar</button>
                </div>
            </div>
        </div>
    )
}
export default Confirmation

