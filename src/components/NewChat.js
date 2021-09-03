/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default () => {
    return (
        <div className="newChat">
            <div className="newChat--head">
                <div className="newChat--backbutton">
                <ArrowBackIcon style={{color: '#FFFFFF'}}/>
                </div>                
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">

            </div>
        </div>
    )
}