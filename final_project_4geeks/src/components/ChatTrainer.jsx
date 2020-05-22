import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { useParams, Link, useHistory } from 'react-router-dom'
/* RESPONSIVE LISTO*/

const ChatTrainer = props => {
    const history = useHistory();
    const { store, actions } = useContext(Context)
    const { id, plan_id } = useParams();
    useEffect(() => {
        actions.loadChatConversation(3, plan_id);
        actions.loadPlans(id, plan_id);
    }, [])

    return (
        <>
            <div className="container">
                <div className="row offset-md-3">
                    <div className="col-md-12">
                        <button onClick={() => history.goBack()} className="btn btn-outline-warning mt-3">Volver</button>
                    </div>
                    {!!store.currentUser && !!store.chat && store.chat.length > 0 ?
                        <>
                            <div className="col-md-8 col-xs-8">
                                <h1 className="my-3">{store.currentUser.user.role.id == 4 ? 'Chat con tu entrenador' : 'Chat con tu cliente'}</h1>
                                <h3>{store.currentUser.user.role.id === 4 ? store.chat[0].trainer_name + ' ' + store.chat[0].trainer_lastname : store.chat[0].client_name + ' ' + store.chat[0].client_lastname}</h3>
                                {
                                    !!store.chat ? store.chat.map((elem, index) => {
                                        return (
                                            <div className="card mt-2">
                                                <div className="card-body">
                                                    <small>{elem.sender} dice:</small>
                                                    <p>{elem.comment}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                        :
                                        'No tienes comentarios en este plan'
                                }
                            </div>
                        </>
                        :
                        <div className="alert alert-warning mt-4" role="alert">
                            No tienes conversaciones en este plan, quieres iniciar una?
                </div>

                    }
                    {
                        !!store.currentUser && store.currentUser.user.role.id == 4 ?
                            <div className="col-md-8 col-xs-8">
                                <form onSubmit={(e) => actions.clientSendMessage(e, plan_id, 4, 3,
                                    store.plan[0].client_email,
                                    store.plan[0].trainer_email,
                                    store.plan[0].client_name +' '+ store.plan[0].client_lastname
                                )}>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Envia tu mensaje:</label>
                                        <textarea autoFocus rows='3' className="form-control" id="exampleInputEmail1" placeholder="Escribe Aqui"
                                            name='comment'
                                            onChange={actions.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-outline-warning mb-3">Enviar mensaje al entrenador</button>
                                </form>
                            </div>
                            :
                            <div className="col-md-8 col-xs-8">
                                <form onSubmit={(e) => actions.clientSendMessage(e, plan_id, 3, 4,
                                    store.plan[0].client_email,
                                    store.plan[0].trainer_email,
                                    store.plan[0].trainer_name +' '+ store.plan[0].trainer_last_name
                                )}>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Envia tu mensaje:</label>
                                        <textarea autoFocus rows='3' className="form-control" id="exampleInputEmail1" placeholder="Escribe Aqui"
                                            name='comment'
                                            onChange={actions.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary mb-3">Enviar mensaje al cliente</button>
                                </form>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ChatTrainer