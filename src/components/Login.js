import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import styled from "styled-components";

const PageContainer = styled.div`
  background-color: #bfdaee;
`;

const Container = styled.div`
  background-color: #2a628f;
  padding: 10px 5px;
  font-family: 'RocknRoll One', sans-serif;
`;

const LoginDiv = styled.div`
  display: inline-block;
  border: 3px solid #2a628f;
  margin:  80px 0 ;
  padding: 20px 40px;
  text-align:left;
  font-family: 'RocknRoll One', sans-serif;
  background-color: #418bc8;
  box-shadow: 0px 0px 15px #05090F;
  color: #0F1C2E;
  h1 {
    margin:0;
  }
  h2 {
    margin: 10px 0;
  }
`;



// const LoginForm = styled.form`
//   .pw {
//     -webkit-text-security: disc;
//   }
// `;

const Login = (props) => {
  console.log(props.history);
  const handleLogin = (loginInfo) => {
    axios
      .post(props.url + "/login", {
        username: loginInfo.username[0],
        password: loginInfo.password[0],
      })
      .then((data) => {
        console.log(data.data)
        props.setUser(data.data)
        sessionStorage.setItem("user", data.data.user.username)
        sessionStorage.setItem("id", data.data.user.id)
        sessionStorage.setItem("picture", data.data.user.picture)
        sessionStorage.setItem("email", data.data.user.email)
        sessionStorage.setItem("token", data.data.token);
      })
      .then(() => {
        console.log(sessionStorage.getItem("token"));
      })
      .then(() => {
        console.log(props.user)
        props.history.push("/homepage");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const emptyLoginFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = React.useState(emptyLoginFormData);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    console.log(formData);
    handleLogin(formData); // update passed down state from App.js with the form data
  };

  return (
    <PageContainer>
      <Container>
        <h1>My Way or The Highway</h1>
      </Container>
      <LoginDiv>
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
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <input style={{margin: "10px 0 5px"}}type="submit" value="submit" />
        </form>
        <Link to="/register/">Register</Link>
      </LoginDiv>
    </PageContainer>
  );
};

export default Login;
