import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { handleNewUpvoteApiCall, addUpvoteToState } from '../../Redux/communities';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

const CommunityCard = ({ id, name, desc, votes }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleUpvoteClick = () => dispatch(handleNewUpvoteApiCall({ id, name, desc, votes: ++votes }));

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" variant="contained" onClick={handleUpvoteClick}>
          Upvote
        </Button>
        <Chip color="primary" icon={<FaceIcon />} label={votes} />
      </CardActions>
    </Card>
  );
};

export { CommunityCard };
