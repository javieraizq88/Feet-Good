import React from "react"
import perfilclientechatnutri1 from '../images/perfil-cliente-chat-nutri1.jpg';
import perfilclientechatnutri2 from '../images/perfil-cliente-chat-nutri2.jpg';
import perfilclientechatnutri3 from '../images/perfil-cliente-chat-nutri3.jpg';
import perfilclientechatpt1 from '../images/perfil-cliente-chat-pt1.jpg';
import perfilclientechatpt2 from '../images/perfil-cliente-chat-pt2.jpg';
import perfilclientechatpt3 from '../images/perfil-cliente-chat-pt3.jpg';
import perfilclienteplanes1 from '../images/perfil-cliente-planes1.jpg';
import perfilclienteplanes3 from '../images/perfil-cliente-planes3.jpg';
import perfilclienteplanes4 from '../images/perfil-cliente-planes4.jpg';
import perfilclienteplanes5 from '../images/perfil-cliente-planes5.jpg';
import perfilclientenuevoplan1 from '../images/perfil-cliente-nuevoPlan1.jpg';
import perfilclientenuevoplan2 from '../images/perfil-cliente-nuevoPlan2.jpg';
import perfilclientenuevoplan3nutri1 from '../images/perfil-cliente-nuevoPlan3nutri1.jpg';
import perfilclientenuevoplan3nutri2 from '../images/perfil-cliente-nuevoPlan3nutri2.jpg';
import perfilclientenuevoplan3nutri3 from '../images/perfil-cliente-nuevoPlan3nutri3.jpg';
import perfilclientenuevoplan3nutri4 from '../images/perfil-cliente-nuevoPlan3nutri4.jpg';
import perfilclientenuevoplan3tp1 from '../images/perfil-cliente-nuevoPlan3pt1.jpg';
import perfilclientenuevoplan3tp2 from '../images/perfil-cliente-nuevoPlan3pt2.jpg';
import perfilclientenuevoplan3tp3 from '../images/perfil-cliente-nuevoPlan3pt3.jpg';
import perfilclientenuevoplan4 from '../images/perfil-cliente-nuevoPlan4.jpg';
import perfilclientenuevoplan5 from '../images/perfil-cliente-nuevoPlan5.jpg';
import perfilclientenuevoplan6 from '../images/perfil-cliente-nuevoPlan6.jpg';
import perfilclientenuevoplan7 from '../images/perfil-cliente-nuevoPlan7.jpg';
import { useHistory } from "react-router-dom";


