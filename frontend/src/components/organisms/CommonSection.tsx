import { ReactNode } from 'react';
import { Box, Card, CardContent, Collapse } from '@mui/material';
import { ViewTitle } from '../molecules/index';

type CommonSectionProps = {
  children: ReactNode;
  section: string;
  viewtitle: string;
  viewsubtitle: string;
  showFlg: boolean;
};

// dataをまるごと受け取りたい。propsが2つになる想定。
// ReactNodeとSectionTitle
const CommonSection = (props: CommonSectionProps) => {
  const { children, section, viewtitle, viewsubtitle, showFlg } = props;

  return (
    <Collapse in={showFlg}>
      <section id={section}>
        <Box style={{ maxWidth: 1500, padding: '35px 5px', margin: '0 auto' }}>
          <Card>
            <CardContent>
              <ViewTitle title={viewtitle} subtitle={viewsubtitle} />
              {children}
            </CardContent>
          </Card>
        </Box>
      </section>
    </Collapse>
  );
};

export default CommonSection;
