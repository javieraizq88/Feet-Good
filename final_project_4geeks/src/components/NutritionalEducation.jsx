import React from 'react'
import nutritioneducation from '../images/nutritioneducation.jpg';
import { useHistory } from 'react-router-dom';
/*RESPONSIVE*/
const NutritionalEducation = props => {
    const history = useHistory();

    return (
        <>
            <div className="container">
                <div className="card my-3 bg-transparent homeCard">
                    <div className="row no-gutters">
                        <div className="col-md-4 col-xs-4">
                            <img src={nutritioneducation} className="card-img" width="250px" height="400px" />
                        </div>
                        <div className="col-md-8 col-xs-8">
                            <div className="card-body">
                                <h3 className="card-title font">Deberia obtener una dieta personalizada?</h3>
                                <p className="font2">Lo que comemos todos los días afecta a nuestra salud más de lo que pudiéramos pensar. Afecta a cómo nos sentimos hoy, mañana y en el futuro más lejano. Una buena dieta con los valores nutricionales correctos es uno de los elementos más importantes para llevar un estilo de vida saludable.</p>
                                    <p className="font2">Sin embargo, por las prisas propias de las grandes ciudades como Santiago, en ocasiones nos es complicado comer de manera sana. Compaginar el trabajo con la elaboración de una dieta sana diaria puede resultar difícil, aunque ahora ya te puedes olvidar de eso gracias a <bold>FitGood</bold>.
                                    En combinación con el ejercicio, nuestra dieta puede ayudarnos a alcanzar y mantener un peso saludable, reducir el riesgo de enfermedades crónicas y promover nuestra salud en general.</p>
                                    <p className="font2">Además, con nuestra una personalizada, hoy en día hasta las personas más ocupadas pueden mantener una dieta extremadamente saludable, ya que tendrán una dieta con todos los valores nutricionales necesarios y con el número de carbohidratos exactos. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-info m-2 mb-3 float-right" onClick={() => history.goBack()}>Volver</button>
            </div>
        </>


    )
}
export default NutritionalEducation;