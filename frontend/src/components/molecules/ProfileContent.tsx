import { Grid, Typography } from '@mui/material';

export type ProfileContentProps = {
  content: string;
};

const ProfileContent = (props: ProfileContentProps) => {
  const { content } = props;

  return (
    <Grid item lg={8} md={6} xs={12}>
      <Typography color="textPrimary" gutterBottom variant="h6">
        {content}
      </Typography>
    </Grid>
  );
};

export default ProfileContent;
