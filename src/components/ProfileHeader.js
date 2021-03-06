import React from "react"
import "../Header.css"


const ProfileHeader = props => {
  return (
    <div className="header">
      <h3 onClick={() => props.history.push("/homepage")}>Back</h3>
      <div className="profile-btn" onClick={() => props.history.push("/profile")}>
        <img src="https://i.imgur.com/INnsE9J.png" alt="profile" />
        <h3>Username</h3>
      </div>
    </div>
  )
}

export default ProfileHeader
