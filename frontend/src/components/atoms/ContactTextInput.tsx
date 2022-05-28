/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
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

function ContactTextInput(props: ContactTextInputProps) {
  return (
    <TextField
      required
      fullWidth
      multiline={props.multiline}
      type={props.type}
      variant="outlined"
      rows={props.rows}
      label={props.label}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default ContactTextInput;
