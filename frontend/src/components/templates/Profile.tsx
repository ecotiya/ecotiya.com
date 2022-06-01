import CommonSection from '../organisms/CommonSection';
import ProfileDetail from '../organisms/ProfileDetail';

import { SectionTitle } from '../../interface/CommonInterface';

type ProfileProps = {
  sectionTitleData: SectionTitle;
};

const Profile = (props: ProfileProps) => {
  const { sectionTitleData } = props;

  return (
    <CommonSection
      section={sectionTitleData.sectionKindCode}
      viewtitle={sectionTitleData.sectionTitle}
      viewsubtitle={sectionTitleData.sectionSubTitle}
      showFlg={sectionTitleData.showFlg}
    >
      <ProfileDetail sectionTitleData={sectionTitleData} />
    </CommonSection>
  );
};

export default Profile;
