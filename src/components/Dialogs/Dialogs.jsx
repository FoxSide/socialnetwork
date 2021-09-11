import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { props } from 'bluebird';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="FoxSide" id="1" />
        <DialogItem name="Nekrsova" id="2" />
        <DialogItem name="Ned" id="3" />
        <DialogItem name="Varova" id="4" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How are you" />
        <Message message="?" />
      </div>
    </div>
  )
}

export default Dialogs