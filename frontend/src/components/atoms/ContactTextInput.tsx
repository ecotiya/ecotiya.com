/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import TextField from '@mui/material/TextField';

export type ContactTextInputProps = {
  multiline: boolean;
  type: string;
  rows: number;
  label: string;
  placeholder: string;
  value: string;
  onChange: any;
};

const ContactTextInput = (props: ContactTextInputProps) => {
  const { multiline, type, rows, label, placeholder, value, onChange } = props;

  return (
    <TextField
      required
      fullWidth
      multiline={multiline}
      type={type}
      variant="outlined"
      rows={rows}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default ContactTextInput;
