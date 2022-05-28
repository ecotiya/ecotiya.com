/* eslint-disable prefer-arrow/prefer-arrow-functions */
import Home from '../templates/Home';
import Profile from '../templates/Profile';
import Career from '../templates/Career';
import Skill from '../templates/Skill';
import Contact from '../templates/Contact';

function Landing() {
  return (
    <>
      <Home />
      <Profile />
      <Career />
      <Skill />
      <Contact />
    </>
  );
}

export default Landing;
