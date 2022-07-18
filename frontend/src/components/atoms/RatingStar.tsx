import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

type RatingStarProps = {
  value: number;
};

const RatingStar = (props: RatingStarProps) => {
  const { value } = props;

  return (
    <Rating
      name="text-feedback"
      value={value}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
  );
};

export default RatingStar;
