import React, { useContext } from 'react'
import { Context } from '../../store/appContext'
import { Link, useHistory } from 'react-router-dom'
/*  RESPONSIVE */

const CreatePlan = props => {
    const history = useHistory();
    const { store, actions } = useContext(Context)

    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-xs-8 offset-md-2">

                        {
                            !!store.currentUser && (store.currentUser.user.role.id == 3 || store.currentUser.user.role.id == 2) ?
                                <div className="spinner-border text-info" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                :
                                !!store.trainer_email && !!store.nutritionist_email ?
                                    <>
                                        <h1>Crea un nuevo plan</h1>

                                        <form onSubmit={e => actions.createPlan(e, store.currentUser.user.client_id, store.currentUser.user.email, store.trainer_email, store.nutritionist_email, props.history)}>
                                            {/* <fieldset className="form-group" >
                                <div className="row">
                                    <legend className="col-form pt-0">Indique su género</legend>
                                    <div className="col-md-10 col-xs-10">
                                        <div className="custom-control custom-switch">
                                            <input type="radio" id="customRadio1" name="gender" value='Femenino' className="custom-control-input" onChange={actions.handleChange}/>
                                            <label className="custom-control-label" htmlFor="customRadio1">Femenino</label>
                                        </div>
                                        <div className="custom-control custom-switch">
                                            <input type="radio" id="customRadio2" name="gender" value='Masculino' className="custom-control-input" onChange={actions.handleChange}/>
                                            <label className="custom-control-label" htmlFor="customRadio2">Masculino</label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset> */}
                                            <div className="form-group row" /*Objetivo*/>
                                                <legend className="col-form pt-0">Objetivo</legend>
                                                <div className="col-md-10 col-xs-10">
                                                    <input required type="text" name='objective' className="form-control" id="objetivo" onChange={actions.handleChange} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Presenta Alguna enfermedad?</label>
                                                <textarea rows='3' className="form-control" id="exampleInputEmail1" placeholder="¿Que enfermedad presenta?"
                                                    name='enfermedad'
                                                    onChange={actions.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Toma algun medicamento? Con que frecuencia?</label>
                                                <textarea rows='3' className="form-control" id="exampleInputEmail1" placeholder="Escriba aqui el medicamento que toma y con que frecuencia"
                                                    name='medicamentos'
                                                    onChange={actions.handleChange} />
                                            </div>
                                            <input type="hidden" value={store.trainer_email} className="form-control" />
                                            <input type="hidden" value={store.nutritionist_email} className="form-control" />
                                            <input type="hidden" value={!!store.currentUser && store.currentUser.user.client_id} className="form-control" onC name='id_client' />
                                            <input type="hidden" value={!!store.currentUser && store.currentUser.user.email} className="form-control" />

                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">¿Le han realizado alguna operacion o operaciones?</label>
                                                <textarea rows='3' className="form-control" id="exampleInputEmail1" placeholder="Escriba aqui el medicamento que toma y con que frecuencia"
                                                    name='ciruguias'
                                                    onChange={actions.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">¿Con que tipo de equipamientos cuanta para hacer ejercicio?</label>
                                                <textarea rows='3' className="form-control" id="exampleInputEmail1" placeholder="Gimnasio, Bandas elasticas,TRX, Entrenamiento en casa, etc"
                                                    name='description'
                                                    onChange={actions.handleChange} />
                                            </div>
                                            <fieldset className="form-group" /*orina*/>
                                                <div className="row">
                                                    <legend className="col-form pt-0">Los últimos 7 días, ¿cómo ha notado su orina?</legend>
                                                    <div className="col-md-1 col-xs-1"></div>
                                                    <div className="col-md-10 col-xs-10">
                                                        <div className="custom-control custom-switch">
                                                            <input type="radio" id="orina1" name="orina" className="custom-control-input" value='Color amarillo claro' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="orina1">Color amarillo claro</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="radio" id="orina2" name="orina" className="custom-control-input" value='Color amarillo oscuro' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="orina2">Color amarillo oscuro</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="orina3" name="orina" className="custom-control-input" value='Olor dulce' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="orina3">Olor dulce</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="orina4" name="orina" className="custom-control-input" value='Dolor al orinar' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="orina4">Dolor al orinar</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="orina5" name="orina" className="custom-control-input" value='Sangre en la orina' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="orina5">Sangre en la orina</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <fieldset className="form-group" /*digestion*/>
                                                <div className="row">
                                                    <legend className="col-form pt-0">Los últimos 7 días, ¿cómo ha notado sus heces?</legend>
                                                    <div className="col-md-1 col-xs-1"></div>
                                                    <div className="col-md-10 col-xs-10">
                                                        <div className="custom-control custom-switch">
                                                            <input type="radio" id="dig1" name="digestion" className="custom-control-input" value='Normal' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="dig1">Normal</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="radio" id="dig2" name="digestion" className="custom-control-input" value='Estítica' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="dig2">Estítica</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="radio" id="dig3" name="digestion" className="custom-control-input" value='Diarrea' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="dig3">Diarrea</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="radio" id="dig4" name="digestion" className="custom-control-input" value='Presencia de sangre en las
                                            heces' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="dig4">Presencia de sangre en las
                                            heces</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*signosysintomas*/>
                                                <div className="row">
                                                    <legend className="col-form pt-0">¿Presenta alguno de estos síntomas?</legend>
                                                    <div className="col-md-4 col-xs-4">

                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="sys1" name="sintomas" value='Dolor de cabeza' className="custom-control-input" onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="sys1">Dolor de cabeza</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="sys2" name="sintomas" value='Manos y/o pies hichados' className="custom-control-input" onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="sys2">Manos y/o pies hichados</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="sys3" name="sintomas" value='Polidipsia' className="custom-control-input" onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="sys3">Mucha sed durante todo el día</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="sys4" name="sintomas" value='Fotopsia' className="custom-control-input" onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="sys4">Veo puntitos negros flotando como moscas</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="sys5" name="sintomas" value='Poliurea' className="custom-control-input" onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="sys5">Voy más de 7 veces a orinar durante el dia</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="sys6" name="sintomas" value='Polifagia' className="custom-control-input" onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="sys6">A pesar de comer, el hambre no disminuye</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-xs-4">
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="sys7" name="sintomas" value='Reflujo gástrico' className="custom-control-input" onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="sys7">Reflujo gástrico</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="sys8" name="sintomas" value='Acidez estomacal' className="custom-control-input" onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="sys8">Acidez estomacal</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="sys9" name="sintomas" value='Mareos' className="custom-control-input" onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="sys9">Mareos</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="sys10" name="sintomas" value='Náuseas' className="custom-control-input" onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="sys10">Náuseas</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="sys11" name="sintomas" value='Vómitos' className="custom-control-input" onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="sys11">Vómitos</label>
                                                        </div>
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" id="sys12" name="sintomas" value='Vómitos inducidos' className="custom-control-input" onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="sys12">Vómitos inducidos</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*ayunos*/>
                                                <div className="row">
                                                    <legend className="col-form pt-0">¿Realiza ayunos?</legend>

                                                    <div className="col-md-8 col-xs-8">
                                                        <input type="text" className="form-control" id="ayunos" name='ayuno'
                                                            placeholder="¿Cuánto dura su ayuno y cada cuantos días ayuna?" onChange={actions.handleChange} />
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*apetito*/>
                                                <div className="row">
                                                    <legend className="col-form pt-0">¿Cómo ha presentado su apetito los últimos 7 días?</legend>
                                                    <div className="col-md-1 col-xs-1">
                                                    </div>
                                                    <div className="col-md-10 col-xs-10">
                                                        <div className="form-check custom-switch">
                                                            <input type="radio" id="apetito1" name="apetito" className="custom-control-input" value='Normal' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="apetito1">Normal</label>
                                                        </div>
                                                        <div className="form-check custom-switch">
                                                            <input type="radio" id="apetito2" name="apetito" className="custom-control-input" value='Aumentado' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="apetito2">Aumentado</label>
                                                        </div>
                                                        <div className="form-check custom-switch">
                                                            <input type="radio" id="apetito3" name="apetito" className="custom-control-input" value='Disminuido' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="apetito3">Disminuido</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*ansiedad*/>
                                                <div className="row">
                                                    <legend className="col-form pt-0">En escala del 0 al 5, ¿qué nivel ansiedad presenta al comer?
                                </legend>
                                                    <div className="col-md-1 col-xs-1"></div>
                                                    <div className="col-md-10 col-xs-10">
                                                        <div className=" custom-switch form-check">
                                                            <input type="radio" id="ansiedad1" name="ansiedad" className="custom-control-input" value='0' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="ansiedad1">0</label>
                                                        </div>
                                                        <div className=" custom-switch form-check">
                                                            <input type="radio" id="ansiedad2" name="ansiedad" className="custom-control-input" value='1' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="ansiedad2">1</label>
                                                        </div>
                                                        <div className=" custom-switch form-check">
                                                            <input type="radio" id="ansiedad3" name="ansiedad" className="custom-control-input" value='2' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="ansiedad3">2</label>
                                                        </div>
                                                        <div className=" custom-switch form-check">
                                                            <input type="radio" id="ansiedad4" name="ansiedad" className="custom-control-input" value='3' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="ansiedad4">3</label>
                                                        </div>
                                                        <div className=" custom-switch form-check">
                                                            <input type="radio" id="ansiedad5" name="ansiedad" className="custom-control-input" value='4' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="ansiedad5">4</label>
                                                        </div>
                                                        <div className=" custom-switch form-check">
                                                            <input type="radio" id="ansiedad6" name="ansiedad" className="custom-control-input" value='5' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="ansiedad6">5</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*tabaco*/>
                                                <div className="row">
                                                    <legend className="col-form pt-0">¿Fuma tabaco? ¿Cuántas veces a la semana?</legend>
                                                    <div className="col-md-1 col-xs-1"> </div>
                                                    <div className="col-md-10 col-xs-10">
                                                        <div className="form-check custom-switch">
                                                            <input type="radio" id="tabaco" name="tabaco" className="custom-control-input" value='No fumo' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="tabaco">No fumo</label>
                                                        </div>
                                                        <div className="form-check custom-switch">
                                                            <input type="radio" id="tabaco2" name="tabaco" className="custom-control-input" value='0 a 10 al día' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="tabaco2">0 a 10 al día</label>
                                                        </div>
                                                        <div className="form-check custom-switch">
                                                            <input type="radio" id="tabaco3" name="tabaco" className="custom-control-input" value='11 a 20 al día' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="tabaco3">11 a 20 al día</label>
                                                        </div>
                                                        <div className="form-check custom-switch">
                                                            <input type="radio" id="tabaco4" name="tabaco" className="custom-control-input" value='más de 20 al día' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="tabaco4">más de 20 al día</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*alcohol*/>
                                                <div className="row">
                                                    <legend className="col-form pt-0">¿Consume alcohol? ¿Cuántas veces a la semana?</legend>
                                                    <div className="col-md-1 col-xs-1"></div>
                                                    <div className="col-md-10 col-xs-10">
                                                        <div className="form-check custom-switch">
                                                            <input type="radio" id="alcohol1" name="alcohol" className="custom-control-input" value='No consumo alcohol' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="alcohol1">No consumo alcohol</label>
                                                        </div>
                                                        <div className="form-check custom-switch">
                                                            <input type="radio" id="alcohol2" name="alcohol" className="custom-control-input" value='de 0 a 2 veces por semana' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="alcohol2">de 0 a 2 veces por semana</label>
                                                        </div>
                                                        <div className="form-check custom-switch">
                                                            <input type="radio" id="alcohol3" name="alcohol" className="custom-control-input" value='de 3 a 4 veces por semana' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="alcohol3">de 3 a 4 veces por semana</label>
                                                        </div>
                                                        <div className="form-check custom-switch">
                                                            <input type="radio" id="alcohol4" name="alcohol" className="custom-control-input" value='5 o más veces por semana' onChange={actions.handleChange} />
                                                            <label className="custom-control-label" htmlFor="alcohol4">5 o más veces por semana </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*actividad_fisica*/>
                                                <div className="row">
                                                    <legend className="col-form pt-0">¿Hace Actividad física? ¿Cuántas veces a la semana?</legend>

                                                    <div className="col-md-10 col-xs-10">
                                                        <textarea rows='3' onChange={actions.handleChange} name='actividad_fisica' className="form-control" id="actfis" placeholder="¿Qué actividad o ejercicio realiza?" />

                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*supl_nut*/>
                                                <div className="row">
                                                    <legend className="col-form pt-0">¿Toma algún suplemento nutricional?</legend>

                                                    <div className="col-md-10 col-xs-10">
                                                        <textarea rows='2' className="form-control" name='suplementos' id="supl_nut" placeholder="¿Qué suplemento toma? Y Cuanto?" onChange={actions.handleChange} />

                                                    </div>


                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*lesiones*/>
                                                <legend className="col-form pt-0">¿Presenta alguna lesión o molestia?</legend>
                                                <div className="row justify-center">

                                                    <div className="col-md-10 col-xs-10">
                                                        <textarea rows='2' type="text" name='lesiones' className="form-control" id="lesiones" placeholder="¿Qué lesión presenta?" onChange={actions.handleChange} />

                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*alergiaAlim*/>
                                                <legend className="col-form pt-0">¿Presenta alguna alergia o intolerancia alimentaria?</legend>
                                                <div className="row justify-center">

                                                    <div className="col-md-10 col-xs-10">
                                                        <textarea rows='2' name='alergias' className="form-control" id="alergiaAlim" placeholder="¿A qué/cuales alimento/s?" onChange={actions.handleChange} />

                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*peso*/>
                                                <legend className="col-form pt-0">Cuál es su peso actual?</legend>
                                                <div className="row justify-center">
                                                    <div className="col-md-7 col-xs-7">
                                                        <input required name='peso' type="text" className="form-control" id="peso" placeholder="Indique el peso" onChange={actions.handleChange} />
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*talla*/>
                                                <legend className="col-form pt-0">Cuál es su altura actual?</legend>
                                                <div className="row justify-center">
                                                    <div className="col-md-7 col-xs-7">
                                                        <input required name='altura' type="text" className="form-control" id="talla" placeholder="Indique su altura en centimetros" onChange={actions.handleChange} />
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="form-group" /*ccintura*/ >
                                                <legend className="col-form pt-0">Cuál es su circunferencia de cintura?</legend>
                                                <div className="row justify-center">
                                                    <div className="col-md-7 col-xs-7">
                                                        <input required name='cintura' type="text" className="form-control" id="ccintura" placeholder="Indique su circunferencia de cintura en centimetros" onChange={actions.handleChange} />
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input required className="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Acepto los terminos de confidencialidad</label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block mb-3">Crear Nuevo Plan</button>

                                        </form>
                                    </>
                                    :
                                    <>
                                        <button onClick={() => history.goBack()} className="btn btn-outline-info mt-3">Volver</button>
                                        <div className="alert alert-warning my-3" role="alert">
                                            Para crear un plan, porfavor elige tu equipo de salud primero
                                </div>
                                        <div>
                                            <Link to="/team" className="btn btn-info mb-3">Ver especialistas</Link>
                                        </div>
                                    </>
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default CreatePlan