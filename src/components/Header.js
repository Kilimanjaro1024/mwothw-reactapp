import React from "react";
import "../Header.css";

import styled from "styled-components";

const Container = styled.div`
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileBtn = styled.div`
  display: flex;
`;

const Hmbgr = styled.img`
  width: 50px;
  height: 50px;
`;

const Header = (props) => {
  console.log(props.setVisable)
  const setNav = () => {
    props.setVisable(!props.visable)
  }

  return (
    <Container>
      <ProfileBtn
        className="profile-btn"
        onClick={() => props.history.push("/profile")}
      >
        <img src="https://i.imgur.com/INnsE9J.png" alt="profile" />
        <h3>Username</h3>
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
