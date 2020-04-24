import React, { Component } from 'react'
import SignInForm from './SignInForm.component.jsx'

import { withRouter } from 'react-router-dom'

import {auth} from "../../firebase/firebase.utils"

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  async handleSubmit(evt) {
    evt.preventDefault()
    const {email,password} = this.state
    await auth.signInWithEmailAndPassword(email,password)
    .then(() => (this.setState({ email: '', password: '' })))
    .catch(err => console.log("Error while signing in"))
  }
  render() {
    return (
      <SignInForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        value={this.state}
      />
    )
  }
}

export default withRouter(SignIn)
