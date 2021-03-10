import React from "react"
import "../Header.css"
import styled from "styled-components";

const ProfileBtn = styled.div`
  display: flex;
  font-family: 'RocknRoll One', sans-serif;
  h3 {
    color: #0E1F2F;
    padding:3px;
    
  }
  :hover {
    h3{
      color: #B1C5D3;
    }
    text-shadow: 5px 5px 5px #0E1F2F; 
    img {
      box-shadow: 0px 0px  10px #B1C5D3;
    }
  }
`;

const Container = styled.div`
  background-color: #2A628F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5px;
`;

const ProfileHeader = props => {
  return (
    <Container>
      <h3 onClick={() => props.history.push("/homepage")}>Back</h3>
      <ProfileBtn onClick={() => props.history.push("/profile")}>
        <h3>Username</h3>
        <img src="https://i.imgur.com/INnsE9J.png" alt="profile" />
      </ProfileBtn>
    </Container>
  )
}

export default ProfileHeader
