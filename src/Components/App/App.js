import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Aside />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
