import React from 'react'
import { Link } from 'react-router-dom'

export function Nav () {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/private">Private</Link>
        </li>
        <li>
          <Link to="/login/">Login</Link>
        </li>
      </ul>
    </nav>
  )
}
