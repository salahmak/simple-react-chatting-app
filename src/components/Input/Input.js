import React from 'react';
import './Input.css'


const Input = ({ message, sendMessage, setMessage }) => {
    return (
        <form className="form">
            <input
                className="input"
                type="text"
                placeholder="type ur msg"
                onChange={e => setMessage(e.target.value)}
                value={message}
            />
            <button className="sendButton" onClick={sendMessage}>Send</button>
        </form>
    );
}

export default Input;