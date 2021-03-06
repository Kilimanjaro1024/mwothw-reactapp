import React from 'react'
import '../Header.css'


const ProfileNav = (props) => {

    return (
        <div className="header">
               <h1 onClick={() => props.setContent("Posts")}>My Posts</h1>
               <h1 onClick={() => props.setContent("Liked")}>Liked Posts</h1>
               <h1 onClick={() => props.setContent("Info")}>Account Info</h1>
        </div>
    )

}

export default ProfileNav