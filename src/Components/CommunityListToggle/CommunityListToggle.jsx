import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import { useDispatch } from 'react-redux'

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

export const CommunityListToggle = ({ active, label, handler, color }) => {
  const classes = useStyles()
  const globalDispatch = useDispatch()

  const onClick = () => globalDispatch(handler())
  return (
    <div className={classes.root}>
      <Chip
        label={label}
        clickable
        color={color}
        variant={active ? 'default' : 'outlined'}
        onClick={onClick}
      />
    </div>
  )
}
