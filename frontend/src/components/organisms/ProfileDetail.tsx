import { Grid } from '@mui/material';
import { ProfileAvatar, ProfileContent } from '../molecules/index';
import { ComponentSection } from '../../constants/CommonConstants';
import { MainApps } from '../../interface/CommonInterface';

type ProfileDetailProps = {
  mainAppsData: MainApps;
};

const ProfileDetail = (props: ProfileDetailProps) => {
  const { mainAppsData } = props;

  const sectionTitle = mainAppsData.sectionTitleList.find(
    (obj) => obj.sectionKindCode === ComponentSection.PROFILE,
  );

  const sectionComment = mainAppsData.sectionCommentList.find(
    (obj) => obj.sectionKindCode === ComponentSection.PROFILE,
  );

  return (
    <Grid container spacing={1}>
      <ProfileAvatar
        avatar={sectionTitle?.remarks1}
        name={sectionTitle?.remarks2}
      />
      <ProfileContent content={sectionComment?.sectionComment} />
    </Grid>
  );
};
export default ProfileDetail;
