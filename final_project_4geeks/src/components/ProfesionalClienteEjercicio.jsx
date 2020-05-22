import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link, useHistory } from "react-router-dom";
import PdfViewer from "./PdfViewer";
/* RESPONSIVE */


const ProfesionalClienteEjercicio = props => {
    const [client, setClient] = useState();
    const {store} = useContext(Context);
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
    const file = !!plan && `${store.path}/static/workouts/${plan.detail.entrenamiento}`;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    {
                        !!client ? (
                            <>
                                 <button className="btn btn-outline-info m-2 mb-3 float-left" onClick={() => history.goBack()}>Volver</button>
                                <h2 className="text-center my-3">Pauta de entrenamiento</h2>
                                {
                                    !!plan.detail.entrenamiento ?
                                        <PdfViewer file={file} />
                                        :
                                        <div class="alert alert-warning" role="alert">
                                            Aún no tiene un plan de ejercicio
                                        </div>
                                }
                            </>
                        ) :
                            <div className="spinner-border text-info" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                    }
                    {/* <div className="container" >
                        <div className="row">
                            <div className="col-8">
                                <form>
                                    <div className="form-group row">
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1"
                                            onChange={actions.handleChangeFiles}
                                            name="dieta" />
                                    </div>
                                    <button type="submit" className="btn btn-outline-info m-2 float-left" >Cargar plan alimentario</button>
                                </form>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default ProfesionalClienteEjercicio;