/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) => <Slide direction="up" ref={ref} {...props} />,
);

type ContactDialogProps = {
  open: boolean;
  username: string;
  email: string;
  division: string;
  content: string;
  handleClose: () => void;
};

const ContactDialog = (props: ContactDialogProps) => {
  const { open, username, email, division, content, handleClose } = props;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>記載内容が問題なければ、送信お願いいたします。</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {username}
          {email}
          {division}
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>修正</Button>
        <Button onClick={handleClose}>送信</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
