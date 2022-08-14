import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import { makeStyles } from '@mui/styles';
import Fade from 'react-reveal/Fade';
import { CareerTimelineItem } from '../molecules/index';
import { ComponentSection } from '../../constants/CommonConstants';
import { MainApps } from '../../interface/CommonInterface';

type CareerTimelineProps = {
  mainAppsData: MainApps;
};

const useStyles = makeStyles({
  textContent: {
    whiteSpace: 'pre-line',
  },
});

const CareerTimeline = (props: CareerTimelineProps) => {
  const classes = useStyles();
  const { mainAppsData } = props;

  const sectionCommentTitle = mainAppsData.sectionCommentList.find(
    (obj) =>
      obj.sectionKindCode === ComponentSection.CAREER && obj.titleFlg === true,
  );

  const sectionCommentContent = mainAppsData.sectionCommentList.find(
    (obj) =>
      obj.sectionKindCode === ComponentSection.CAREER && obj.titleFlg === false,
  );

  const getCareerTimelineItem = () =>
    mainAppsData.careerList.map(
      ({ careerDate, careerDivision, careerTitle, careerContents }) => (
        <CareerTimelineItem
          {...{
            key: careerDate,
            careerDate,
            careerDivision,
            careerTitle,
            careerContents,
          }}
        />
      ),
    );

  return (
    <>
      <Timeline>{getCareerTimelineItem()}</Timeline>
      <Box style={{ maxWidth: 1450, padding: '35px 5px', margin: '0 auto' }}>
        <Card variant="outlined">
          <Fade bottom>
            <CardContent>
              <CardHeader
                title={sectionCommentTitle?.sectionComment}
                titleTypographyProps={{ variant: 'h4' }}
              />
              <Divider style={{ margin: '20px' }} />
              <Typography
                color="textPrimary"
                gutterBottom
                variant="body1"
                className={classes.textContent}
              >
                {sectionCommentContent?.sectionComment}
              </Typography>
            </CardContent>
          </Fade>
        </Card>
      </Box>
    </>
  );
};

export default CareerTimeline;
