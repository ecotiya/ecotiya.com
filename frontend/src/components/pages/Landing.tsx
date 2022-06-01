// import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
// import { ApiRoutesPath } from '../../constants/CommonConstants';
import Home from '../templates/Home';
import Profile from '../templates/Profile';
import Career from '../templates/Career';
import Skill from '../templates/Skill';
import Contact from '../templates/Contact';
import { SectionTitle } from '../../interface/CommonInterface';

const createSectionTitle = (
  sectionKindCode: string,
  sectionTitle: string,
  sectionSubTitle: string,
  remarks1: string,
  remarks2: string,
  showFlg: boolean,
): SectionTitle => ({
  sectionKindCode,
  sectionTitle,
  sectionSubTitle,
  remarks1,
  remarks2,
  showFlg,
});

const profileSectionTitle = createSectionTitle(
  'profile',
  '【私について】',
  'コメントを書いた方が良いです。',
  '/assets/ecotiya.png',
  'ecotiya',
  true,
);

const Landing = () => (
  <>
    <Home />
    <Profile sectionTitleData={profileSectionTitle} />
    <Career />
    <Skill />
    <Contact />
  </>
);

export default Landing;

// const options: AxiosRequestConfig = {
//   url: `${ApiRoutesPath.BASE_URL}`,
//   method: 'GET',
// };

// const [name, setName] = React.useState<string | undefined>('');
// const [image, setImage] = React.useState<string | undefined>('');
// const [contents, setContents] = React.useState<string>('');

// const fetchMyProfileData = () => {
//   axios(options)
//     .then((res: AxiosResponse<SiteComment>) => {
//       const { data } = res;
//       setName(data.commentTitle);
//       setImage(data.commentImage);
//       setContents(data.commentContents);
//     })
//     .catch((e: AxiosError<{ error: string }>) => {
//       // エラー処理
//       console.log(e.message);
//     });
// };

// React.useEffect(() => {
//   fetchMyProfileData();
// }, []);