const InstruccionesClient = props => {
    const history = useHistory();

    return (
        <>
            <button className="btn btn-info ml-5 mt-3 m-2 mb-3 float-left" onClick={() => history.goBack()}>Volver a mi perfíl</button>
            <h1 className="text-center mt-2 mb-4 mr-5">¿Necesitas ayuda?</h1>
            <div className="row">
                <div className="col-md-1 col-xs-1"></div>
                <div className="card col-md-10 col-xs-10" >

                    <div className="card" /* contratar un nuevo plan */>
                        <div className="card-header">
                            <h2 className="card-title mt-2">¿Quieres contratar un nuevo plan?</h2>
                        </div>
                        <div className="card-body">
                            {/* <div class="alert alert-danger" role="alert">
                                <h4>Si tienes un plan activo no puedes contratar otro plan</h4>
                            </div> */}
                            <h3>Activa tu plan:</h3>
                            <h4 className="mt-4 ml-4">1) En tu perfil haz click en el boton "Contratar un nuevo plan"</h4>
                            <img src={perfilclientenuevoplan1} className="mt-3 ml-4 mb-4" width="1200px" height="600px" />

                            <h4 className="mt-4 ml-4">2) Para contratar un nuevo plan primero debes elegir a tu equipo de salud</h4>
                            <img src={perfilclientenuevoplan2} className="mt-3 ml-4 mb-4" width="1200px" height="600px" />

                            <h4 className="mt-4 ml-4">3) Primero debes elegir un o una Nutricionista</h4>
                            <img src={perfilclientenuevoplan3nutri1} className="mt-3 ml-4 mb-4" width="1200px" height="600px" />

                            <h4 className="mt-4 ml-4">4) ¿No sabes a quién elegir? haz click en "Más información" para ver su especialidad y descripción</h4>
                            <img src={perfilclientenuevoplan3nutri2} className="mt-3 ml-4 mb-4" width="1200px" height="400px" />

                            <h4 className="mt-4 ml-4">5) Cuando quieras elegir a tu nutricionista, agregalo a tu plan</h4>
                            <img src={perfilclientenuevoplan3nutri3} className="mt-3 ml-4 mb-4" width="1200px" height="400px" />

                            <h4 className="mt-4 ml-4">6) Ahora, debes elegir a tu entrenador</h4>
                            <img src={perfilclientenuevoplan3nutri4} className="mt-3 ml-4 mb-4" width="1200px" height="400px" />

                            <h4 className="mt-4 ml-4">7) Debes elegir un o una entrenador</h4>
                            <img src={perfilclientenuevoplan3tp1} className="mt-3 ml-4 mb-4" width="1200px" height="600px" />

                            <h4 className="mt-4 ml-4">8) ¿No sabes a quién elegir? haz click en "Más información" para ver su especialidad y descripción</h4>
                            <img src={perfilclientenuevoplan3tp2} className="mt-3 ml-4 mb-4" width="1200px" height="360px" />

                            <h4 className="mt-4 ml-4">9) Cuando quieras elegir a tu Personal Trainer, agregalo a tu plan </h4>
                            <img src={perfilclientenuevoplan3tp3} className="mt-3 ml-4 mb-4" width="1200px" height="360px" />

                            <h4 className="mt-4 ml-4">10) ¡Felicitaciones! Ya elegiste a tu equipo de salud, sigamos con tu información de salud</h4>
                            <img src={perfilclientenuevoplan4} className="mt-3 ml-4 mb-4" width="1250px" height="400px" />

                            <h4 className="mt-4 ml-4">11) Ahora debes completar el siguiente formulario </h4>
                            <img src={perfilclientenuevoplan5} className="mt-3 ml-4 mb-4 " width="1200px" height="500px" />

                            <h4 className="mt-4 ml-4">12) Acepta los terminos de confidencialidad y hacer click en "Crear Nuevo plan"</h4>
                            <img src={perfilclientenuevoplan6} className="mt-3 ml-4 mb-4" width="1200px" height="100px" />

                            <h4 className="mt-4 ml-4">13) ¡¡¡Listo!!! ya creaste tu plan, ahora debes esperar que tu Nutricionista y Personal Trainer hagan sus evaluaciones según la información que completaste en el formulario, se pongan en contacto contigo y te envíen sus pautas</h4>
                            <img src={perfilclientenuevoplan7} className="mt-3 ml-4 mb-" width="1200px" height="140px" />
                            <h5 className="card-text mb-3"> </h5>
                        </div>
                    </div>


                    <div className="card" /* chat cliente - PT */>
                        <div class="card-header">
                            <h2 class="card-title mt-2">¿Quieres comunicarte con tu Personal Trainer?</h2>
                        </div>
                        <div class="card-body">
                            <div class="alert alert-danger" role="alert">
                                <h4>Para contactar a tu entrenador, necesitas tener contratado un plan</h4>
                            </div>
                            <h3>Si ya tienes un plan, sigue los siguientes pasos:</h3>
                            <h4 className="mt-4 ml-4">1) En tu perfil haz click en el botón "Contactar a mi equipo de salud"</h4>
                            <img src={perfilclientechatpt1} className="mt-3 ml-4 mb-4" width="1200px" height="500px" />
                            <h4 className="mt-4 ml-4">2) En tu equipo de salud selecciona "Contactar a mi entrenador"</h4>
                            <img src={perfilclientechatpt2} className="mt-3 ml-4 mb-4" width="1200px" height="500px" />
                            <h4 className="mt-4 ml-4">3) En la página de chat puedes escribirle un mensaje y cuando te conteste tu Personal Trainer te llegará un aviso al mail</h4>
                            <img src={perfilclientechatpt3} className="mt-3 ml-4 mb-5" width="1200px" height="500px" />
                            <h5 class="card-text mb-3"> </h5>
                        </div>
                    </div>

                    <div className="card" /* chat cliente - nutri */>
                        <div className="card-header">
                            <h2 className="card-title mt-2">¿Quieres comunicarte con tu Nutricionista?</h2>
                        </div>
                        <div className="card-body">
                            <div class="alert alert-danger" role="alert">
                                <h4>Para contactar a tu nutricionista, necesitas tener contratado un plan</h4>
                            </div>
                            <h3>Sigue los siguientes pasos:</h3>
                            <h4 className="mt-4 ml-4">1) En tu perfil haz click en el boton "Contactar a mi equipo de salud"</h4>
                            <img src={perfilclientechatnutri1} className="mt-3 ml-4 mb-4" width="1200px" height="500px" />
                            <h4 className="mt-4 ml-4">2) En tu equipo de salud selecciona "Contactar a mi nutricionista"</h4>
                            <img src={perfilclientechatnutri2} className="mt-3 ml-4 mb-4" width="1200px" height="500px" />
                            <h4 className="mt-4 ml-4">3) En la página de chat puedes escribirle un mensaje y cuando te conteste tu Nutricionista te llegará un aviso al mail</h4>
                            <img src={perfilclientechatnutri3} className="mt-3 ml-4 mb-5" width="1200px" height="500px" />
                            <h5 className="card-text mb-3"> </h5>
                        </div>
                    </div>

                    <div className="card" /* Ver mis planes anteiores */>
                        <div className="card-header">
                            <h2 className="card-title mt-2">¿Quieres ver tus planes anteriores?</h2>
                        </div>
                        <div className="card-body">
                            <div class="alert alert-danger" role="alert">
                                <h4>Debes haber contratado un segundo plan para ver tus planes anteriores</h4>
                            </div>
                            <h3>Si ya tienes más de 2 planes, sigue los siguientes pasos:</h3>
                            <h4 className="mt-4 ml-4">1) En tu perfil haz click en el botón "Ver mis planes anteriores"</h4>
                            <img src={perfilclienteplanes1} className="mt-3 ml-4 mb-4" width="1200px" height="500px" />
                            <h4 className="mt-4 ml-4">2) En "Planes anteriores" tienes la información de cada plan</h4>
                            <img src={perfilclienteplanes3} className="mt-3 ml-4 mb-4" width="1200px" height="500px" />
                            <h4 className="mt-4 ml-4">3) Puedes ver la pauta alimentaria que tu nutricionista te indicó</h4>
                            <img src={perfilclienteplanes4} className="mt-3 ml-4 mb-4" width="1200px" height="500px" />
                            <h4 className="mt-4 ml-4">4) Puedes ver la rutina de ejercicios que tu entrenador te indicó</h4>
                            <img src={perfilclienteplanes5} className="mt-3 ml-4 mb-5" width="1200px" height="500px" />
                            <h5 className="card-text mb-3"> </h5>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default InstruccionesClient