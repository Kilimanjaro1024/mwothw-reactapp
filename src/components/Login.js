import React from "react"
import axios from "axios"
import { Route, Switch, Link, Router } from "react-router-dom";
import history from "../history"


const Login = props => {
  console.log(props.history)
  const handleLogin = loginInfo => {
    axios
      .post(props.url + "/login", {
        username: loginInfo.username[0],
        password: loginInfo.password[0],
      })
      .then(data => {
        console.log(data)
        sessionStorage.setItem("token", data.data.token)
      })
      .then(() => {
        console.log(sessionStorage.getItem("token"))
      })
      .then(() => {
        props.history.push('/homepage')
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  const emptyLoginFormData = {
    username: "",
    password: "",
  }

  const [formData, setFormData] = React.useState(emptyLoginFormData)

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value],
    })
  }

  const handleSubmit = event => {
    event.preventDefault() // Prevent Form from Refreshing
    console.log(formData)
    handleLogin(formData) // update passed down state from App.js with the form data
  }

  return (
    <div>
      <h1>Login</h1>
      <h2>Username:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <h2>Password:</h2>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
       <Link to="/register/">Register</Link>
    </div>
  )
}

export default Login
