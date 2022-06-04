import { CommonSection, CareerTimeline } from '../organisms/index';
import { MainApps } from '../../interface/CommonInterface';
import { ComponentSection } from '../../constants/CommonConstants';

type CareerProps = {
  mainAppsData: MainApps;
};

const Career = (props: CareerProps) => {
  const { mainAppsData } = props;

  return (
    <CommonSection
      mainAppsData={mainAppsData}
      sectionConstants={ComponentSection.CAREER}
    >
      <CareerTimeline />
    </CommonSection>
  );
};

export default Career;
