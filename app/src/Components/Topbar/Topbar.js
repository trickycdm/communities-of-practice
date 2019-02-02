import React, { Component } from 'react'
import { Nav } from 'Components/Nav/Nav'

class Topbar extends Component {
  render () {
    return (
      <div className={'topbar'}>
        Topbar
        <Nav />
      </div>
    )
  }
}

export default Topbar