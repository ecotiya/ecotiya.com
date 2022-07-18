import * as React from 'react';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

type RatingSmileProps = {
  value: number;
};

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

const IconContainer = (props: IconContainerProps) => {
  const { value, ...other } = props;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <span {...other}>{customIcons[value].icon}</span>;
};

const RatingSmile = (props: RatingSmileProps) => {
  const { value } = props;

  return (
    <Rating
      name="highlight-selected-only"
      defaultValue={value}
      readOnly
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />
  );
};

export default RatingSmile;
