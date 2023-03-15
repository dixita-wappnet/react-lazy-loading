import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="">Navbar</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/createpost">Create Post</NavLink>
          </li>
          
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/action">Action</NavLink></li>
              <li><NavLink className="dropdown-item" to="/anotheraction">Another action</NavLink></li>
              <li><hr className="dropdown-divider"/></li>
              <li><NavLink className="dropdown-item" to="/else">Something else here</NavLink></li>
            </ul>
          </li>
        </ul>
        <NavLink to="/login"><button className='btn btn-primary'>Login</button></NavLink>
        
      </div>
    </div>
  </nav>
  )
}
