import React from "react"

import Profile from "../components/Profile"

const ProfilePage = props => {
    return (
        <div>
            <Profile url={props.url} history={props.history} likePost={props.likePost} posts={props.posts} setPosts={props.setPosts}/>
        </div>
    )
}

export default ProfilePage