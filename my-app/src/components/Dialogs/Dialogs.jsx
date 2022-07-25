

import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import { MessageItem } from './MessageItem/MessageItem';






const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} key ={dialog.id} name={dialog.name} img={dialog.img} />)
    let messagesElements = state.messages.map(message => <MessageItem message={message.message} key = {message.id} user={message.user} img={message.img} />)

    
    let addMessage = () => {
        props.addMessageBody();
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messagesItem}>
                {messagesElements}
            </div>
            <div className={s.input}>
                <textarea  className={s.textarea} onChange={onMessageChange} value={props.newMessageBody} id="" cols="80%" rows="2" placeholder='Enter your message'></textarea>
                <button onClick={addMessage} className={s.button}>send</button>
            </div>
        </div>

    );
}

export default Dialogs