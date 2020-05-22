import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const PlansCard = props => {
    const { store, actions } = useContext(Context)
    const plan = props.plan.all_plans
    console.log(props);

    return (
        <>
            {
                !!plan ?
                    <div className="card col-md-7 col-xs-5 ml-5 my-3">
                        <div className="card-header">
                            <h5>Detalles del plan</h5>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Profesionales</h5>
                            <p className="card-text">Nutricionista: {plan.nutritionist_name} {plan.nutritionist_last_name}</p>
                            <p className="card-text">Personal trainer: {plan.trainer_name} {plan.trainer_last_name}</p>
                            <h5 className="card-title">Objetivo</h5>
                            <p className="card-text"> {plan.objective}</p>
                            <h5 className="card-title">Fecha inicio</h5>
                            <p className="card-text"> {plan.created}</p>
                            <Link to={`/profile/professional/clients/${plan.client_id}/plans/${plan.id}/diet`} type="button" className="btn btn-outline-info ml-4 mr-5">Pauta alimentaria</Link>
                            <Link to={`/profile/professional/clients/${plan.client_id}/plans/${plan.id}/training`} type="button" className="btn btn-outline-info">Pauta de ejercicios</Link>
                        </div>
                    </div>
                    :
                        <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                        </div>

        }

        </>
    )
}

export default PlansCard;