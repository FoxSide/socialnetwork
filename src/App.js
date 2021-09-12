import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {

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

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs dialogs={dialogs} messages={messages}/> }/>
          <Route path='/profile' render={ () => <Profile posts={posts} /> }/>
          <Route path='/news' render={ () => <News /> }/>
          <Route path='/music' render={ () => <Music /> }/>
          <Route path='/settings' render={ () => <Settings /> }/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
