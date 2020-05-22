import React, { useEffect, useContext } from 'react';
import ContactCard from './ContactCard';
import { Context } from '../store/appContext';
import { useHistory } from 'react-router-dom';

const PersonalTrainers = props => {
    const history = useHistory();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.adminLoadProfesionals('/admin/profesional')
    }, [])

     return (
        <div className="container">
            <button className="btn btn-outline-info m-2 mb-3 float-left" onClick={() => history.goBack()}>Volver</button>
                <br/>
            <div className="row">

                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <h1 className="text-center font my-3">Personal Trainers</h1>
                    <ul className="list-group pull-down" id="contact-list">
                        {
                            !!store.profesionals && !!store.profesionals.trainers && store.profesionals.trainers.length > 0 ?
                                store.profesionals.trainers.filter((elem) => elem.is_active).map((elem, index) => {
                                    return (
                                        <ContactCard professional={elem}/>
                                    )
                                })
                                :
                                <li className="alert alert-warning" role="alert">
                                    {store.error}
                                    There are no active personal trainers at the moment :(
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default PersonalTrainers;