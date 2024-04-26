import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h1>Logo</h1>
      <ul>
        <li> <Link>Sign Up</Link> </li>
        <li> <Link>Sign In</Link> </li>
      </ul>
    </header>
  )
}

export default Header
