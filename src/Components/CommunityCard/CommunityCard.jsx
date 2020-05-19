import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import FaceIcon from '@material-ui/icons/Face'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { addCommunityToState } from 'Redux/communities'
import { subscribeToCommunity } from 'Api/services/communities/methods/subscribe-to-community/subscribe-to-community'
import { Banner } from 'Components/Banner/Banner'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
})

const CommunityCard = ({ slug, name, desc, subscribers }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [error, toggleError] = useState(false)

  const handleSubscribeClick = async () => {
    const resp = await subscribeToCommunity({ slug, name, desc })
    if (resp.error) toggleError(resp.error)
    else {
      toggleError(false)
      dispatch(addCommunityToState({ slug, name, desc, subscribers: ++subscribers }))
    }
  }

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
        <Button color="secondary" variant="contained" onClick={handleSubscribeClick}>
          subscribe
        </Button>
        <Chip color="primary" icon={<FaceIcon />} label={subscribers} />
      </CardActions>
      {error && <Banner message={error} type='error' />}
    </Card>
  )
}

export { CommunityCard }
