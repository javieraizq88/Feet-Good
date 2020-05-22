import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link, useHistory } from "react-router-dom";
/* RESPONSIVE */
const ProfesionalClienteFicha = props => {
    const [client, setClient] = useState();
    const { store } = useContext(Context);
    const { id, plan_id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(store.path + "/admin/client/" + id, {
            method: 'GET',
            headers: {
                "Content-type": 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (data && data.length > 0) {
                    setClient(data[0])
                }
            })

    }, [])

    const filteredPlanById = () => {
        if (!!client && !!plan_id) {
            let planById = client.all_plans.filter((plan) => plan.detail.id === parseInt(plan_id));
            return planById[0];
        }
    }
    const plan = filteredPlanById();

    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        {
                            !!client && (store.currentUser.user.role.id == 3 || store.currentUser.user.role.id == 2)? (
                                <>
                                    <button className="btn btn-outline-info m-2 mb-3 float-left" onClick={() => history.goBack()}>Volver</button>
                                    <h3 className="text-center my-3">Ficha de {client.name} {client.last_name}</h3>

                                    {!!plan ?
                                        <div className="card my-4">
                                            <div className="card-header" >
                                                <h4>Fecha del plan: {plan.detail.created}</h4>
                                            </div>
                                            <div className="card-body">
                                                <h5>Activdad física: {plan.detail.actividad_fisica}</h5>
                                                <h5>Consumo de alcohol: {plan.detail.alcohol}</h5>
                                                <h5>Alergias alimentarias: {plan.detail.alergias}</h5>
                                                <h5>Ansiedad: {plan.detail.ansiedad}</h5>
                                                <h5>Apetito: {plan.detail.apetito}</h5>
                                                <h5>Ayunos: {plan.detail.ayunos}</h5>
                                                <h5>Cirugias: {plan.detail.ciruguias}</h5>
                                                <h5>Plan creado: {plan.detail.creates}</h5>
                                                <h5>Digestion: {plan.detail.digestion}</h5>
                                                <h5>Embarazo: {plan.detail.embarazo}</h5>
                                                <h5>Enfermedades: {plan.detail.enfermedades}</h5>
                                                <h5>Lesiones: {plan.detail.lesiones}</h5>
                                                <h5>Medicamentos: {plan.detail.medicamento}</h5>
                                                <h5>Objetivo del plan: {plan.detail.objective}</h5>
                                                <h5>Orina: {plan.detail.orina}</h5>
                                                <h5>Peso actual: {plan.detail.peso}</h5>
                                                <h5>Altura actual: {plan.detail.altura}</h5>
                                                <h5>Circunferencia de cintura: {plan.detail.cintura}</h5>
                                                <h5>Signos y sintomas: {plan.detail.sintomas}</h5>
                                                <h5>Suplementos alimentarios: {plan.detail.suplementos}</h5>
                                                <h5>Tabaco: {plan.detail.tabaco}</h5>
                                            </div>
                                        </div>

                                        :
                                        <div class="alert alert-danger" role="alert">
                                            El cliente todavía no comppleta la ficha
                                             </div>
                                    }
                                </>
                            ) :
                                <div className="spinner-border text-info" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                        }

                    </div>
                </div>
            </div>

        </>

    )

}
export default ProfesionalClienteFicha;