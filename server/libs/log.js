/*eslint-disable */
module.exports = (type, err) => {
  const validTypes = ['log', 'warn', 'error']
  if (validTypes.indexOf(type) === -1) {
    return console.error(`INVALID TYPE ${type} PASSED TO ERROR HANDLER`)
  } else if (type === 'error' && !(err instanceof Error)) {
    return console.error(`INVALID ERROR OBJECT PASSED TO ERROR HANDLER`)
  } else {
    return console[type](err)
  }
}
/*eslint-disable */