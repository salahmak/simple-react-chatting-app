import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'
import InfoBar from '../InfoBar/InfoBar.js'
import Input from '../Input/Input.js'
import Messages from '../Messages/Messages.js'

import './Chat.css'

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([])
    const [disabled, setDisabled] = useState(false)

    const sendMessage = (e) => {
        setDisabled(true)
        e.preventDefault()
        if (message) {
            socket.emit('sendMessage', message, () => {
                setMessage('')
                setDisabled(false)
            })
        }
    }



    const ENDPOINT = 'https://nasal-peridot-minnow.glitch.me/'
    useEffect(() => {
        const { name, room } = queryString.parse(location.search)
        setName(name)
        setRoom(room)

        socket = io(ENDPOINT)

        socket.emit('join', { name, room }, (err) => {
            if (err) alert(err)
        })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }

    }, [ENDPOINT, location.search])


    //the second useEffect
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])


    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input disabled={disabled} message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>

    );
}

export default Chat;