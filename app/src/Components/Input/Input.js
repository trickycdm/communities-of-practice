import React, { memo } from 'react'

const Input = memo(({ type = 'text', value, onChange, ...rest }) => <input type={type} value={value} onChange={onChange} {...rest} />)

export default Input
