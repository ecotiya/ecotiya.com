import Timeline from '@mui/lab/Timeline';

import CommonSection from '../organisms/CommonSection';
import CareerTimelineItem from '../molecules/CareerTimelineItem';

const Career = () => (
  <CommonSection section="career" viewtitle="【経歴】" viewsubtitle="">
    <Timeline>
      <CareerTimelineItem
        yearmonth="2016"
        careerdivision="1"
        careertitle="タイトルテスト1"
        careercontent="内容１"
      />
      <CareerTimelineItem
        yearmonth="2017"
        careerdivision="2"
        careertitle="タイトルテスト2"
        careercontent="内容2"
      />
      <CareerTimelineItem
        yearmonth="2018"
        careerdivision="3"
        careertitle="タイトルテスト3"
        careercontent="内容3"
      />
      <CareerTimelineItem
        yearmonth="2019"
        careerdivision="4"
        careertitle="タイトルテスト4"
        careercontent="内容4"
      />
    </Timeline>
  </CommonSection>
);

export default Career;
