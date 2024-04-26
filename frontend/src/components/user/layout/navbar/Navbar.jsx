import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <aside>
        <h3>Categories</h3>
      </aside>

      <ul>
        <li> <NavLink> Home </NavLink> </li>
        <li> <NavLink> About Us </NavLink> </li>
        <li> <NavLink> Store </NavLink> </li>
        <li> <NavLink> Contact </NavLink> </li>
      </ul>
    </nav>
  )
}

export default Navbar
