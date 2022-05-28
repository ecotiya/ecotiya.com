import { Box, Card, CardContent, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import ViewTitle from '../molecules/ViewTitle';

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
              <Grid item lg={4} md={6} xs={12}>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Avatar
                    src={user.avatar}
                    sx={{
                      height: 128,
                      mb: 2,
                      width: 128,
                    }}
                  />
                  <Typography color="textPrimary" gutterBottom variant="h5">
                    {user.name}
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={8} md={6} xs={12}>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  こんにちは
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
}
