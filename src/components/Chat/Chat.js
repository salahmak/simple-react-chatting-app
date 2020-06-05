import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'
import InfoBar from '../InfoBar/InfoBar.js'
import Input from '../Input/Input.js'
import Messages from '../Messages/Messages.js'
import TextContainer from '../TextContainer/TextContainer.js'

import 'bootstrap/dist/css/bootstrap.css';

import './Chat.css'

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState([])
    const [disabled, setDisabled] = useState(false)
    const ENDPOINT = process.env.ENDPOINT || 'https://nasal-peridot-minnow.glitch.me/';



    useEffect(() => {
        const { name, room } = queryString.parse(location.search)
        setName(name)
        setRoom(room)

        socket = io(ENDPOINT)

        socket.emit('join', { name, room }, (err) => {
            if (err) alert(err)
        })
    }, [ENDPOINT, location.search])


    //the second useEffect



    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });
    }, []);

    //third useEffect
    useEffect(() => {
        socket.on('roomData', (roomData) => {
            setUsers(roomData.users)
        })
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()
        if (message) {
            const sentMessage = { type: 'text', content: message }
            setDisabled(true)
            socket.emit('sendMessage', sentMessage, () => {
                
                setMessage('')
                setDisabled(false)
            })
        }
    }


    const sendImage = (img) => {
        const sentMessage = { type: 'image', content: img }
        socket.emit('sendMessage', sentMessage, () => {
            setMessage('')
        })
    }


    return (
        <div className="outerContainer">
            <div className="card">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input sendImage={sendImage} disabled={disabled} message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            {/* <TextContainer users={users} /> */}
        </div>

    );
}

export default Chat;
