import React, { useEffect, useContext } from 'react';
import ContactCard from './ContactCard';
import { Context } from '../store/appContext';
import { useHistory } from 'react-router-dom';

const Nutritionists = props => {
    const { store, actions } = useContext(Context);
    const history = useHistory();
    useEffect(() => {
        actions.adminLoadProfesionals('/admin/profesional')
    }, [])

    return (
        <div className="container">
            <button className="btn btn-outline-info m-2 mb-3 float-left" onClick={() => history.goBack()}>Volver</button>
                <br/>
            <div className="row">
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <h1 className="text-center font my-3">Nutricionistas</h1>
                    <ul className="list-group pull-down" id="contact-list">
                        {
                            !!store.profesionals && !!store.profesionals.nutritionists && store.profesionals.nutritionists.length > 0 ?
                                store.profesionals.nutritionists.filter((elem) => elem.is_active).map((elem, index) => {
                                    return (
                                        <ContactCard professional={elem} />
                                    )
                                })
                                :
                                <li className="alert alert-warning" role="alert">
                                    {store.error}
                                     No hay nutricionistas activos en este momento 
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Nutritionists;