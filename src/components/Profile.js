import React from "react"
import ProfileHeader from "./ProfileHeader"
import ProfileContent from "./ProfileContent"
import ProfileNav from "./ProfileNav"

const Profile = props => {
  return (
    <div>
      <ProfileHeader history={props.history}/>
      <ProfileNav content={props.content} setContent={props.setContent}/>
      <ProfileContent content={props.content} likePost={props.likePost} url={props.url} posts={props.posts} setPosts={props.setPosts} history={props.history}/>
    </div>
  )
}

export default Profile
