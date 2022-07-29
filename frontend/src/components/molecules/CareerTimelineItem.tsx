import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import HouseIcon from '@mui/icons-material/House';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { makeStyles } from '@mui/styles';
import Fade from 'react-reveal/Fade';

type CareerTimelineItemProps = {
  careerDate: string;
  careerDivision: string;
  careerTitle: string;
  careerContents: string;
};

const useStyles = makeStyles({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: '#fff',
  },
  textContent: {
    whiteSpace: 'pre-line',
  },
});

const getTimelineIcon = (careerdivision: string) => {
  if (careerdivision === '1') {
    return <SchoolIcon />;
  }
  if (careerdivision === '2') {
    return <BusinessIcon />;
  }
  if (careerdivision === '3') {
    return <HouseIcon />;
  }

  return <DirectionsBikeIcon />;
};

const CareerTimelineItem = (props: CareerTimelineItemProps) => {
  const { careerDate, careerDivision, careerTitle, careerContents } = props;
  const classes = useStyles();

  return (
    <TimelineItem style={{ padding: '10px 5px' }}>
      <TimelineOppositeContent
        style={{
          flex: '0.1',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          {careerDate}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" variant="outlined">
          {getTimelineIcon(careerDivision)}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Fade right>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {careerTitle}
            </Typography>
            <Divider style={{ margin: '10px' }} />
            <Typography className={classes.textContent}>
              {careerContents}
            </Typography>
          </Paper>
        </Fade>
      </TimelineContent>
    </TimelineItem>
  );
};

export default CareerTimelineItem;
