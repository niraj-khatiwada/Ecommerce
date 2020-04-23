import React from 'react'

import { withRouter } from 'react-router-dom'
import FormInput from './FormInput.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

function SignInForm({ handleChange, handleSubmit, value }) {
  return (
    <div className=" row flex-column justify-content-center align-items-center">
      <h1 className="m-5">SignIn</h1>
      <button className="btn btn-primary" onClick={signInWithGoogle}>
        Sign In with Google <i className="fab fa-google"></i>
      </button>
      <hr />
      <strong>OR</strong>
      <form
        className="col-xl-3 col-lg-4 col-sm-6 mt-4"
        onSubmit={(evt) => handleSubmit(evt)}
      >
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          placeholder="Enter email"
          label="Enter your mail"
          value={value}
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter Password"
          label="Enter your password"
          value={value}
        />
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  )
}

export default withRouter(SignInForm)
