import CommonSection from '../organisms/CommonSection';
import ProfileDetail from '../organisms/ProfileDetail';

const Profile = () => (
  <CommonSection
    section="profile"
    viewtitle="【私について】"
    viewsubtitle="コメントを書いた方が良いです。"
  >
    <ProfileDetail />
  </CommonSection>
);

export default Profile;
