import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleNewCommunityApiCall } from 'Redux/communities';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddCommunityForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [communityName, setCommunityName] = useState('');
  const [communityDesc, setCommunityDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // todo add transform for the right data model
    dispatch(handleNewCommunityApiCall({ name: communityName, desc: communityDesc }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Community
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="communityName"
                label="Community Name"
                name="communityName"
                autoComplete="communityName"
                onChange={(e) => setCommunityName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="communityDesc"
                label="Community Description"
                id="communityDesc"
                autoComplete="communityDesc"
                multiline
                rows={4}
                rowsMax={6}
                onChange={(e) => setCommunityDesc(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Add Community
          </Button>
        </form>
      </div>
    </Container>
  );
};

export { AddCommunityForm };
