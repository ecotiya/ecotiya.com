import { Grid } from '@mui/material';
import { ProfileAvatar, ProfileContent } from '../molecules/index';

import { SectionTitles } from '../../interface/CommonInterface';

type ProfileDetailProps = {
  sectionTitleData: SectionTitles;
};

const ProfileDetail = (props: ProfileDetailProps) => {
  const { sectionTitleData } = props;

  return (
    <Grid container spacing={1}>
      <ProfileAvatar
        avatar={sectionTitleData.remarks1}
        name={sectionTitleData.remarks2}
      />
      <ProfileContent content="" />
    </Grid>
  );
};
export default ProfileDetail;
