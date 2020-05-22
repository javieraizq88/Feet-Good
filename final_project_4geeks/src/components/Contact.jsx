import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const Contact = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h1>Contáctanos</h1>
                        {
                            !!store.errors &&
                            <div className="alert alert-warning" role="alert">
                                <strong>Error!</strong> {store.errors.msg}
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                        }
                        {
                            !!store.success &&
                            <div className="alert alert-success" role="alert">
                                <strong>Success!</strong> {store.success.msg}
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                        }
                        <form onSubmit={e=>actions.contactUs(e, props.history)}>
                            
                            <div className="form-group">
                                <label htmlFor="password">Nombre:</label>
                                <input type="text" className="form-control" id="contact_name" name='name'
                                    onChange={actions.handleChange}
                                    placeholder='Escribe tu nombre'
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Email:</label>
                                <input type="email" className="form-control" id="email" name='email'
                                    onChange={actions.handleChange}
                                    placeholder='Escribe tu email'
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mensaje:</label>
                                <textarea type="text" className="form-control" id="message" name='comment'
                                    onChange={actions.handleChange}
                                    placeholder='Escribe tu mensaje aquí'
                                    rows='5'
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Contact

