import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

	let newPostElement = React.createRef();
	
	let addMessage = () => {
		props.addMessage()
	}

  let onMessageChenge = () => {
    let text = newPostElement.current.value;
		props.updateNewMessageText(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.addMessage}>
          <div>
            <textarea onChange={onMessageChenge} ref={newPostElement} value ={props.newMessageText}/>
          </div>
          <div>
            <button onClick={addMessage}>AddMessage</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs