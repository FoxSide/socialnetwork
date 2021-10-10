import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './redux/state';
import { addMessage, updateNewMessageText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode><App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText} /></React.StrictMode>
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);