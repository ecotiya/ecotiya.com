import { CommonSection, SkillTables } from '../organisms/index';
import { MainApps } from '../../interface/CommonInterface';
import { ComponentSection } from '../../constants/CommonConstants';

type SkillProps = {
  mainAppsData: MainApps;
};

const Skill = (props: SkillProps) => {
  const { mainAppsData } = props;

  return (
    <CommonSection
      mainAppsData={mainAppsData}
      sectionConstants={ComponentSection.SKILL}
    >
      <SkillTables />
    </CommonSection>
  );
};

export default Skill;
