import * as React from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ApiRoutesPath } from '../../constants/CommonConstants';
import { MainApps } from '../../interface/CommonInterface';
import {
  Home,
  Profile,
  Career,
  Skill,
  Contact,
  NotFound,
} from '../templates/index';

// axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
// axios.defaults.xsrfHeaderName = 'X-CSRF-Token';
// axios.defaults.withCredentials = true;

const options: AxiosRequestConfig = {
  headers: { 'Content-Type': 'application/json' },
  // withCredentials: true,
  url: `${ApiRoutesPath.BASE_URL}`,
  method: 'GET',
};

const showLanding = (mainApps: MainApps) => (
  <>
    <Home />
    <Profile mainAppsData={mainApps} />
    <Career mainAppsData={mainApps} />
    <Skill mainAppsData={mainApps} />
    <Contact mainAppsData={mainApps} />
  </>
);

const showNotFound = () => <NotFound />;

const Landing = () => {
  const [mainApps, setMainApps] = React.useState<MainApps>();

  const fetchMyProfileData = () =>
    axios(options)
      .then((res: AxiosResponse<MainApps>) => {
        const { data } = res;
        setMainApps(data);
      })
      .catch((e: AxiosError<{ error: string }>) =>
        // エラー処理
        console.log(e),
      );

  React.useEffect(() => {
    void fetchMyProfileData();
  }, []);

  return (
    <div>
      {typeof mainApps === 'undefined' ? showNotFound() : showLanding(mainApps)}
    </div>
  );
};

export default Landing;
