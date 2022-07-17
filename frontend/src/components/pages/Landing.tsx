/* eslint-disable no-console */
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

const options: AxiosRequestConfig = {
  method: 'GET',
  url: `${ApiRoutesPath.BASE_URL}${ApiRoutesPath.API}`,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  withCredentials: true,
  timeout: 5000,
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
