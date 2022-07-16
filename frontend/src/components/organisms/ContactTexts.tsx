import * as React from 'react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ContactTextInput from '../atoms/ContactTextInput';
import { ContactAlertError, ContactDialog } from '../molecules/index';
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
  const [isAlert, setIsAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState<string>('');

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
    setInquiryKind(event.target.value);

    const result = inquiryKinds.find(
      (v) => v.inquiryKindCode === event.target.value,
    );
    if (result !== undefined) {
      setInquiryKindLable(result.inquiryKindName);
    }
  };

  const handleClickOpen = () => {
    if (username === '' || email === '' || inquiryContent === '') {
      setIsAlert(true);
      setAlertMessage('必須項目が未入力です。');

      return;
    }

    if (!email.match(/.+@.+\..+/)) {
      setIsAlert(true);
      setAlertMessage(
        'メールアドレスの形式が不正です。もう1度お試しください。',
      );

      return;
    }

    setIsAlert(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AlertClose = () => {
    setIsAlert(false);
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
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      withCredentials: true,
      url: `${ApiRoutesPath.BASE_URL}${ApiRoutesPath.API}`,
      method: 'POST',
      timeout: 30000,
      data: sendParams,
    };

    axios(options)
      .then((res) => {
        console.log('registration res', res);
      })
      .catch((e: AxiosError<{ error: string }>) =>
        // エラー処理
        console.log(e),
      );
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <ContactAlertError
          message={alertMessage}
          isError={isAlert}
          alertClose={AlertClose}
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
          // type="submit"
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
          division={inquiryKindLabel}
          content={inquiryContent}
          handleClose={handleClose}
          registerInquiryData={registerInquiryData}
        />
      </Grid>
    </Grid>
  );
};

export default ContactTexts;
