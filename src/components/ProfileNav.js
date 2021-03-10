import React from 'react'
import '../Header.css'
import styled, { keyframes } from "styled-components";

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
  border: 2px solid #13293D;
  
  width: 100%;
  font-family: "RocknRoll One", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #13293D;
  :hover {
    background-color: #B1C5D3;
  }

  @media (min-width: 768px) {
    height: 20vh;
  }

`;

const ProfileNav = (props) => {

    return (
        <NavBtns>
               <NavBtn onClick={() => props.setContent("Posts")}>My Posts</NavBtn>
               <NavBtn onClick={() => props.setContent("Liked")}>Liked Posts</NavBtn>
               <NavBtn onClick={() => props.setContent("Info")}>Account Info</NavBtn>
        </NavBtns>
    )

}

export default ProfileNav