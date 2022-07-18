import { Grid } from '@mui/material';
import { SkillTable } from '../molecules/index';
import { MainApps } from '../../interface/CommonInterface';
import { ComponentSection, SkillField } from '../../constants/CommonConstants';

type SkillTablesProps = {
  mainAppsData: MainApps;
};

const SkillTables = (props: SkillTablesProps) => {
  const { mainAppsData } = props;

  const rowsBack = mainAppsData.skillList.filter(
    (v) => v.skillFieldCode === SkillField.BACKEND,
  );

  const rowsFront = mainAppsData.skillList.filter(
    (v) => v.skillFieldCode === SkillField.FRONTEND,
  );

  const rowsDev = mainAppsData.skillList.filter(
    (v) => v.skillFieldCode === SkillField.DEVOPS,
  );

  const rowsSkillDef = mainAppsData.sectionCommentList.filter(
    (v) => v.sectionKindCode === ComponentSection.SKILL,
  );

  return (
    <Grid container spacing={1}>
      <SkillTable
        tabletitle={SkillField.BACKEND}
        table={rowsBack}
        skillDefTable={rowsSkillDef}
      />
      <SkillTable
        tabletitle={SkillField.FRONTEND}
        table={rowsFront}
        skillDefTable={rowsSkillDef}
      />
      <SkillTable
        tabletitle={SkillField.DEVOPS}
        table={rowsDev}
        skillDefTable={rowsSkillDef}
      />
    </Grid>
  );
};

export default SkillTables;
