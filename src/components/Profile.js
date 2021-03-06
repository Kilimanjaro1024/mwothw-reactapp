import React from "react"
import ProfileHeader from "./ProfileHeader"
import ProfileContent from "./ProfileContent"
import ProfileNav from "./ProfileNav"

const Profile = props => {
  const [content, setContent] = React.useState("Posts")

  return (
    <div>
      <ProfileHeader history={props.history}/>
      <ProfileNav content={content} setContent={setContent}/>
      <ProfileContent content={content} likePost={props.likePost} url={props.url} posts={props.posts} setPosts={props.setPosts}/>
    </div>
  )
}

export default Profile
