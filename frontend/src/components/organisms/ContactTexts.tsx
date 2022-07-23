/* eslint-disable no-console */
import * as React from 'react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ContactTextInput from '../atoms/ContactTextInput';
import {
  ContactAlertError,
  ContactAlertSuccess,
  ContactDialog,
} from '../molecules/index';
import { MainApps, InquiryModel } from '../../interface/CommonInterface';
import { ApiRoutesPath } from '../../constants/CommonConstants';

type ContactTextsProps = {
  mainAppsData: MainApps;
};

const ContactTexts = (props: ContactTextsProps) => {
  const { mainAppsData } = props;
  const inquiryKinds = mainAppsData.inquiryKindsList;

  const [username, setUserName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [inquiryKind, setInquiryKind] = React.useState<string>('');
  const [inquiryContent, setInquiryContent] = React.useState<string>('');
  const [open, setOpen] = React.useState(false);
  const [inquiryKindLabel, setInquiryKindLable] = React.useState<string>('');
  const [isAlertError, setIsAlertError] = React.useState(false);
  const [alertErrorMessage, setAlertErrorMessage] = React.useState<string>('');
  const [isAlertSuccess, setIsAlertSuccess] = React.useState(false);
  const [alertSuccessMessage, setAlertSuccessMessage] =
    React.useState<string>('');

  const inputUserName = React.useCallback(
    (event: { target: { value: React.SetStateAction<string> } }) => {
      setUserName(event.target.value);
    },
    [setUserName],
  );

  const inputEmail = React.useCallback(
    (event: { target: { value: React.SetStateAction<string> } }) => {
      setEmail(event.target.value);
    },
    [setEmail],
  );

  const inputInquiryContent = React.useCallback(
    (event: { target: { value: React.SetStateAction<string> } }) => {
      setInquiryContent(event.target.value);
    },
    [setInquiryContent],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = inquiryKinds.find(
      (v) => v.inquiryKindCode === event.target.value,
    );
    if (result !== undefined) {
      setInquiryKind(result.inquiryKindCode);
      setInquiryKindLable(result.inquiryKindName);
    }
  };

  const handleClickOpen = () => {
    if (username === '' || email === '' || inquiryContent === '') {
      setIsAlertError(true);
      setAlertErrorMessage('必須項目が未入力です。');

      return;
    }

    if (!email.match(/.+@.+\..+/)) {
      setIsAlertError(true);
      setAlertErrorMessage(
        'メールアドレスの形式が不正です。もう1度お試しください。',
      );

      return;
    }

    setIsAlertError(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AlertErrorClose = () => {
    setIsAlertError(false);
  };

  const AlertSuccessClose = () => {
    setIsAlertSuccess(false);
  };

  const AllClears = () => {
    setUserName('');
    setEmail('');
    setInquiryKind('');
    setInquiryContent('');
    setInquiryKindLable('');
  };

  const registerInquiryData = (
    sendUserName: string,
    sendEmail: string,
    sendKindCode: string,
    sendText: string,
  ) => {
    const sendParams: InquiryModel = {
      userName: sendUserName,
      mailAddress: sendEmail,
      inquiryKindCode: sendKindCode,
      contents: sendText,
    };

    const options: AxiosRequestConfig = {
      method: 'POST',
      url: `${ApiRoutesPath.BASE_URL}${ApiRoutesPath.API}`,
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      withCredentials: true,
      timeout: 5000,
      data: sendParams,
    };

    axios(options)
      .then((res) => {
        // 送信完了Messageを表示
        console.log('registration res', res);
        setOpen(false);
        setIsAlertSuccess(true);
        setAlertSuccessMessage(
          'お問い合わせ情報を送信いたしました。回答まで、しばらくお待ちください。',
        );
        AllClears();
      })
      .catch((e: AxiosError<{ error: string }>) => {
        // エラー処理
        console.log(e);
        setOpen(false);
        setIsAlertError(true);
        setAlertErrorMessage(
          'お問い合わせ情報の送信に失敗いたしました。twitterより、管理者にお問い合わせください。',
        );
        AllClears();
      });
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <ContactAlertError
          message={alertErrorMessage}
          isError={isAlertError}
          alertErrorClose={AlertErrorClose}
        />
        <ContactAlertSuccess
          message={alertSuccessMessage}
          isSuccess={isAlertSuccess}
          alertSuccessClose={AlertSuccessClose}
        />
        <ContactTextInput
          multiline={false}
          type="text"
          rows={1}
          label="お名前"
          placeholder="よしだ ただひろ"
          value={username}
          onChange={inputUserName}
        />
      </Grid>
      <Grid item xs={12}>
        <ContactTextInput
          multiline={false}
          type="email"
          rows={1}
          label="メールアドレス"
          placeholder="test@ecotiya.com"
          value={email}
          onChange={inputEmail}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          select
          label="お問い合わせ種別"
          value={inquiryKind}
          onChange={handleChange}
          variant="outlined"
          sx={{ textAlign: 'left' }}
        >
          {inquiryKinds.map((option) => (
            <MenuItem
              key={option.inquiryKindCode}
              value={option.inquiryKindCode}
            >
              {option.inquiryKindName}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <ContactTextInput
          multiline
          type="text"
          rows={10}
          label="お問い合わせ内容"
          placeholder="お問い合わせ内容を入力してください。"
          value={inquiryContent}
          onChange={inputInquiryContent}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleClickOpen}
        >
          内容を確認する
        </Button>
        <ContactDialog
          open={open}
          username={username}
          email={email}
          division={inquiryKind}
          divisionLabel={inquiryKindLabel}
          content={inquiryContent}
          handleClose={handleClose}
          registerInquiryData={registerInquiryData}
        />
      </Grid>
    </Grid>
  );
};

export default ContactTexts;
