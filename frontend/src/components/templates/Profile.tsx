import { Grid } from '@mui/material';
import { ProfileAvatar, ProfileContent } from '../molecules/index';
import CommonSection from '../organisms/CommonSection';

const user = {
  avatar: '',
  country: 'Japan',
  jobTitle: 'Developer',
  name: 'ecotiya',
  timezone: '',
};

const Profile = () => (
  <CommonSection section="profile" viewtitle="【私について】" viewsubtitle="">
    <Grid container spacing={1}>
      <ProfileAvatar avatar={user.avatar} name={user.name} />
      <ProfileContent content="こんにちは" />
    </Grid>
  </CommonSection>
);

export default Profile;
