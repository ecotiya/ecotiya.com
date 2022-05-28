/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable react/destructuring-assignment */
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export type ViewTitleProps = {
  title: string;
  subtitle: string;
};

function ViewTitle(props: ViewTitleProps) {
  return (
    <>
      <Typography gutterBottom variant="h5" align="center">
        {props.title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        gutterBottom
        align="center"
      >
        {props.subtitle}
      </Typography>
      <Divider style={{ margin: '20px' }} />
    </>
  );
}

export default ViewTitle;
