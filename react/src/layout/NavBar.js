import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success bg-opacity-50 p-4 ">
  <div class="container">
    <Link to="/" class="navbar-brand fw-bold">AfriDEV</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end " id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/About" class="nav-link active" aria-current="page">ABOUT</Link>
        </li>
        <li class="nav-item">
          <Link to="/Contact" class="nav-link active">CONTACT</Link>
        </li>
        <li class="nav-item">
          <Link to="/Search" class="nav-link active" >SEARCH</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link active dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PROFILE
          </Link>
          <ul class="dropdown-menu">
            <li><Link to="/Signup" class="dropdown-item" href="#">SignUp</Link></li>
            <li><Link to="/Login" class="dropdown-item" href="#">Login</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar