import React, { Component } from 'react'
import { connect } from 'react-redux'

class Account extends Component {
  render () {
    return (
      <div className='account-container'>

      </div>
    )
  }
}

// gives our component access to state through props.emailManagement
function mapStateToProps (state) {
  return {
    users: state.users
  }
}

export default connect(
  mapStateToProps,
)(Account)

