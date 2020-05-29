import React from 'react'
import PropTypes from 'prop-types';
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

export const ChipButton = ({ active, label, handler, color }) => {
  const classes = useStyles()
  const globalDispatch = useDispatch()

  const onClick = () => globalDispatch(handler())
  return (
    <div className={classes.root}>
      <Chip
        label={label}
        clickable
        color={color || 'secondary'}
        variant={active ? 'default' : 'outlined'}
        onClick={onClick}
      />
    </div>
  )
}

ChipButton.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  handler: PropTypes.func,
  color: PropTypes.string,
};
