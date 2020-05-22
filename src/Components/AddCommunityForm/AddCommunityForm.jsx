import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import slug from 'slug'
import { addCommunityToState } from 'Redux/communities'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Banner } from 'Components/Banner/Banner'
import { create } from 'Api/services/communities/methods/create/create'

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
}))

const initialState = {
  name: '',
  desc: ''
}

const reducer = (state, action) => {
  const { name, value, apiError, apiSuccess } = action
  return {
    ...state,
    [name]: value,
    apiError,
    apiSuccess
  }
}

const AddCommunityForm = () => {

  const reduxDispatch = useDispatch()
  const [state, dispatch] = useReducer(reducer, initialState)

  const classes = useStyles()

  const onChange = e => {
    const { name, value } = e.target
    dispatch({ name, value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { name, desc } = state
    const community = { name, desc, slug: slug(name) }
    const resp = await create(community)
    if (resp.error) {
      dispatch({ apiError: resp.error, apiSuccess: false})
    } else {
      dispatch({ apiError: false, apiSuccess: true})
      reduxDispatch(addCommunityToState(community))
    }
  }

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
                id="name"
                label="Community Name"
                name="name"
                autoComplete="false"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="desc"
                label="Community Description"
                id="desc"
                autoComplete="false"
                multiline
                rows={4}
                rowsMax={6}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Add Community
          </Button>
          {state.apiError && <Banner message={state.apiError} type='error' />}
          {state.apiSuccess && <Banner message={'New Community Added!'} type='success' />}
        </form>
      </div>
    </Container>
  )
}

export { AddCommunityForm }
