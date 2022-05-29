import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    outline: '#000000',
    color: '#fff',
    fontSize: '4.5rem',
  },
  subtitle: {
    color: '#fff',
    fontSize: '2rem',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <section id="home">
      <div className={classes.root}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            My <span className={classes.colorText}>Page.</span>
          </h1>
          <h5 className={classes.subtitle}>ようこそ、ゲストさん</h5>
        </div>
      </div>
    </section>
  );
};

export default Home;
