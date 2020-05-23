import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png'
import './TextContainer.css'

const TextContainer = ({ users }) => (
    <>
        <div className="textContainer">

            {
                users
                    ? (
                        <div>
                            <h1>Desperate people who are in this room:</h1>
                            <div className="activeContainer">
                                <div>
                                    {users.map(({ name }) => (
                                        <div key={name} className="activeItem">
                                            <img alt="Online Icon" src={onlineIcon} />
                                            <h2 style={{ marginLeft: '10px' }}>{name}</h2>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                    : null
            }
        </div>
    </>
)

export default TextContainer;