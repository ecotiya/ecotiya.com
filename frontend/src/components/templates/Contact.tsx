import { ContactTexts, CommonSection } from '../organisms/index';
import { MainApps } from '../../interface/CommonInterface';
import { ComponentSection } from '../../constants/CommonConstants';

type ContactProps = {
  mainAppsData: MainApps;
};

const Contact = (props: ContactProps) => {
  const { mainAppsData } = props;

  return (
    <CommonSection
      mainAppsData={mainAppsData}
      sectionConstants={ComponentSection.CONTACT}
    >
      <form>
        <ContactTexts mainAppsData={mainAppsData} />
      </form>
    </CommonSection>
  );
};

export default Contact;
