/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import applyCaseMiddleware from 'axios-case-converter';
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

// ======================== Start
// axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
// axios.defaults.xsrfHeaderName = 'X-CSRF-Token';
// axios.defaults.withCredentials = true;

const options = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: ApiRoutesPath.BASE_URL,
  }),
);
// ======================== END

// const options: AxiosRequestConfig = {
//   headers: { 'Content-Type': 'application/json' },
//   withCredentials: true,
//   url: `${ApiRoutesPath.BASE_URL}`,
//   method: 'GET',
// };

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
    axios({
      method: 'get',
      url: 'http://localhost:8080/api/',
      responseType: 'stream',
    })
      .then((response) => {
        // 成功
        console.log('registration res', response);
        const { data } = response;
        setMainApps(data);
      })
      .catch((error) => {
        // 失敗
        console.log('registration error', error);
        alert('データベースへのアクセスに失敗しました。');
      });
  // axios(options)
  //   .then((res: AxiosResponse<MainApps>) => {
  //     const { data } = res;
  //     setMainApps(data);
  //   })
  //   .catch((e: AxiosError<{ error: string }>) =>
  //     // エラー処理
  //     console.log(e),
  //   );
  // これでデータ取得する。
  React.useEffect(() => {
    fetchMyProfileData();
  }, []);

  return (
    <div>
      {typeof mainApps === 'undefined' ? showNotFound() : showLanding(mainApps)}
    </div>
  );
};

export default Landing;
