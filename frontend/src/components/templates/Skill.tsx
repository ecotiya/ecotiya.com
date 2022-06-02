import { CommonSection, SkillTables } from '../organisms/index';
import { SectionTitles } from '../../interface/CommonInterface';

type SkillProps = {
  sectionTitleData: SectionTitles;
};

const Skill = (props: SkillProps) => {
  const { sectionTitleData } = props;

  return (
    <CommonSection
      section={sectionTitleData.sectionKindCode}
      viewtitle={sectionTitleData.sectionTitle}
      viewsubtitle={sectionTitleData.sectionSubTitle}
      showFlg={sectionTitleData.showFlg}
    >
      <SkillTables />
    </CommonSection>
  );
};

export default Skill;
