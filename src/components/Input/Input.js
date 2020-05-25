import React from 'react';
import './Input.css'

import Pic from '../../icons/pic.png'


const Input = ({ message, sendMessage, setMessage, disabled, sendImage }) => {

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });


    const onImageChange = async (e) => {
        const imgData = await toBase64(e.target.files[0]).catch(e => Error(e));
        if (imgData instanceof Error) {
            console.log('Error: ', imgData.message);
            return;
        }
        sendImage(imgData)
    }

    return (
        <form>
            <div className="card-footer">
                <div className="input-group">
                    <div className="input-group-append">
                        <input onChange={onImageChange} type="file" accept="image/*" name="file" id="file" style={{ display: 'none' }} />
                        <span className="input-group-text attach_btn">
                            <label className="m-0" htmlFor="file"><i className="fas fa-paperclip"></i></label>

                        </span>

                    </div>
                    <input onChange={e => setMessage(e.target.value)} value={message} type="text" name="" className="form-control type_msg" placeholder="Type your message..." />
                    <div className="input-group-append">
                        <button disabled={disabled} onClick={sendMessage} className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></button>
                    </div>
                </div>
            </div>
        </form>



    );
}
{/* <form className="form">
            <img src={Pic} style={{ width: '16px', height: '16px' }} alt='pi' />
            <input
                className="input"
                type="text"
                placeholder="type ur msg"
                onChange={e => setMessage(e.target.value)}
                value={message}
            />
            <button disabled={disabled} className="sendButton" onClick={sendMessage}>Send</button>
        </form> */}
export default Input;