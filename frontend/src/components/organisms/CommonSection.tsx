import { ReactNode } from 'react';
import { Box, Card, CardContent } from '@mui/material';
import { ViewTitle } from '../molecules/index';

type CommonSectionProps = {
  children: ReactNode;
  section: string;
  viewtitle: string;
  viewsubtitle: string;
};

const CommonSection = (props: CommonSectionProps) => {
  const { children, section, viewtitle, viewsubtitle } = props;

  return (
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
  );
};

export default CommonSection;
