import React from "react"

import Profile from "../components/Profile"

const ProfilePage = props => {
    return (
        <div>
            <Profile url={props.url} history={props.history} likePost={props.likePost} posts={props.posts} setPosts={props.setPosts} content={props.content} setContent={props.setContent}/>
        </div>
    )
}

export default ProfilePage