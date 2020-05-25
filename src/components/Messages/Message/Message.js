import React from 'react';
import './Message.css'

const Message = ({ message, name }) => {
    if (message.user === name) {
        if (message.type === 'image') {
            return (
                <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                        <div className="d-flex justify-content-center w-100">
                            <img style={{ width: '90%' }} src={message.content} />
                        </div>

                        <span className="msg_time_send">{name}</span>
                    </div>

                </div>
            )
        }
        return (
            <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    {message.content}
                    <span className="msg_time_send">{name}</span>
                </div>
            </div>
        )

    } else if (!message.user) {
        return (
            <div className="d-flex justify-content-center mb-4">

                <div className="msg_cotainer">
                    {message.content}
                </div>
            </div>
        )
    } else {
        if (message.type === 'image') {
            return (
                <div className="d-flex justify-content-start mb-4">
                    <div className="msg_cotainer">
                        <div className="d-flex justify-content-center w-100">
                            <img style={{ width: '90%' }} src={message.content} />
                        </div>

                        <span className="msg_time_send">{message.user}</span>
                    </div>

                </div>
            )
        }
        return (
            <div className="d-flex justify-content-start mb-4">
                <div className="msg_cotainer">
                    {message.content}
                    <span className="msg_time_send">{message.user}</span>
                </div>
            </div>
        )
    }

}

export default Message;