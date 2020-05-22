import React from "react"

const FormIngresoClient = props => {
    return (
        <>
            <form className="font2">
                <h1 className="text-center mt-2">Formulario clínico de ingreso</h1>

                <h2 className="m-5">Antecedentes sociales</h2>
                <div className="container">

                    <fieldset className="form-group" name="género">
                        <div className="row">
                            <legend className="col-form pt-0">Indique su género</legend>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <div className="custom-control custom-switch">
                                    <input type="radio" checked id="customRadio1" name="niveleduc" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadio1">Femenino</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="radio" id="customRadio2" name="niveleduc" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadio2">Masculino</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <div className="form-group row" name="Objetivo">
                        <legend className="col-form pt-0">Objetivo</legend>
                        <div className="col-sm-10">
                            <input required type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>

                    <fieldset className="form-group" name="nivel educacional">
                        <div className="row">
                            <legend className="col-form pt-0">Nivel educacional</legend>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <div className="custom-control custom-switch">
                                    <input type="radio" checked id="customRadio1" name="niveleduc" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadio1">Educación Media incompleta</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="radio" id="customRadio2" name="niveleduc" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadio2">Educación Media completa</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="radio" id="customRadio3" name="niveleduc" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadio3">Educación Técnica / Universitaria
                            incompleta</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="radio" id="customRadio4" name="niveleduc" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadio4">Educación Técnica / Universitaria
                            completa</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <div className="form-group row" name="Trabajo">
                        <legend className="col-form pt-0">Trabajo / Ocupación</legend>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" />
                        </div>
                    </div>

                    <h2 className="m-5">Antecedentes clínicos</h2>

                    <fieldset className="form-group" name="embarazo">
                        <legend className="col-form pt-0">Si usted es mujer, ¿está embarazada?</legend>
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-4">
                                <div className="custom-control custom-switch">
                                    <input type="radio" checked id="emb1" name="emb" className="custom-control-input" />
                                    <label className="custom-control-label" for="emb1">No</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="radio" id="emb2" name="emb" className="custom-control-input" />
                                    <label className="custom-control-label" for="emb2">Si</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="enf"
                                    placeholder="Indique en qué semana gestacional se encuentra" />
                                <input type="text" className="form-control" id="enf" placeholder="Fecha posible de parto" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="enfermedades">
                        <legend className="col-form pt-0">¿Presenta alguna de estas enfermedades?</legend>
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-4">
                                <div className="custom-control custom-switch">
                                    <input type="radio" id="enf1" checked name="enf" className="custom-control-input" />
                                    <label className="custom-control-label" for="enf1">Diabetes Mellitus 1</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="radio" id="enf2" name="enf" className="custom-control-input" />
                                    <label className="custom-control-label" for="enf2">Diabetes Mellitus 2</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="enf6" name="enf" className="custom-control-input" />
                                    <label className="custom-control-label" for="enf6">Insuficiencia Cardíaca</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="enf3" name="enf" className="custom-control-input" />
                                    <label className="custom-control-label" for="enf3">Hipertensión arterial</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="enf4" name="enf" className="custom-control-input" />
                                    <label className="custom-control-label" for="enf4">Dislipidemia (colesterol
                            alto)</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="enf5" name="enf" className="custom-control-input" />
                                    <label className="custom-control-label" for="enf5">Insuficiencia renal</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="enf" placeholder="¿presenta otra enfermedad?" />
                                <input type="text" className="form-control" id="enf" placeholder="¿presenta otra enfermedad?" />
                                <input type="text" className="form-control" id="enf" placeholder="¿presenta otra enfermedad?" />
                                <input type="text" className="form-control" id="enf" placeholder="¿presenta otra enfermedad?" />
                            </div>
                        </div>
                    </fieldset>

                    <div className="form-group" name="medicamentos">
                        <legend className="col-form pt-0">¿Toma algún medicamento?</legend>
                        <div className="row">
                            <div className="col-sm-1">
                                <div className="form-check custom-switch">
                                    <input type="radio" id="med1" checked name="medicamentos" className="custom-control-input" />
                                    <label className="custom-control-label" for="med1">No</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="med2" name="medicamentos" className="custom-control-input" />
                                    <label className="custom-control-label" for="med2">Si</label>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" id="medicamentos" placeholder="Qué medicamento toma?" />
                                <input type="text" className="form-control" id="medicamentos" placeholder="Qué medicamento toma?" />
                                <input type="text" className="form-control" id="medicamentos" placeholder="Qué medicamento toma?" />
                                <input type="text" className="form-control" id="medicamentos" placeholder="Qué medicamento toma?" />
                            </div>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" id="medicamentos" placeholder="¿Cuántas veces al día?" />
                                <input type="text" className="form-control" id="medicamentos" placeholder="¿Cuántas veces al día?" />
                                <input type="text" className="form-control" id="medicamentos" placeholder="¿Cuántas veces al día?" />
                                <input type="text" className="form-control" id="medicamentos" placeholder="¿Cuántas veces al día?" />
                            </div>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" id="medicamentos"
                                    placeholder="¿De cuantos miligramos es el medicamento?" />
                                <input type="text" className="form-control" id="medicamentos"
                                    placeholder="¿De cuantos miligramos es el medicamento?" />
                                <input type="text" className="form-control" id="medicamentos"
                                    placeholder="¿De cuantos miligramos es el medicamento?" />
                                <input type="text" className="form-control" id="medicamentos"
                                    placeholder="¿De cuantos miligramos es el medicamento?" />
                            </div>
                        </div>
                    </div>

                    <fieldset className="form-group" name="operaciones">
                        <legend className="col-form pt-0">¿Le han realizado alguna operación o operaciones?</legend>
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="form-check custom-switch">
                                    <input type="radio" id="op1" checked name="op" className="custom-control-input" />
                                    <label className="custom-control-label" for="op1">No</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="op2" name="op" className="custom-control-input" />
                                    <label className="custom-control-label" for="op2">Si</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="op" placeholder="¿Qué operación fue?" />
                                <input type="text" className="form-control" id="op" placeholder="¿Qué operación fue?" />
                                <input type="text" className="form-control" id="op" placeholder="¿Qué operación fue?" />
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="op" placeholder="¿Cuándo fue?" />
                                <input type="text" className="form-control" id="op" placeholder="¿Cuándo fue?" />
                                <input type="text" className="form-control" id="op" placeholder="¿Cuándo fue?" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="orina">
                        <div className="row">
                            <legend className="col-form pt-0">Orina</legend>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <div className="custom-control custom-switch">
                                    <input type="radio" checked id="orina1" name="orina" className="custom-control-input" />
                                    <label className="custom-control-label" for="orina1">Color amarillo claro</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="radio" id="orina2" name="orina" className="custom-control-input" />
                                    <label className="custom-control-label" for="orina2">Color amarillo oscuro</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="radio" id="orina3" name="orina" className="custom-control-input" />
                                    <label className="custom-control-label" for="orina3">Olor dulce</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="orina4" name="orina" className="custom-control-input" />
                                    <label className="custom-control-label" for="orina4">Dolor al orinar</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="orina5" name="orina" className="custom-control-input" />
                                    <label className="custom-control-label" for="orina5">Sangre en la orina</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="digestion">
                        <div className="row">
                            <legend className="col-form pt-0">Digestion</legend>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <div className="custom-control custom-switch">
                                    <input type="radio" checked id="dig1" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label" for="dig1">Normal</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="radio" id="dig2" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label" for="dig2">Estítica</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="radio" id="dig3" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label" for="dig3">Diarrea</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="radio" id="dig4" name="customRadio" className="custom-control-input" />
                                    <label className="custom-control-label" for="dig4">Presencia de sangre en las
                            heces</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="signosysintomas">
                        <div className="row">
                            <legend className="col-form pt-0">¿Presenta alguno de estos síntomas?</legend>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-4">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" checked id="sys13" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys13">Ninguno</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="sys1" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys1">Dolor de cabeza</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="sys2" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys2">Manos y/o pies hichados</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="sys3" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys3">Polidipsia</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="sys4" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys4">Fotopsia</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="sys5" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys5">Poliurea</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="sys6" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys6">Polifagia</label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="sys7" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys7">Reflujo gástrico</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="sys8" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys8">Acidez estomacal</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="sys9" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys9">Mareos</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="sys10" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys10">Náuseas</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="sys11" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys11">Vómitos</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" id="sys12" name="sys" className="custom-control-input" />
                                    <label className="custom-control-label" for="sys12">Vómitos inducidos</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="ayunos">
                        <div className="row">
                            <legend className="col-form pt-0">Ayunos</legend>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-1">
                                <div className="form-check custom-switch">
                                    <input type="radio" checked id="ayunos1" name="ayunos" className="custom-control-input" />
                                    <label className="custom-control-label" for="ayunos1">No</label>
                                </div>
                            </div>
                            <div className="col-sm-1">
                                <div className="form-check custom-switch">
                                    <input type="radio" id="ayunos2" name="ayunos" className="custom-control-input" />
                                    <label className="custom-control-label" for="ayunos2">Si</label>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id=""
                                    placeholder="¿Cuánto dura su ayuno y cada cuantos días ayuna?" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="apetito">
                        <div className="row">
                            <legend className="col-form pt-0">¿Cómo ha presentado su apetito los últimos 7 días?</legend>
                            <div className="col-sm-1">
                            </div>
                            <div className="col-sm-10">
                                <div className="form-check custom-switch">
                                    <input type="radio" checked id="apetito1" name="apetito" className="custom-control-input" />
                                    <label className="custom-control-label" for="apetito1">Normal</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="apetito2" name="apetito" className="custom-control-input" />
                                    <label className="custom-control-label" for="apetito2">Aumentado</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="apetito3" name="apetito" className="custom-control-input" />
                                    <label className="custom-control-label" for="apetito3">Disminuido</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="ansiedad">
                        <div className="row">
                            <legend className="col-form pt-0">En escala del 0 al 5, ¿qué nivel ansiedad presenta al comer?
                </legend>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <div className=" custom-switch form-check">
                                    <input type="radio" checked id="ansiedad1" name="ansiedad" className="custom-control-input" />
                                    <label className="custom-control-label" for="ansiedad1">0</label>
                                </div>
                                <div className=" custom-switch form-check">
                                    <input type="radio" id="ansiedad2" name="ansiedad" className="custom-control-input" />
                                    <label className="custom-control-label" for="ansiedad2">1</label>
                                </div>
                                <div className=" custom-switch form-check">
                                    <input type="radio" id="ansiedad3" name="ansiedad" className="custom-control-input" />
                                    <label className="custom-control-label" for="ansiedad3">2</label>
                                </div>
                                <div className=" custom-switch form-check">
                                    <input type="radio" id="ansiedad4" name="ansiedad" className="custom-control-input" />
                                    <label className="custom-control-label" for="ansiedad4">3</label>
                                </div>
                                <div className=" custom-switch form-check">
                                    <input type="radio" id="ansiedad5" name="ansiedad" className="custom-control-input" />
                                    <label className="custom-control-label" for="ansiedad5">4</label>
                                </div>
                                <div className=" custom-switch form-check">
                                    <input type="radio" id="ansiedad6" name="ansiedad" className="custom-control-input" />
                                    <label className="custom-control-label" for="ansiedad6">5</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="tabaco">
                        <div className="row">
                            <legend className="col-form pt-0">¿Fuma tabaco? ¿Cuántas veces a la semana?</legend>
                            <div className="col-sm-1"> </div>
                            <div className="col-sm-10">
                                <div className="form-check custom-switch">
                                    <input type="radio" checked id="tabaco1" name="tabaco" className="custom-control-input" />
                                    <label className="custom-control-label" for="tabaco1">No fumo</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="tabaco2" name="tabaco" className="custom-control-input" />
                                    <label className="custom-control-label" for="tabaco2">0 a 10 al día</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="tabaco3" name="tabaco" className="custom-control-input" />
                                    <label className="custom-control-label" for="tabaco3">11 a 20 al día</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="tabaco4" name="tabaco" className="custom-control-input" />
                                    <label className="custom-control-label" for="tabaco4">más de 20 al día</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="alcohol">
                        <div className="row">
                            <legend className="col-form pt-0">¿Consume alcohol? ¿Cuántas veces a la semana?</legend>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <div className="form-check custom-switch">
                                    <input type="radio" checked id="alcohol1" name="alcohol" className="custom-control-input" />
                                    <label className="custom-control-label" for="alcohol1">No consumo alcohol</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="alcohol2" name="alcohol" className="custom-control-input" />
                                    <label className="custom-control-label" for="alcohol2">de 0 a 2 veces por semana</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="alcohol3" name="alcohol" className="custom-control-input" />
                                    <label className="custom-control-label" for="alcohol3">de 3 a 4 veces por semana</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="alcohol4" name="alcohol" className="custom-control-input" />
                                    <label className="custom-control-label" for="alcohol4">5 o más veces por semana </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="actividad_fisica">
                        <div className="row">
                            <legend className="col-form pt-0">¿Hace Actividad física? ¿Cuántas veces a la semana?</legend>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-4">
                                <div className="form-check custom-switch">
                                    <input type="radio" id="af1" checked name="af" className="custom-control-input" />
                                    <label className="custom-control-label" for="af1">Ninguna</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="af2" name="af" className="custom-control-input" />
                                    <label className="custom-control-label" for="af2">de 0 a 2 veces por semana</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="af3" name="af" className="custom-control-input" />
                                    <label className="custom-control-label" for="af3">de 3 a 4 veces por semana</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="af4" name="af" className="custom-control-input" />
                                    <label className="custom-control-label" for="af4">5 o más veces por semana </label>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="actfis"
                                    placeholder="¿Qué actividad o ejervicio reaiza?" />
                                <input type="text" className="form-control" id="actfis"
                                    placeholder="¿Qué actividad o ejervicio reaiza?" />
                                <input type="text" className="form-control" id="actfis"
                                    placeholder="¿Qué actividad o ejervicio reaiza?" />
                                <input type="text" className="form-control" id="actfis"
                                    placeholder="¿Qué actividad o ejervicio reaiza?" />

                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="supl_nut">
                        <div className="row">
                            <legend className="col-form pt-0">¿Toma algún suplemento nutricional?</legend>
                            <div className="col-sm-2">
                                <div className="form-check custom-switch">
                                    <input type="radio" id="supl_nut1" checked name="supl_nut" className="custom-control-input" />
                                    <label className="custom-control-label" for="supl_nut1">No</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="supl_nut2" name="supl_nut" className="custom-control-input" />
                                    <label className="custom-control-label" for="supl_nut2">Si</label>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" id="supl_nut" placeholder="¿Qué suplemento toma?" />
                                <input type="text" className="form-control" id="supl_nut" placeholder="¿Qué suplemento toma?" />
                                <input type="text" className="form-control" id="supl_nut" placeholder="¿Qué suplemento toma?" />
                                <input type="text" className="form-control" id="supl_nut" placeholder="¿Qué suplemento toma?" />
                            </div>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" id="supl_nut"
                                    placeholder="¿Cuántas medidas o pastillas?" />
                                <input type="text" className="form-control" id="supl_nut"
                                    placeholder="¿Cuántas medidas o pastillas?" />
                                <input type="text" className="form-control" id="supl_nut"
                                    placeholder="¿Cuántas medidas o pastillas?" />
                                <input type="text" className="form-control" id="supl_nut"
                                    placeholder="¿Cuántas medidas o pastillas?" />
                            </div>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" id="supl_nut" placeholder="¿Cuántas veces al día?" />
                                <input type="text" className="form-control" id="supl_nut" placeholder="¿Cuántas veces al día?" />
                                <input type="text" className="form-control" id="supl_nut" placeholder="¿Cuántas veces al día?" />
                                <input type="text" className="form-control" id="supl_nut" placeholder="¿Cuántas veces al día?" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="lesiones">
                        <legend className="col-form pt-0">¿Presenta alguna lesión o molestia?</legend>
                        <div className="row justify-center">
                            <div className="col-sm-2">
                                <div className="form-check custom-switch">
                                    <input type="radio" id="lesiones1" checked name="lesiones" className="custom-control-input" />
                                    <label className="custom-control-label" for="lesiones1">No</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="lesiones2" name="lesiones" className="custom-control-input" />
                                    <label className="custom-control-label" for="lesiones2">Si</label>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="lesiones" placeholder="¿Qué lesión presenta?" />
                                <input type="text" className="form-control" id="lesiones" placeholder="¿Qué lesión presenta?" />
                                <input type="text" className="form-control" id="lesiones" placeholder="¿Qué lesión presenta?" />
                                <input type="text" className="form-control" id="lesiones" placeholder="¿Qué lesión presenta?" />
                            </div>

                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="alergiaAlim">
                        <legend className="col-form pt-0">¿Presenta alguna alergia o intolerancia alimentaria?</legend>
                        <div className="row justify-center">
                            <div className="col-sm-2">
                                <div className="form-check custom-switch">
                                    <input type="radio" id="alergiaAlim1" checked name="alergiaAlim"
                                        className="custom-control-input" />
                                    <label className="custom-control-label" for="alergiaAlim1">No</label>
                                </div>
                                <div className="form-check custom-switch">
                                    <input type="radio" id="alergiaAlim" name="alergiaAlim" className="custom-control-input" />
                                    <label className="custom-control-label" for="alergiaAlim2">Si</label>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <input type="text" className="form-control" id="alergiaAlim" placeholder="¿A qué alimento?" />
                                <input type="text" className="form-control" id="alergiaAlim" placeholder="¿A qué alimento?" />
                                <input type="text" className="form-control" id="alergiaAlim" placeholder="¿A qué alimento?" />
                                <input type="text" className="form-control" id="alergiaAlim" placeholder="¿A qué alimento?" />
                            </div>

                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="peso">
                        <legend className="col-form pt-0">Cuál es su peso actual?</legend>
                        <div className="row justify-center">
                            <div className="col-sm-7">
                                <input required type="text" className="form-control" id="peso" placeholder="Indique el peso" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="talla">
                        <legend className="col-form pt-0">Cuál es su altura actual?</legend>
                        <div className="row justify-center">
                            <div className="col-sm-7">
                                <input required type="text" className="form-control" id="talla" placeholder="Indique su altura en centimetros" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="form-group" name="ccintura">
                        <legend className="col-form pt-0">Cuál es su circunferencia de cintura?</legend>
                        <div className="row justify-center">
                            <div className="col-sm-7">
                                <input required type="text" className="form-control" id="ccintura" placeholder="Indique su circunferencia de cintura en centimetros" />
                            </div>
                        </div>
                    </fieldset>

                    <div className="form-group">
                        <div className="form-check">
                            <input required className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Acepto los terminos de confidencialidad
                </label>
                        </div>
                    </div>

                    <button onClick="" type="submit" className="btn btn-primary">Enviar formulario</button>
                </div>
            </form>

        </>
    )


}

export default FormIngresoClient;