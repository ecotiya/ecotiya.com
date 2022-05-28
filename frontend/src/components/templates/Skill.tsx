/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Box, Card, CardContent, Grid } from '@mui/material';
import { SkillTable, ViewTitle } from '../molecules/index';

interface SkillTableData {
  skillName: string;
  experienceYm: number;
}

function createData(skillName: string, experienceYm: number): SkillTableData {
  return { skillName, experienceYm };
}

// Jsonから取得するように一旦変更する。
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

export default function Skill() {
  return (
    <section id="skill">
      <Box style={{ maxWidth: 1500, padding: '35px 5px', margin: '0 auto' }}>
        <Card>
          <CardContent>
            <ViewTitle title="【スキルセット】" subtitle="" />
            <Grid container spacing={1}>
              <SkillTable tabletitle="Backend" table={rowsBack} />
              <SkillTable tabletitle="Frontend" table={rowsFront} />
              <SkillTable tabletitle="DevOps" table={rowsDev} />
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
}
