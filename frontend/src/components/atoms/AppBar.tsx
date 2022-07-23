/* eslint-disable react/jsx-props-no-spreading */
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';

const AppBar = (props: AppBarProps) => (
  <MuiAppBar elevation={0} position="fixed" {...props} />
);

export default AppBar;
