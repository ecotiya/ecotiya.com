/* eslint-disable react/function-component-definition */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable react/jsx-props-no-spreading */
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';

function AppBar(props: AppBarProps) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

export default AppBar;
