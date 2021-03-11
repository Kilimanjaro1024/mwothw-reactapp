import React from "react";
import "../Header.css";

import styled from "styled-components";



const Container = styled.div`
  background-color: #2A628F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5px;
`;

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

const Hmbgr = styled.img`
  width: 50px;
  height: 50px;
`;

const Header = (props) => {

  console.log(props.user)
  console.log(props.setVisable)
  const setNav = () => {
    props.setVisable(!props.visable)
    console.log(props.visable)
  }

  return (
    <Container>
      <ProfileBtn
        className="profile-btn"
        onClick={() => props.history.push("/profile")}
      >
        <img src="https://i.imgur.com/INnsE9J.png" alt="profile" />
        <h3>{props.user.user.username.toUpperCase()}</h3>
      </ProfileBtn>
      <div className="hmbgr-div">
        <Hmbgr
          src="https://static.thenounproject.com/png/198756-200.png"
          alt="profile"
          onClick = {() => setNav()}
        />
      </div>
    </Container>
  );
};

export default Header;
