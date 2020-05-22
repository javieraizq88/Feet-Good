import React from 'react'
import nutritionistImage from '../images/nutritionist.jpg';
import personalImage from '../images/personal.jpg';
import { Link, useHistory } from 'react-router-dom';
/* RESPONSIVE*/
const OurTeam = props => {
    const history = useHistory();
    
    return (
        <>
        <div className="container">
        <button className="btn btn-outline-info m-2 mb-3 float-left" onClick={() => history.goBack()}>Volver</button>
                <br/>
            <h1 className="font my-4">Obtén tu equipo especializado hoy</h1>
            <div className="row">
                <div className="card col-md-6 col-xs-6 bg-transparent homeCard">
                    <div className="card text-dark bg-transparent rounded-0 homeCard">
                        <img src={nutritionistImage} className="card-img homeImg" />
                        <div className="col-md-8 col-xs-8 m-auto">
                        <Link className="btn btn-outline-info my-3" to="/nutritionists">Conoce nuestros nutricionistas</Link>
                        </div>
                    </div>
                </div>
                <div className="card col-md-6 col-xs-6 bg-transparent homeCard mb-4">
                    <div className="card text-dark bg-transparent rounded-0 homeCard">
                        <img src={personalImage} className="card-img homeImg" />
                        <div className="col-md-8 col-xs-8 m-auto">
                        <Link className="btn btn-outline-info my-3" to="/personal-trainers">Conoce nuestros entrenadores</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default OurTeam;