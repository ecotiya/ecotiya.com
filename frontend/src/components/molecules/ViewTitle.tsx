import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export type ViewTitleProps = {
  title: string | undefined;
  subtitle: string | undefined;
};

const ViewTitle = (props: ViewTitleProps) => {
  const { title, subtitle } = props;

  return (
    <>
      <Typography gutterBottom variant="h5" align="center">
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        gutterBottom
        align="center"
      >
        {subtitle}
      </Typography>
      <Divider style={{ margin: '20px' }} />
    </>
  );
};

export default ViewTitle;
