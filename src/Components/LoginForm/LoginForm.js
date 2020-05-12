import React, { Component, createRef } from 'react'
import Button from 'Components/Button/Button'
import { authenticateUser } from 'Libs/api/users'
import { setActiveUser } from 'Redux/users'
import { connect } from 'react-redux'

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.usernameInputRef = createRef()
    this.pwInputRef = createRef()
    this.state = {
      username: '',
      pw: ''
    }
  }

  handleUsernameChange = () => this.setState({ username: this.usernameInputRef.current.value })
  handlePwChange = () => this.setState({ pw: this.pwInputRef.current.value })
  handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await authenticateUser(this.state.username, this.state.pw)
    if (resp) this.props.setActiveUser(resp)
    console.log(resp)
  }

  render () {
    return (
      <div className='login-form'>
        <div className='input-group'>
          <label htmlFor='username'>Username</label>
          <input id='username' type='email' placeholder='Some text' onChange={this.handleUsernameChange} value={this.state.username} ref={this.usernameInputRef} />
        </div>
        <div className='input-group'>
          <label htmlFor='pw'>Password</label>
          <input id='pw' type='password' placeholder='Password' onChange={this.handlePwChange} value={this.state.pw} ref={this.pwInputRef} />
        </div>
        <Button type='submit' onClick={this.handleSubmit} label='Submit' />
      </div>
    )
  }
}

// gives our component access to state through props.users
function mapStateToProps (state) {
  return {
    users: state.users
  }
}

// here we're mapping actions to props
function mapDispatchToProps (dispatch) {
  return {
    setActiveUser: (username, pw) => dispatch(setActiveUser(username, pw))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
