import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          FoxSide
        </div>
        <div className={s.dialog}>
          Nekrsova
        </div>
        <div className={s.dialog}>
          Ned
        </div>
        <div className={s.dialog}>
          Varova
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>
          Hi
        </div>
        <div className={s.message}>
          Hello
        </div>
        <div className={s.message}>
          Privet
        </div>
      </div>
    </div>
  )
}

export default Dialogs