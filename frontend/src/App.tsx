/* eslint-disable react/function-component-definition */
import { FC } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Home from './components/templates/Home';
import Profile from './components/templates/Profile';
import Career from './components/templates/Career';
import Skill from './components/templates/Skill';
import Contact from './components/templates/Contact';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${`${process.env.PUBLIC_URL}/assets/dam.jpg`})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
});

const App: FC = () => {
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
};

export default App;
