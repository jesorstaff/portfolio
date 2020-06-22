import React from 'react';

import './App.css';
import PopupComponent from './components/Menubar/PopupComponent';
import Follow from './components/Follow';
import UserInfo from './components/UserInfo';

const App = () => {
  return (
    <div className="App">
      <PopupComponent />
      <Follow />
      <UserInfo />
    </div>
  )
};

export default App;
