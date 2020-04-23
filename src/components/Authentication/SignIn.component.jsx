import React, { Component } from 'react'
import SignInForm from "./SignInForm.component"

import {withRouter} from "react-router-dom"


class SignIn extends Component {
    render() {
        return (
            <SignInForm />
        )
    }
}

export default withRouter(SignIn)