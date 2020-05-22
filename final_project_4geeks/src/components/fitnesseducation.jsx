import React from 'react'
import fitnesseducationtImage from '../images/fitnesseducation.jpg';
import { useHistory } from 'react-router-dom';
/* RESPONSIVE*/
const FitnessEducation = props => {
    const history = useHistory();

    return (
        <>
             <div className="container">
                <div className="card my-3 bg-transparent homeCard">
                    <div className="row no-gutters">
                        <div className="col-md-4 col-xs-4">
                            <img src={fitnesseducationtImage} className="card-img" width="250px" height="400px" />
                        </div>
                        <div className="col-md-8 col-xs-8">
                            <div className="card-body">
                                <h3 className="card-title font">Deberia obtener una rutina personalizada?</h3>
                                <p className="font2">Muchas veces cuando asistimos al gimnasio realizamos el ejercicio que más nos conviene en ese momento o el que nos apetece, sin reparar en cuando lo hicimos por última vez, ni en si debe ser ese el ejercicio adecuado para ese día. Ante todo el deporte es orden y parte de este orden pasa por controlar lo que hacemos y los días de la semana en los que lo realizamos, ya que de esta manera nuestros músculos rendirán más y mejor.</p>
                                    <p className="font2">Antes de asistir al gimnasio tenemos que tener muy claro el orden de entrenamiento que vamos a seguir. Lo principal a la hora de conseguir progresos es mantener una rutina fijada que ayude a nuestro cuerpo a aclimatarse al ejercicio y a sus demandas. Es por esto por lo que debemos establecer un calendario de actividades en el que prefijemos los días de la semana en los que vamos a trabajar cada grupo muscular.</p>
                                    <p className="font2">Con una rutina personalizada, tendras en cuenta cuantos días asistir al gimnasio y como distribuir a lo largo de estos los ejercicios a realizar para obtener los mejores resultados según tus objetivos. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-info m-2 mb-3 float-right" onClick={() => history.goBack()}>Volver</button>
                <br/>
            </div>
        </>




    )
}
export default FitnessEducation;