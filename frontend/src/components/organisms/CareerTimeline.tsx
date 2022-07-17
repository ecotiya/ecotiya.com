import { Box, Card, CardContent, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import { makeStyles } from '@mui/styles';
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

  const sectionComment = mainAppsData.sectionCommentList.find(
    (obj) => obj.sectionKindCode === ComponentSection.CAREER,
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
        <Card>
          <CardContent>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="body1"
              className={classes.textContent}
            >
              {sectionComment?.sectionComment}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default CareerTimeline;
