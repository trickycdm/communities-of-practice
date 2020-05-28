import React, { useEffect, useReducer } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { CommunitiesGrid } from 'Components/CommunitiesGrid/CommunitiesGrid'
import { addAllCommunitiesToState } from 'Redux/communities'
import { getAll } from 'Api/services/communities'
import { Banner } from 'Components/Banner/Banner'
import { communitiesInitialState, communitiesReducer } from './LocalReducer'
import { COMMUNITIES_API_ERROR, COMMUNITIES_API_LOADING, COMMUNITIES_API_SUCCESS, GENERAL_ERROR } from './LocalReducer'
import { toggleCommunitiesView } from 'Redux/meta'
import { CommunityListToggle } from 'Components/CommunityListToggle/CommunityListToggle'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}))

const CommunitiesView = () => {
  const classes = useStyles()
  const globalDispatch = useDispatch()
  const [localState, localDispatch] = useReducer(communitiesReducer, communitiesInitialState)
  const { communitiesApiLoading, communitiesApiError, generalError } = localState

  const { communities, meta } = useSelector(globalState => (globalState), shallowEqual)

  useEffect(() => {
    if (communities === null) {
      localDispatch({ type: COMMUNITIES_API_LOADING })
      getAll().then((communitiesResp) => {
        if (communitiesResp.error) localDispatch({ type: COMMUNITIES_API_ERROR, errorMessage: communitiesResp.error })
        else {
          globalDispatch(addAllCommunitiesToState(communitiesResp))
          localDispatch({ type: COMMUNITIES_API_SUCCESS })
        }
      }).catch(err => {
        localDispatch({ type: GENERAL_ERROR, errorMessage: err.message })
        console.error(err)
      })
    }
  }, [communities, localDispatch, globalDispatch])

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <CommunityListToggle label={'All Communities'} active={meta.showAllCommunities} color='secondary' handler={toggleCommunitiesView} />
        <CommunityListToggle label={'My Subscriptions'} active={!meta.showAllCommunities} color='secondary' handler={toggleCommunitiesView} />
      </div>
      <br/>
      {communitiesApiLoading && 'Loading...'}
      {generalError && <Banner message={'Sorry something went wrong...'} type='error' />}
      {communitiesApiError && <Banner message={communitiesApiError} type='error' />}
      {communities && <CommunitiesGrid communities={communities} />}
    </Container>
  )
}

export { CommunitiesView }
