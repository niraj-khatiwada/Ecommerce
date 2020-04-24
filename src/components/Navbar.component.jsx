import React from 'react'

import Popover from './Secondary/Popover.component'
import { Link, FIcon, SMALL } from '../styles/Nav.styles'

import { NavLink, withRouter } from 'react-router-dom'

import { auth } from './../firebase/firebase.utils'

import { connect } from 'react-redux'

import CartDropdown from './Secondary/CartDropDown.component'

class Navbar extends React.Component {
  state = {
    signoutconfirm: false,
  }
  toggle = () =>
    this.setState((preState) => this.setState({ signoutconfirm: !preState }))
  closePopover = () => this.setState({ signoutconfirm: false })
  render() {
    const { history, user } = this.props
    const { loggedInUser } = user
    const style = { cursor: 'pointer' }

    const popover = (
      <Popover
        id="signoutconfirm"
        signoutconfirm={this.state.signoutconfirm}
        toggle={this.toggle}
        signout={() => {
          auth.signOut()
          this.closePopover()
        }}
      />
    )
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
            <Link
              onClick={() => {
                return history.push('/shop')
              }}
              className={`nav-item nav-link`}
              style={style}
            >
              Shop
            </Link>
            <Link
              id="signoutconfirm"
              onClick={() =>
                loggedInUser === null
                  ? history.push('/signin')
                  : this.setState({ signoutconfirm: true })
              }
              className={`nav-item nav-link`}
              style={style}
            >
              {loggedInUser === null ? 'Sign In' : 'Sign Out'}
            </Link>
            {popover}
            <Link className="nav-item nav-link" style={style}>
              Contact
            </Link>
            <CartDropdown
              dropdownToggle={
                <Link className="nav-item nav-link d-flex p-0 align-items-center">
                  <FIcon src="https://img.icons8.com/ios/24/000000/shopping-bag.png" />
                  <SMALL>50</SMALL>
                </Link>
              }
            />
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(withRouter(Navbar))
