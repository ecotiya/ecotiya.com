/* eslint-disable react/function-component-definition */
import { FC } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Landing from './components/pages/Landing';

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
      <Landing />
      <Footer />
    </div>
  );
};

export default App;
