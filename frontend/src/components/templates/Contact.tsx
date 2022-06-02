import { ContactTexts, CommonSection } from '../organisms/index';
import { SectionTitles } from '../../interface/CommonInterface';

type ContactProps = {
  sectionTitleData: SectionTitles;
};

const Contact = (props: ContactProps) => {
  const { sectionTitleData } = props;

  return (
    <CommonSection
      section={sectionTitleData.sectionKindCode}
      viewtitle={sectionTitleData.sectionTitle}
      viewsubtitle={sectionTitleData.sectionSubTitle}
      showFlg={sectionTitleData.showFlg}
    >
      <form>
        <ContactTexts />
      </form>
    </CommonSection>
  );
};

export default Contact;
