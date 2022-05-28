/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable import/order */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Home from './components/templates/Home';
import Profile from './components/templates/Profile';
import Career from './components/templates/Career';
import Skill from './components/templates/Skill';
import Contact from './components/templates/Contact';
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
      <Profile />
      <Career />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

// 参照するコンポーネント
// Home
// About
// Contact

export default App;
