import { CommonSection, CareerTimeline } from '../organisms/index';
import { SectionTitles } from '../../interface/CommonInterface';

type CareerProps = {
  sectionTitleData: SectionTitles;
};

const Career = (props: CareerProps) => {
  const { sectionTitleData } = props;

  return (
    <CommonSection
      section={sectionTitleData.sectionKindCode}
      viewtitle={sectionTitleData.sectionTitle}
      viewsubtitle={sectionTitleData.sectionSubTitle}
      showFlg={sectionTitleData.showFlg}
    >
      <CareerTimeline />
    </CommonSection>
  );
};

export default Career;
