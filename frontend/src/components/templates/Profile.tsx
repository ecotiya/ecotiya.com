import { CommonSection, ProfileDetail } from '../organisms/index';
import { MainApps } from '../../interface/CommonInterface';
import { ComponentSection } from '../../constants/CommonConstants';

type ProfileProps = {
  mainAppsData: MainApps;
};

const Profile = (props: ProfileProps) => {
  const { mainAppsData } = props;

  return (
    <CommonSection
      mainAppsData={mainAppsData}
      sectionConstants={ComponentSection.PROFILE}
    >
      <ProfileDetail mainAppsData={mainAppsData} />
    </CommonSection>
  );
};

export default Profile;
