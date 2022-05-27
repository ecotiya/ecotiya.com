/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable import/order */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/organisms/Header';
import Home from './components/templates/Home';
import Contact from './components/templates/Contact';
import './App.css';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${`${process.env.PUBLIC_URL}/assets/dam.jpg`})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Home />
      <Contact />
    </div>
  );
}

// 参照するコンポーネント
// Home
// About
// Contact

export default App;
