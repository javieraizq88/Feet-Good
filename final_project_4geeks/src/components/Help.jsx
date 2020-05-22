import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { useParams, Link } from 'react-router-dom'
/* RESPONSIVE LISTO*/

const ChatNutritionist = props => {
    const { store, actions } = useContext(Context)
    const { id, plan_id } = useParams();
    useEffect(() => {
        actions.loadChatConversation(2, plan_id);
        actions.loadPlans(id, plan_id);
    }, [])

    return (
        <>
            <div className="container">
                <div className="col-md-12">
                    {
                        !!store.currentUser && !!store.chat && store.chat.length > 0 ?
                            <>
                                <h1 className="mt-3 mb-4">{store.currentUser && store.currentUser.user.role.id == 4 ? 'Chat con tu Nutricionista' : 'Chat con tu Cliente'}</h1>
                                <div className="messaging mx-auto">
                                    <div className="inbox_msg">
                                        <div className="inbox_people">
                                            <div className="headind_srch">
                                                <div className="mesgs">
                                                    <div className="msg_history">
                                                        <div className="incoming_msg">
                                                            <div className="received_msg">
                                                                <div className="received_withd_msg">
                                                                    <p>Test which is a new approach to have all solutions</p>
                                                                    <span className="time_date"> 11:01 AM    |    June 9</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="outgoing_msg">
                                                            <div className="sent_msg">
                                                                <p>Test which is a new approach to have all solutions</p>
                                                                <span className="time_date"> 11:01 AM    |    June 9</span>
                                                            </div>
                                                        </div>
                                                        <div className="type_msg">
                                                            <div className="input_msg_write">
                                                                <input type="text" className="write_msg" placeholder="Type a message" />
                                                                <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div class="alert alert-warning" role="alert">
                                    No hay mensajes en el chat
                            </div>
                            </>
                    }

                </div>
            </div>
        </>
    )
}

export default ChatNutritionist;