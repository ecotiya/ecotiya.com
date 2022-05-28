/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import { TransitionProps } from '@mui/material/transitions';
import ContactTextInput from '../atoms/ContactTextInput';

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) => <Slide direction="up" ref={ref} {...props} />,
);

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

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function ContactTexts() {
  const [username, setUserName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [inquiryKind, setInquiryKind] = React.useState<string>('');
  const [inquiryContent, setInquiryContent] = React.useState<string>('');

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

  // const inputInquiryKind = React.useCallback(
  //   (event: { target: { value: React.SetStateAction<string> } }) => {
  //     setInquiryKind(event.target.value);
  //   },
  //   [setInquiryKind],
  // );

  const inputInquiryContent = React.useCallback(
    (event: { target: { value: React.SetStateAction<string> } }) => {
      setInquiryContent(event.target.value);
    },
    [setInquiryContent],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInquiryKind(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
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
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>ダイアログテストタイトル</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              ダイアログテスト内容
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
}

export default ContactTexts;
