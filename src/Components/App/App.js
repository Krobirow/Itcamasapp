import React from 'react';
import s from './App.module.css';

import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Aside />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
