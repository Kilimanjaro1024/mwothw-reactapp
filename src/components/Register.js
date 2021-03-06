import React from "react"

import axios from "axios"

const Register = props => {
  const handleRegister = registerInfo => {
    axios
      .post(props.url + "/users", {
        username: registerInfo.username[0],
        email: registerInfo.email[0],
        password: registerInfo.password[0],
      })
      .then(data => {

      })
  }

  const emptyRegisterFormData = {
    username: "",
    email: "",
    password: "",
  }

  const [formData, setFormData] = React.useState(emptyRegisterFormData)

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value],
    })
  }

  const handleSubmit = event => {
    event.preventDefault() // Prevent Form from Refreshing
    handleRegister(formData) // update passed down state from App.js with the form data
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <h2>Username:</h2>
        <input type="text" name="username" onChange={handleChange} />
        <h2>Email:</h2>
        <input type="text" name="email" onChange={handleChange} />
        <h2>Password:</h2>
        <input type="text" name="password" onChange={handleChange} />
        {/* <h2>Confirm Password:</h2>
                <input type="text" name="confirm-password"/> */}
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Register
