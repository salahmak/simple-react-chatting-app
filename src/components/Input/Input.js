import React from 'react';
import './Input.css'


const Input = ({ message, sendMessage, setMessage, disabled }) => {
    return (
        <form className="form">
            <input
                className="input"
                type="text"
                placeholder="type ur msg"
                onChange={e => setMessage(e.target.value)}
                value={message}
            />
            <button disabled={disabled} className="sendButton" onClick={sendMessage}>Send</button>
        </form>
    );
}

export default Input;