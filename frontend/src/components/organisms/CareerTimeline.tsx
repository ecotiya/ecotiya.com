import { Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import { CareerTimelineItem } from '../molecules/index';
import { MainApps } from '../../interface/CommonInterface';

type CareerTimelineProps = {
  mainAppsData: MainApps;
};

const CareerTimeline = (props: CareerTimelineProps) => {
  const { mainAppsData } = props;

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
        ★ここに何かしら書いた方が良いかもしれません。timelineとの間隔空けて、中央揃え、画像を追加し、左画像・右文章のようなイメージ、ここも動的に変更可能にする。
      </Typography>
    </>
  );
};

export default CareerTimeline;
