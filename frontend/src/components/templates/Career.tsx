import { Typography } from '@mui/material';

import CommonSection from '../organisms/CommonSection';
import CareerTimeline from '../organisms/CareerTimeline';

const Career = () => (
  <CommonSection
    section="career"
    viewtitle="【経歴】"
    viewsubtitle="コメントを書いた方が良いです。"
  >
    <CareerTimeline />
    {/* TODO */}
    <Typography color="textPrimary" gutterBottom variant="body1">
      ★ここに何かしら書いた方が良いかもしれません。timelineとの間隔空けて、中央揃え、画像を追加し、左画像・右文章のようなイメージ、ここも動的に変更可能にする。
    </Typography>
  </CommonSection>
);

export default Career;
