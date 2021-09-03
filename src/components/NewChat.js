/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default () => {
    const [list, setList] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Henrique'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Henrique'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Henrique'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Matheus Henrique'}
    ]);


    return (
        <div className="newChat">
            <div className="newChat--head">
                <div className="newChat--backbutton">
                <ArrowBackIcon style={{color: '#FFFFFF'}}/>
                </div>                
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key)=>{
                    <div className="newChat--item">

                    </div>
                })}
            </div>
        </div>
    )
}