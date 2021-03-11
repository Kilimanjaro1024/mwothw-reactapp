import React from "react";
import axios from "axios";
import styled from "styled-components";

const AccountDiv = styled.div`
  display: inline-block;
  margin: 40px 0;
  text-align: left;
  font-family: "RocknRoll One", sans-serif;
  
  color: #0f1c2e;
  h1 {
    margin: 0;
  }
  h2 {
    margin: 10px 0;
  }
  @media (min-width: 768px) {
    border: 3px solid #2a628f;
    background-color: #418bc8;
    box-shadow: 0px 0px 15px #05090f;
    margin: 80px auto;
    padding: 10px;
    width: 40vw;
  }
`;

const PictureDiv = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    max-height:300px;
    max-width:150px;
  }

  @media (min-width: 768px) {
    
    margin: 50px 0;
    width: 40vw;
    img {
      max-width: 300px;
      width: 300px;
    }
  }
`;

const UploadForm = styled.form`
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
  p {
    margin: 0 5px;
  }
`;

const AccountInfo = (props) => {
  const uploadPicture = (user, url) => {
    axios
      .put(
        props.url + "/users/" + sessionStorage.getItem("id"),
        { ...user, picture: url },
        {
          headers: {
            authorization: "bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        console.log(url);
        sessionStorage.setItem("picture", url);
      });
  };

  const emptyUrlFormData = {
    url: "",
  };

  const [formData, setFormData] = React.useState(emptyUrlFormData);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value],
    });
  };
  const submit = (event) => {
    event.preventDefault();
    uploadPicture(props.user.user, formData.url);
  };

  return (
    <AccountDiv>
      <h2>Username: {sessionStorage.getItem("user")}</h2>
      <h2>Email: {sessionStorage.getItem("email")}</h2>
      <PictureDiv>
        <h2>Profile Pic:</h2>
        <img
          src={sessionStorage.getItem("picture")}
          alt="profile"
        />
      </PictureDiv>
      <UploadForm onSubmit={submit}>
        <p>Upload</p>
        <br/>
        <input
          type="text"
          name="url"
          placeholder="link"
          value={formData.url}
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </UploadForm>
    </AccountDiv>
  );
};

export default AccountInfo;
