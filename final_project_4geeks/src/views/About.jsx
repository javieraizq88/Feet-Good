import React from 'react';
import historyImage from '../images/history.jpg';
import missionImage from '../images/mission.jpg';
/* RESPONSIVE*/

const About = props => {
    return (
        <>
            <div className="container">
                <div className="card my-3 homeCard bg-transparent">
                    <div className="row no-gutters">
                        <div className="col-md-4 col-xs-4">
                            <img src={historyImage} className="card-img team-cards" alt="..." />
                        </div>
                        <div className="col-md-8 col-xs-8">
                            <div className="card-body">
                                <h2 className="card-title font">Nuestra historia</h2>
                                <p className="card-text font2">Somos un grupo de personas con diversos backgrounds relacionados a la salud, nos conocimos aprendiendo a programar y vimos una oportunidad de unir nuestros conocimientos para ofrecer un servicio especializado que podría hacer una diferencia en la vida de las personas. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 homeCard bg-transparent">
                    <div className="row no-gutters">
                        <div className="col-md-8 col-xs-8">
                            <div className="card-body">
                                <h2 className="card-title font">Nuestra misión</h2>
                                <p className="card-text font2">Que todos puedan vivir en las mejores condiciones! Creemos que todas las personas podrían aumentar su cálidad de vida en cuestión de un mes con el asesoramiento correcto y que esto debería ser fácil y accesible. Queremos que algo tan prioritario como un plan de salud personalizado.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-4">
                            <img src={missionImage} className="card-img team-cards" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;