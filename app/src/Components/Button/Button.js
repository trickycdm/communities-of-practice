import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Button = memo(({ type = 'button', onClick, label = 'no label set...' }) => {
  return (
    <div className={`rounded-button__container`}>
      <button className={'rounded-button'} type={type} onClick={onClick}>{label}</button>
    </div>
  )
})

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
