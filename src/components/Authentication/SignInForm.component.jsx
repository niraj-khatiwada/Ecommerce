import React from 'react'

export default function SignInForm() {
  return (
    <div className=" row flex-column justify-content-center align-items-center mt-5">
      <h1 className="m-5">SignIn</h1>
      <form className="col-xl-3 col-lg-4 col-sm-6">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  )
}
