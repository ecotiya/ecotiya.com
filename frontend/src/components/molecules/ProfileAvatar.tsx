import { Avatar, Box, Grid, Typography } from '@mui/material';

export type ProfileAvatarProps = {
  avatar: string;
  name: string;
};

const ProfileAvatar = (props: ProfileAvatarProps) => {
  const { avatar, name } = props;

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
          src={avatar}
          sx={{
            height: 160,
            mb: 2,
            width: 160,
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h5">
          {name}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ProfileAvatar;
