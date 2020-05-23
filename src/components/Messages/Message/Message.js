import React from 'react';
import './Message.css'

const Message = ({ message, name }) => {
    if (message.user === name) {
        return (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{name} </p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{message.text} </p>
                </div>
            </div>
        )
    }
    return (
        <div className="messageContainer justifyStart">

            <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{message.text} </p>
            </div>
            <p className="sentText pl-10">{message.user} </p>
        </div>
    )
}

export default Message;