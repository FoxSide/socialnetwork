import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 10 },
  { id: 2, message: 'It\'s my first post', likesCount: 15 }
];

let dialogs = [
  { id: 1, name: 'FoxSide' },
  { id: 2, name: 'Nekrsova' },
  { id: 3, name: 'Ned' },
  { id: 4, name: 'Varova' }
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you' },
  { id: 3, message: '?' },
  { id: 4, message: ';)' }
];

ReactDOM.render(<React.StrictMode><App posts={posts} dialogs={dialogs} messages={messages}/></React.StrictMode>, document.getElementById('root'));


reportWebVitals();
