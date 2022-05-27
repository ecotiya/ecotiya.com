/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import Header from './components/organisms/Header';
import Home from './components/templates/Home';
import Contact from './components/templates/Contact';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Contact />
    </>
  );
};

// 参照するコンポーネント
// Home
// About
// Contact

export default App;
