import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

type CContactAlertSuccessProps = {
  message: string;
  isSuccess: boolean;
  alertSuccessClose: () => void;
};

const ContactAlertSuccess = (props: CContactAlertSuccessProps) => {
  const { message, isSuccess, alertSuccessClose } = props;

  return (
    <Collapse in={isSuccess}>
      <Alert
        variant="filled"
        severity="success"
        style={{ margin: '15px 5px' }}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={alertSuccessClose}
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

export default ContactAlertSuccess;
