/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Login.css';
import Api from '../Api';

export default ({onReceive}) => {
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if(result) {
            onReceive(result.user)
        } else {
            alert ("Erro!");
        }
    }
    return (
        <div className="login">
                <button onClick={handleFacebookLogin}>Logar com o Facebook</button>
            
        </div>
    )
}