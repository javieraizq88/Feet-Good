import React from 'react';
import nutritionImage from '../images/nutrition.jpg';
import fitnessImage from '../images/fitness.jpg';
import person1Image from '../images/person1.jpg';
import person2Image from '../images/person2.jpg';
import person3Image from '../images/person3.jpg';
import { Link } from 'react-router-dom';

/* RESPOSIVE */

const Home = props => {

    return (
        <>
            <div className="container-fluid">


                <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel" >
                    <ol className="carousel-indicators ">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner " role="listbox">
                        <div className="carousel-item active ">
                            <img src="https://www.cosmopolitan.com.mx/wp-content/uploads/2018/06/5-Maneras-efectivas-de-motivarte-para-hacer-ejercicio.jpg" id="imagen-carrucel-1" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src="https://picsum.photos/id/292/1280/720" id="imagen-carrucel-1" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div className="carousel-item justify-content-center">
                            <img src="https://picsum.photos/id/841/1280/720" id="imagen-carrucel-1" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* Jumbotron */}
                <div className="row">
                    <div className="col-md col-xs">
                    </div>
                </div>

                <h1 className="font m-5">Dos ingredientes esenciales...</h1>
                <div className="row">
                    {/* Cards */}
                    <div className="col-md-6 col-xs-6">
                        <div className="card bg-transparent homeCard ml-5">
                            <img className="card-img-top card-img homeImg" src={nutritionImage} alt="Card image cap nutritionist" />
                            <div className="card-body">
                                <h2 className="card-title font">Nutrición</h2>
                                <p className="card-text font2">Una vida saludable comieza en la cocina</p>
                                <Link to="/nutritional-education" className="btn btn-outline-info">Por qué necesitamos una dieta especializada? </Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-xs-6">
                        <div className="card bg-transparent homeCard">
                            <img className="card-img-top card-img bg-transparent homeImg" src={fitnessImage} alt="Card image cap trainer" />
                            <div className="card-body">
                                <h2 className="card-title font">Entrenamiento fisico</h2>
                                <p className="card-text font2">Nuestro cuerpo está diseñado para estar en movimiento</p>
                                <Link to="/fitness-education" className="btn btn-outline-info">Aprende la mejor manera de cuidar de el</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <h1 className="font m-5">Que dicen nuestros clientes?</h1>
                <div className="row">
                    <div className="card-group">
                        <div className="card bg-transparent homeCard ml-4">
                            <img src={person2Image} className="card-img-top rounded-circle team-cards" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font2">Anna</h5>
                                <p className="card-text font2">"Muy buena experiencia con mi equipo. Recomendado!"</p>
                            </div>
                        </div>
                        <div className="card bg-transparent homeCard">
                            <img src={person1Image} className="card-img-top rounded-circle team-cards" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font2">Ignacio</h5>
                                <p className="card-text font2">"Desde que empecé a usar esta app, he visto resultados positivos en mi cuerpo"</p>
                            </div>
                        </div>
                        <div className="card bg-transparent homeCard">
                            <img src={person3Image} className="card-img-top rounded-circle team-cards" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font2">Francisca</h5>
                                <p className="card-text font2">"Tener un plan personalizado ha cambiado mi estilo de vida"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home;