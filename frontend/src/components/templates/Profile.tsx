import { Box, Card, CardContent, Grid } from '@mui/material';
import { ProfileAvatar, ProfileContent, ViewTitle } from '../molecules/index';

const user = {
  avatar: '',
  country: 'Japan',
  jobTitle: 'Developer',
  name: 'ecotiya',
  timezone: '',
};

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export default function Profile() {
  return (
    <section id="profile">
      <Box style={{ maxWidth: 1500, padding: '35px 5px', margin: '0 auto' }}>
        <Card>
          <CardContent>
            <ViewTitle title="【私について】" subtitle="" />
            <Grid container spacing={1}>
              <ProfileAvatar avatar={user.avatar} name={user.name} />
              <ProfileContent content="こんにちは" />
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
}
