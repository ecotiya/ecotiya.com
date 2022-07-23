import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

type ContactAlertErrorProps = {
  message: string;
  isError: boolean;
  alertErrorClose: () => void;
};

const ContactAlertError = (props: ContactAlertErrorProps) => {
  const { message, isError, alertErrorClose } = props;

  return (
    <Collapse in={isError}>
      <Alert
        variant="filled"
        severity="error"
        style={{ margin: '15px 5px' }}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={alertErrorClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {message}
      </Alert>
    </Collapse>
  );
};

export default ContactAlertError;
