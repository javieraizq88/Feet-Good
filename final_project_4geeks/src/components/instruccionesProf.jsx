import React from "react"
import perfilprofedit1 from '../images/perfil-prof-edit1.jpg';
import perfilprofedit2 from '../images/perfil-prof-edit2.jpg';
import perfilprofclientes1 from '../images/perfil-prof.jpg';
import perfilprofclientes2 from '../images/perfil-prof-clientes1.jpg';
import perfilprofclientes3 from '../images/perfil-prof-clientes2.jpg';
import perfilprofclientes4 from '../images/perfil-prof-clientes3.jpg';
import perfilprofclientes5 from '../images/perfil-prof-clientes4.jpg';
import perfilprofclienteschat0 from '../images/perfil-prof-clientes-chat0.jpg';
import perfilprofclienteschat1 from '../images/perfil-prof-clientes-chat.jpg';
import perfilprofclientesdescargarplantilla from '../images/perfil-prof-clientes-descargarPlantilla.jpg';
import perfilprofclientesactualizarpauta from '../images/perfil-prof-clientes-actualizarPauta.jpg';
import { useHistory } from "react-router-dom";
/* RESPONSIVE */
 
const InstruccionesProf = props => {
    const history = useHistory();

    return (
        <>
            <button className="btn btn-info ml-5 mt-3 m-2 mb-3 float-left" onClick={() => history.goBack()}>Volver a mi perfíl</button>
            <h1 className="text-center mt-2 mb-4 mr-5">¿Necesitas ayuda?</h1>
            <div className="row">
                <div className="col-md-1 col-xs-1"></div>
                <div className="card col-md-10 col-xs-10" >

                    <div className="card" /* chat cliente - PT */>
                        <div class="card-header">
                            <h2 class="card-title mt-2">¿Quiénes son mis clientes?</h2>
                        </div>
                        <div class="card-body">
                            <div class="alert alert-danger" role="alert">
                                <h4>Para esto, necesitas estar contratado en el plan de un cliente</h4>
                            </div>
                            <h3>Para saber quiénes son tus clientes, sigue los siguientes pasos:</h3>
                            <h4 className="mt-4 ml-4">1) En tu perfil haz click en "Mi perfíl profesional" y selecciona "Mis clientes"</h4>
                            <img src={perfilprofclientes1} className="mt-3 ml-4 mb-4" width="1200px" height="200px" />

                            <h4 className="mt-4 ml-4">2) Te mostrará los clientes que tienes. Para más información haz click en "Ver planes de cliente"</h4>
                            <img src={perfilprofclientes2} className="mt-3 ml-4 mb-4" width="1200px" height="300px" />

                            <h4 className="mt-4 ml-4">3) Tendrás la información general del plan. Puedes descargar una plantilla de pauta nutricional (sólo si eres nutricionista)</h4>
                            <img src={perfilprofclientesdescargarplantilla} className="mt-3 ml-4 mb-4" width="1200px" height="450px" />
                            
                            <h4 className="mt-4 ml-4">4) Puedes actualizar la pauta alimentaria (si eres nutricionista) o de ejercicio (si eres entrenador)</h4>
                            <img src={perfilprofclientesactualizarpauta} className="mt-3 ml-4 mb-4" width="1200px" height="450px" />

                            <h4 className="mt-4 ml-4">5) Puedes ver la pauta alimentaria enviada al cliente</h4>
                            <img src={perfilprofclientes3} className="mt-3 ml-4 mb-4" width="1200px" height="450px" />

                            <h4 className="mt-4 ml-4">6) Puedes ver la pauta de ejercicio enviada al cliente</h4>
                            <img src={perfilprofclientes4} className="mt-3 ml-4 mb-4" width="1200px" height="450px" />

                            <h4 className="mt-4 ml-4">7) Puedes ver la ficha del cliente </h4>
                            <img src={perfilprofclientes5} className="mt-3 ml-4 mb-4" width="1200px" height="450px" />

                            <h4 className="mt-4 ml-4">8) Puedes contactar al cliente</h4>
                            <img src={perfilprofclienteschat0} className="mt-3 ml-4 mb-4" width="1200px" height="450px" />

                            <h4 className="mt-4 ml-4">9) Puedes enviar y recibir mensajes de tu cliente</h4>
                            <img src={perfilprofclienteschat1} className="mt-3 ml-4 mb-5" width="1200px" height="450px" />
                            <h5 class="card-text mb-3"> </h5>
                        </div>
                    </div>

                    <div className="card" /* editar perfil */>
                        <div className="card-header">
                            <h2 className="card-title mt-2">Quiero editar mi perfíl</h2>
                        </div>
                        <div className="card-body">
                            <h4 className="mt-4 ml-4">1) En tu perfil, haz click en el ícono señalado</h4>
                            <img src={perfilprofedit1} className="mt-3 ml-4 mb-4" width="1200px" height="320px" />
                            <h4 className="mt-4 ml-4">2) Aquí puedes editar tu descripción, especialidades y edad. Al terminar, haz click en "Guardar los cambios"</h4>
                            <img src={perfilprofedit2} className="mt-3 ml-4 mb-4" width="1200px" height="500px" />
                            <h5 className="card-text mb-3"> </h5>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default InstruccionesProf