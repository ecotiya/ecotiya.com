import { makeStyles } from '@mui/styles';
import { HashLink } from 'react-router-hash-link';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

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

// HashLink用のイベント(移動場所が若干ずれるので、対応)
const scrollWithOffset = (el: HTMLElement) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

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
          <HashLink
            to="#profile"
            scroll={(el: HTMLElement) => scrollWithOffset(el)}
          >
            <ArrowDownwardIcon fontSize="large" />
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Home;
