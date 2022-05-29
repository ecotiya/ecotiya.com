import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ContactTextInput from '../atoms/ContactTextInput';
import { ContactDialog } from '../molecules/index';

const inquiryKinds = [
  {
    value: 'question,',
    label: 'ご質問',
  },
  {
    value: 'request',
    label: 'ご要望',
  },
  {
    value: 'others',
    label: 'その他',
  },
];

const ContactTexts = () => {
  const [username, setUserName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [inquiryKind, setInquiryKind] = React.useState<string>('');
  const [inquiryContent, setInquiryContent] = React.useState<string>('');
  const [open, setOpen] = React.useState(false);

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
  };

  const handleClickOpen = () => {
    if (username === '' || email === '' || inquiryContent === '') {
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <ContactTextInput
          multiline={false}
          type="text"
          rows={1}
          label="お名前"
          placeholder="あなたの名前を入力してください。"
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
          placeholder="あなたのメールアドレスを入力してください。"
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
            <MenuItem key={option.value} value={option.value}>
              {option.label}
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
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleClickOpen}
        >
          内容を確認
        </Button>
        <ContactDialog
          open={open}
          username={username}
          email={email}
          division={inquiryKind}
          content={inquiryContent}
          handleClose={handleClose}
        />
      </Grid>
    </Grid>
  );
};

export default ContactTexts;
