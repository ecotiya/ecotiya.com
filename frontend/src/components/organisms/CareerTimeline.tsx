import { Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import { CareerTimelineItem } from '../molecules/index';
import { ComponentSection } from '../../constants/CommonConstants';
import { MainApps } from '../../interface/CommonInterface';

type CareerTimelineProps = {
  mainAppsData: MainApps;
};

const CareerTimeline = (props: CareerTimelineProps) => {
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
      <Typography color="textPrimary" gutterBottom variant="body1">
        {sectionComment?.sectionComment}
      </Typography>
    </>
  );
};

export default CareerTimeline;
