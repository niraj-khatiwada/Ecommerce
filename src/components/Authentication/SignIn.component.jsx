import React, { Component } from 'react'
import SignInForm from "./SignInForm.component.jsx"

import {withRouter} from "react-router-dom"


class SignIn extends Component {
    constructor(){
        super()
        this.state= {
            email:"",
            password:""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value })
    }
    handleSubmit(evt){
        evt.preventDefault()
        this.setState({email:"", password:""})
    }
    render() {
        return (
            <SignInForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state}/>

        )
    }
}

export default withRouter(SignIn) 