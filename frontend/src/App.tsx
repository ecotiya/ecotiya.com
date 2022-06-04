import { FC } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import { Header, Footer } from './components/organisms/index';
import Landing from './components/pages/Landing';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    // backgroundImage: `url(${`${process.env.PUBLIC_URL}/assets/dam.jpg`})`,
    backgroundColor: '#4169e1',
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
