/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ApiRoutesPath } from '../../constants/CommonConstants';
import { MainApps, SectionTitles } from '../../interface/CommonInterface';
import { Home, Profile, Career, Skill, Contact } from '../templates/index';

const createSectionTitle = (
  sectionKindCode: string,
  sectionTitle: string,
  sectionSubTitle: string,
  remarks1: string,
  remarks2: string,
  showFlg: boolean,
): SectionTitles => ({
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

const careerSectionTitle = createSectionTitle(
  'career',
  '【経歴】',
  'コメントを書いた方が良いです。',
  '',
  '',
  true,
);

const skillSectionTitle = createSectionTitle(
  'skill',
  '【スキルセット】',
  'コメントを書いた方が良いです。',
  '',
  '',
  true,
);

const contactSectionTitle = createSectionTitle(
  'contact',
  '【お問い合わせ】',
  'ここまで、ご覧いただきありがとうございます。私への問い合わせは、下記フォームをご利用ください😀',
  '',
  '',
  true,
);

const options: AxiosRequestConfig = {
  url: `${ApiRoutesPath.BASE_URL}`,
  method: 'GET',
};

const Landing = () => {
  const [mainApps, setMainApps] = React.useState<MainApps>();

  const fetchMyProfileData = () => {
    axios(options)
      .then((res: AxiosResponse<MainApps>) => {
        const { data } = res;
        setMainApps(data);
      })
      .catch((e: AxiosError<{ error: string }>) => {
        // エラー処理
        // console.log(e.message);
      });
  };

  // これでデータ取得する。
  React.useEffect(() => {
    fetchMyProfileData();
  }, []);

  return (
    <>
      <Home />
      <Profile sectionTitleData={profileSectionTitle} />
      <Career sectionTitleData={careerSectionTitle} />
      <Skill sectionTitleData={skillSectionTitle} />
      <Contact sectionTitleData={contactSectionTitle} />
    </>
  );
};

export default Landing;
