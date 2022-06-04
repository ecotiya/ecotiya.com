import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
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

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.title}>404 page not found</h1>
        <h5 className={classes.subtitle}>
          We are sorry but the page you are looking for does not exist.
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
