import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CommunityCard } from '../CommunityCard/CommunityCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const CommunitiesGrid = ({ communities }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {communities.map((community, index) => {
          return (
            <Grid item xs={3} key={`community-${index}`}>
              <CommunityCard {...community} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export { CommunitiesGrid };
