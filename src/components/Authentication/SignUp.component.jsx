import React, { Component } from 'react'
import SignUpForm from './SignUpForm.component.jsx'

import { withRouter } from 'react-router-dom'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password1: '',
      password2:""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    console.log(this.state)
    this.setState({ email: '', password1: '', password2:"" })
  }
  render() {
    return (
      <SignUpForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        value={this.state}
      />
    )
  }
}

export default withRouter(SignUp)
