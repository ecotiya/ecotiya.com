/* eslint-disable react/destructuring-assignment */
import { Grid, Typography } from '@mui/material';

export type ProfileContentProps = {
  content: string;
};

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function ProfileContent(props: ProfileContentProps) {
  return (
    <Grid item lg={8} md={6} xs={12}>
      <Typography color="textPrimary" gutterBottom variant="h6">
        {props.content}
      </Typography>
    </Grid>
  );
}

export default ProfileContent;
