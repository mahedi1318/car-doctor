import React from 'react'

const RegisterPage = () => {

  const handleRegisterSubmit = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const payload = {name, email, password} 
    console.log(payload)
  }

  return (
    <div>
      <div className="container flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegisterSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input type="email" name='name' placeholder="user name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>   
      </div>
    </div>
  )
}

export default RegisterPage
