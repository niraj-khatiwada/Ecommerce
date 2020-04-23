import React, { Component } from 'react'
import SignUpForm from './SignUpForm.component.jsx'

import { withRouter } from 'react-router-dom'

import {auth,createUserProfileDocument } from "../../firebase/firebase.utils"

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      displayName:"",
      password1: '',
      password2:""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  async handleSubmit(evt) {
    evt.preventDefault()
    const {email,displayName, password1, password2} = this.state
    if (password1 !== password2) {return alert("Password don'match")}
    await auth.createUserWithEmailAndPassword(email, password1)
    .then(async res => {
      await createUserProfileDocument(res, displayName)
      .then (() => this.setState({ email: '',displayName:"", password1: '', password2:"" }))
    })
    .catch(err => console.log("Error while creating Account", err))

    console.log(this.state)
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
