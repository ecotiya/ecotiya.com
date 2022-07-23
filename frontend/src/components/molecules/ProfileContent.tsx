import { Button, Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

type ProfileContentProps = {
  content: string | undefined;
};

const useStyles = makeStyles({
  textContent: {
    whiteSpace: 'pre-line',
  },
});

const ProfileContent = (props: ProfileContentProps) => {
  const classes = useStyles();
  const { content } = props;

  return (
    <Grid item lg={8} md={6} xs={12}>
      <Typography
        color="textPrimary"
        gutterBottom
        variant="body1"
        className={classes.textContent}
      >
        {content}
      </Typography>
      <Divider style={{ margin: '20px' }} />
      <Button
        startIcon={<TwitterIcon />}
        size="large"
        color="primary"
        target="_blank"
        href="https://twitter.com/ecotiya"
        sx={{ mx: 0.5 }}
        disableRipple
      >
        Twitter
      </Button>
      <Button
        startIcon={<GitHubIcon />}
        size="large"
        color="inherit"
        target="_blank"
        href="https://github.com/ecotiya"
        sx={{ mx: 0.5 }}
        disableRipple
      >
        Github
      </Button>
    </Grid>
  );
};

export default ProfileContent;
