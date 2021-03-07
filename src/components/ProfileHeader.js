import React from "react"
import "../Header.css"
import styled from "styled-components";

const ProfileBtn = styled.div`
  display: flex;
`;

const ProfileHeader = props => {
  return (
    <div className="header">
      <h3 onClick={() => props.history.push("/homepage")}>Back</h3>
      <ProfileBtn onClick={() => props.history.push("/profile")}>
        <h3>Username</h3>
        <img src="https://i.imgur.com/INnsE9J.png" alt="profile" />
      </ProfileBtn>
    </div>
  )
}

export default ProfileHeader
