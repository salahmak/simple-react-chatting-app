import React from 'react';
import './InfoBar.css'

import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'


const InfoBar = ({ room }) => {
    return (
        <div className="card-header msg_head">


            <div className="user_info">
                <span>{room}</span>
            </div>
            {/* <div className="video_cam">
                    <span><i className="fas fa-video"></i></span>
                    <span><i className="fas fa-phone"></i></span>
                </div> */}

            <div>
                <a href="/"><img src={closeIcon} alt="close icon" /></a>
            </div>

        </div>
    );
}
{/* <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online-icon" />
                <h3>{props.room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close icon" /></a>
            </div>
        </div> */}
export default InfoBar;