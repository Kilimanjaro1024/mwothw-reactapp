import React from "react";

import axios from "axios";
import styled from "styled-components";

// const Container = styled.div`
//   background-color: blue;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

const Container = styled.div`
  background-color: #2a628f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
`;

const PageContainer = styled.div`
  background-color: #bfdaee;
`;

const RegisterDiv = styled.div`
  display: inline-block;
  border: 3px solid #2a628f;
  margin: 80px 0;
  padding: 20px 40px;
  text-align: left;
  font-family: "RocknRoll One", sans-serif;
  background-color: #418bc8;
  box-shadow: 0px 0px 15px #05090f;
  color: #0f1c2e;
  h1 {
    margin: 0;
  }
  h2 {
    margin: 10px 0;
  }
`;

// const ProfileBtn = styled.div`
//   display: flex;
// `;

// const Hmbgr = styled.img`
//   width: 50px;
//   height: 50px;
// `;

const Register = (props) => {
  const handleRegister = (registerInfo) => {
    axios
      .post(props.url + "/users", {
        username: registerInfo.username[0],
        email: registerInfo.email[0],
        password: registerInfo.password[0],
      })
      .then((data) => {});
  };

  const emptyRegisterFormData = {
    username: "",
    email: "",
    // submited_password: "",
    // confirm_password: "",
    password: "",
  };
  let submited_password = "";
  let confirm_password = "";
  const [formData, setFormData] = React.useState(emptyRegisterFormData);

  const handleChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === "submited_password") {
      console.log("hi");
      submited_password = event.target.value;
      console.log(submited_password);
    }
    if (event.target.name === "confirm_password") {
      confirm_password = event.target.value;
      console.log(confirm_password);
    }
    if (submited_password === confirm_password) {
      setFormData({ ...formData, password: [submited_password] });
    }
    if (
      event.target.name !== "submited_password" &&
      event.target.name !== "confirm_password"
    ) {
      console.log("name");
      setFormData({
        ...formData,
        [event.target.name]: [event.target.value],
      });
    }
    
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    console.log(formData);
    handleRegister(formData); // update passed down state from App.js with the form data
    props.history.push("/");
  };

  return (
    <PageContainer>
      <Container>
        <h1 onClick={() => props.history.push("/")}>Back</h1>
      </Container>
      <RegisterDiv>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <h2>Username:</h2>
          <input type="text" name="username" onChange={handleChange} />
          <h2>Email:</h2>
          <input type="text" name="email" onChange={handleChange} />
          <h2>Password:</h2>
          <input
            type="password"
            name="submited_password"
            onChange={handleChange}
          />
          <h2>Confirm Password:</h2>
          <input
            type="password"
            name="confirm_password"
            onChange={handleChange}
          />
          <br />
          <input
            style={{ margin: "15px 0 5px" }}
            type="submit"
            value="submit"
          />
        </form>
      </RegisterDiv>
    </PageContainer>
  );
};

export default Register;
