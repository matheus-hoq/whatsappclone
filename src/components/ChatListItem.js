/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './ChatListItem.css'

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Matheus Henrique</div>
                    <div className="chatListItem--date">21:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}