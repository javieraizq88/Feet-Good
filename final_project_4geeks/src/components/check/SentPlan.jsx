import React from "react"
import { Link } from "react-router-dom"

const AvisoEnvioFormClient = props => {
  return (
    <>
      <div className="alert alert-primary ml-5 mr-5 mt-3" role="alert">
        Su ficha se ha enviado con éxito, dentro de las próximas 24 horas el equipo de salud que usted eligió se pondrá en contacto con usted
      </div>

      <Link to='/profile/' type="button" class="btn btn-info ml-5 mb-3">Volver a Mi Perfíl</Link>

    </>
  )
}

export default AvisoEnvioFormClient