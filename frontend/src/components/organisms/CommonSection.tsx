import { ReactNode } from 'react';
import { Box, Card, CardContent, Collapse } from '@mui/material';
import { ViewTitle } from '../molecules/index';
import { MainApps } from '../../interface/CommonInterface';

type CommonSectionProps = {
  mainAppsData: MainApps;
  sectionConstants: string;
  children: ReactNode;
};

const CommonSection = (props: CommonSectionProps) => {
  const { mainAppsData, sectionConstants, children } = props;

  const sectionTitle = mainAppsData.sectionTitleList.find(
    (obj) => obj.sectionKindCode === sectionConstants,
  );

  return (
    <Collapse in={sectionTitle?.showFlg}>
      <section id={sectionTitle?.sectionKindCode}>
        <Box style={{ maxWidth: 1500, padding: '35px 5px', margin: '0 auto' }}>
          <Card variant="outlined">
            <CardContent>
              <ViewTitle
                title={sectionTitle?.sectionTitle}
                subtitle={sectionTitle?.sectionSubTitle}
              />
              {children}
            </CardContent>
          </Card>
        </Box>
      </section>
    </Collapse>
  );
};

export default CommonSection;
