import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { CommunityCard } from 'Components/CommunityCard/CommunityCard'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))

const CommunitiesGrid = ({ communities }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} spacing={3}>
      {
        Object.keys(communities).map((community, index) => {
          return (
            <Grid item xs key={`community-${index}`}>
              <CommunityCard {...communities[community]} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export { CommunitiesGrid }
