import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <section>
        <h1>Logo</h1>
        <ul>
            <li><Link> Sign Up</Link></li>
            <li><Link> Sign IN</Link></li>
        </ul>
      </section>
    </header>
  )
}

export default Header

