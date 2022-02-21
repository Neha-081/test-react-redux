import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/"></Link>
    </li>
  </ul>
</nav>
  )
}

export default Navbar