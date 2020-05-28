import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import FaceIcon from '@material-ui/icons/Face'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { addCommunityToState } from 'Redux/communities'
import { subscribe, unsubscribe } from 'Api/services/communities'
import { Banner } from 'Components/Banner/Banner'
import { removeUserSubscription, isSubscribed } from 'Utils/communityData'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
})

const CommunityCard = ({ slug, name, desc, users: subscribers }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [error, toggleError] = useState(false)
  const { user } = useSelector(globalState => (globalState), shallowEqual)
  const { email } = user

  const handleSubscribeClick = async () => {
    const resp = await subscribe({ slug, name, desc }, { name: 'TBC', email })
    if (resp.error) toggleError(resp.error)
    else {
      toggleError(null)
      dispatch(addCommunityToState({ slug, name, desc, users: [...subscribers, { email, name: 'TBC' }] }))
    }
  }

  const handleUnubscribeClick = async () => {
    const resp = await unsubscribe({ slug, name, desc }, { name: 'TBC', email })
    if (resp.error) toggleError(resp.error)
    else {
      toggleError(null)
      dispatch(addCommunityToState({ slug, name, desc, users: removeUserSubscription(subscribers, email) }))
    }
  }

  const subscribeButton = <Button color="primary" variant="contained" onClick={handleSubscribeClick}>subscribe</Button>
  const unsubscribeButton = <Button color="secondary" variant="contained" onClick={handleUnubscribeClick}>unsubscribe</Button>

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
        {isSubscribed(subscribers, email) ? unsubscribeButton : subscribeButton}
        <Chip color="primary" icon={<FaceIcon />} label={subscribers.length} />
      </CardActions>
      {error && <Banner message={error} type='error' />}
    </Card>
  )
}

export { CommunityCard }
