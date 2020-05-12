import styles from './Button.module.css'
import React, { memo } from 'react'
import PropTypes from 'prop-types'

console.log(styles)
const Button = ({ id, type = 'button', onClick, label = 'no label set...' }) => {
  return (
    <div className={styles['button-container']}>
      <button id={id} className={styles.button} type={type} onClick={onClick}>{label}</button>
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

// names and memo'd export to allow proper unit testing with enzyme https://github.com/airbnb/enzyme/issues/1875
export { Button }
export default memo(Button)
