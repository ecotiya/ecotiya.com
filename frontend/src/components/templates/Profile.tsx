import { CommonSection, ProfileDetail } from '../organisms/index';
import { SectionTitles } from '../../interface/CommonInterface';

type ProfileProps = {
  sectionTitleData: SectionTitles;
};

const Profile = (props: ProfileProps) => {
  const { sectionTitleData } = props;

  // dataをまるごと渡したい。
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
