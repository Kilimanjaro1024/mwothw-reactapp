import React from "react";
import "../Header.css";
import styled from "styled-components";

const NavBtns = styled.div`
    background-color: #418BC8;
    display: flex;
    justify-content space-around;
    
`;

const NavBtn = styled.div`
  background-color: #418bc8;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #13293d;
  width: 100%;
  font-family: "RocknRoll One", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #13293d;
  :hover {
    background-color: #b1c5d3;
  }

  @media (min-width: 768px) {
    height: 10vh;
  }
`;

const ProfileNav = (props) => {
  return (
    <NavBtns>
      <NavBtn onClick={() => props.setContent("Posts")}>My Posts</NavBtn>
      <NavBtn onClick={() => props.setContent("Liked")}>Liked Posts</NavBtn>
      <NavBtn onClick={() => props.setContent("Info")}>Account Info</NavBtn>
    </NavBtns>
  );
};

export default ProfileNav;
