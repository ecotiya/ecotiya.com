/* eslint-disable react/destructuring-assignment */
import { Avatar, Box, Grid, Typography } from '@mui/material';

export type ProfileAvatarProps = {
  avatar: string;
  name: string;
};

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function ProfileAvatar(props: ProfileAvatarProps) {
  return (
    <Grid item lg={4} md={6} xs={12}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Avatar
          src={props.avatar}
          sx={{
            height: 128,
            mb: 2,
            width: 128,
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h5">
          {props.name}
        </Typography>
      </Box>
    </Grid>
  );
}

export default ProfileAvatar;
