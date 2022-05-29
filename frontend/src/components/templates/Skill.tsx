import { Grid } from '@mui/material';
import SkillTable from '../organisms/SkillTable';
import CommonSection from '../organisms/CommonSection';

interface SkillTableData {
  skillName: string;
  experienceYm: number;
}

const createData = (
  skillName: string,
  experienceYm: number,
): SkillTableData => ({ skillName, experienceYm });

// 最終的に、下記のような値をDBから取得する予定。
const rowsBack = [
  createData('Java', 4.0),
  createData('VB.NET', 2.0),
  createData('PHP', 0.5),
  createData('C#', 0.5),
  createData('PowerShell', 0.5),
  createData('Perl', 0.5),
];

const rowsFront = [
  createData('JavaScript', 2.0),
  createData('JQuery', 2.0),
  createData('JSP', 1.0),
  createData('PHP', 0.5),
  createData('Perl', 0.5),
  createData('React.js', 0.5),
];

const rowsDev = [
  createData('MySQL', 2.0),
  createData('PostgreSQL', 2.0),
  createData('CACHE', 1.0),
];

const Skill = () => (
  <CommonSection section="skill" viewtitle="【スキルセット】" viewsubtitle="">
    <Grid container spacing={1}>
      <SkillTable tabletitle="Backend" table={rowsBack} />
      <SkillTable tabletitle="Frontend" table={rowsFront} />
      <SkillTable tabletitle="DevOps" table={rowsDev} />
    </Grid>
  </CommonSection>
);

export default Skill;
