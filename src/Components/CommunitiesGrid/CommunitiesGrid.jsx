import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CommunityCard } from '../CommunityCard/CommunityCard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const CommunitiesGrid = ({ communities }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(communities).map((community, index) => {
          return (
            <Grid item xl={3} key={`community-${index}`}>
              <CommunityCard {...communities[community]} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export { CommunitiesGrid };
