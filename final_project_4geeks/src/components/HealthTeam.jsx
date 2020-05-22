import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { Link, useHistory } from 'react-router-dom';
/* RESPONSIVE */

const HealthTeam = props => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    useEffect(() => {
        actions.adminLoadProfesionals('/admin/profesional')
    }, [])


    const getCurrentPlan = () => {
        if (!!store.currentUser && !!store.currentUser.user) {
            const plans = store.currentUser.user.planes_id;
            return plans && plans.length > 0 && plans[plans.length - 1];
        }
    }
    const currentPlan = getCurrentPlan();

    const getCurrentNutritionist = () => {
        if (currentPlan && !!store.profesionals && !!store.profesionals.nutritionists) {
            return store.profesionals.nutritionists.find((nutritionist) => nutritionist.id === currentPlan.all_plans.nutritionist_id);
        }
    }
    const currentNutritionist = getCurrentNutritionist();

    const getCurrentTrainer = () => {
        if (currentPlan && !!store.profesionals && !!store.profesionals.trainers) {
            return store.profesionals.trainers.find((trainer) => trainer.id === currentPlan.all_plans.trainer_id);
        }
    }
    const currentTrainer = getCurrentTrainer();
    console.log(currentTrainer)

    /* linea 26 llama al ultimo nutri*/
    return (
        <>
            <div className="container my-3">
                <button onClick={() => history.goBack()} className="btn btn-outline-warning mt-3">Volver</button>

                <h1 className="text-center my-3">Mi equipo de salud </h1>

                {
                    store.currentUser === null ?
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        :

                        (store.currentUser.user.role.id === 3 || store.currentUser.user.role.id === 2) ?
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div> :

                            store.currentUser.user.planes_id.length == 0 ?
                                <div class="alert alert-warning" role="alert">
                                    {store.error}
                                    No tienes ningun plan contratado :(
                                </div>
                                :

                                <div className="container">
                                    <div className="row">

                                        <div className="col-md-5 col-xs-5 card border-success mt-4 ml-3">
                                            <img src={`${store.path}/static/images/avatar/nutritionist/${!!currentNutritionist && currentNutritionist.avatar}`} className="card-img-top mt-2 square" />
                                            <div className="card-body">
                                                <h5 className="card-title">{store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_name} {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_last_name} </h5>
                                                <p className="card-text">Hola! Soy tu nutricionista, si tienes alguna duda y necesitas contactarme, haz click en el siguiente botón </p>
                                                <Link to={"/profile/professional/clients/contact/nutritionist/" +
                                                    store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.client_id + '/' +
                                                    store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.id} className="btn btn-success">Contactar a mi nutricionista</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-1 col-xs-1"></div>
                                        <div className="col-md-5 col-xs-5 card border-warning mt-4 ml-3">
                                            <img src={`${store.path}/static/images/avatar/trainer/${!!currentTrainer && currentTrainer.avatar}`} className="card-img-top mt-2 square" />
                                            <div className="card-body">
                                                <h5 className="card-title">{store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_name} {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_last_name}</h5>
                                                <p className="card-text">Hola! Soy tu Personal trainer, si tienes alguna duda y necesitas contactarme, haz click en el siguiente botón</p>
                                                <Link to={"/profile/professional/clients/contact/trainer/" +
                                                    store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.client_id + '/' +
                                                    store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.id} className="btn btn-warning">Contactar a mi entrenador</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                }
            </div>

        </>
    )
}
export default HealthTeam;