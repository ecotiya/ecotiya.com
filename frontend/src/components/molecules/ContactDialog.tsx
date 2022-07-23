/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  AppBar,
  Button,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';

type ContactDialogProps = {
  open: boolean;
  username: string;
  email: string;
  division: string;
  divisionLabel: string;
  content: string;
  handleClose: () => void;
  registerInquiryData: (
    sendUserName: string,
    sendEmail: string,
    sendKindCode: string,
    sendText: string,
  ) => void;
};

const useStyles = makeStyles({
  textContent: {
    whiteSpace: 'pre-line',
  },
});

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) => <Slide direction="up" ref={ref} {...props} />,
);

const ContactDialog = (props: ContactDialogProps) => {
  const classes = useStyles();
  const {
    open,
    username,
    email,
    division,
    divisionLabel,
    content,
    handleClose,
    registerInquiryData,
  } = props;

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            記載内容が問題なければ、送信お願いいたします。
          </Typography>
          <Button
            autoFocus
            color="inherit"
            onClick={() =>
              registerInquiryData(username, email, division, content)
            }
          >
            送信する
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem button>
          <ListItemText primary="お名前" secondary={username} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="メールアドレス" secondary={email} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="お問い合わせ種別" secondary={divisionLabel} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText
            primary="お問い合わせ内容"
            secondary={content}
            className={classes.textContent}
          />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default ContactDialog;
