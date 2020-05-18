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
import { handleNewSubscribeApiCall, addUpvoteToState } from '../../Redux/communities';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

const CommunityCard = ({ id, slug, displayName, desc, subscribers }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubscribeClick = () => dispatch(handleNewSubscribeApiCall({ id, slug, displayName, desc, subscribers: ++subscribers }));

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {displayName}
        </Typography>
        <Typography variant="body2" component="p">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" variant="contained" onClick={handleSubscribeClick}>
          subscribe
        </Button>
        <Chip color="primary" icon={<FaceIcon />} label={subscribers} />
      </CardActions>
    </Card>
  );
};

export { CommunityCard };
