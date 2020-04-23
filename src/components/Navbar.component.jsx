import React from 'react'

import { NavLink, withRouter } from 'react-router-dom'

import { auth } from './../firebase/firebase.utils'

function Navbar({ history, loggedInUser }) {
  const style = { cursor: 'pointer' }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top ">
      <NavLink className="navbar-brand" to="/">
        Shop'em
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <h5
            onClick={() => {
              return history.push('/shop')
            }}
            className={`nav-item nav-link`}
            style={style}
          >
            Shop
          </h5>
          <h5
            onClick={() => {
              {
                loggedInUser === null ? history.push('/signin') : auth.signOut()
              }
            }}
            className={`nav-item nav-link`}
            style={style}
          >
            {loggedInUser === null ? 'Sign In' : 'Sign Out'}
          </h5>
          <h5 className="nav-item nav-link" style={style}>
            Contact
          </h5>
          <h5 className="nav-item nav-link" style={style}>
            <i className="fas fa-shopping-bag"></i>
          </h5>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Navbar)
