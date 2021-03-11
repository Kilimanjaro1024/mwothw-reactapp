import React from "react"
import ProfileHeader from "./ProfileHeader"
import ProfileContent from "./ProfileContent"
import ProfileNav from "./ProfileNav"
import styled from "styled-components";

const PageContainer = styled.div`
  background-color: #bfdaee;
  height: 100vh;
`;

const Profile = props => {
  console.log(props.user)
  return (
    <PageContainer>
      <ProfileHeader history={props.history} user={props.user}/>
      <ProfileNav content={props.content} setContent={props.setContent}/>
      <ProfileContent content={props.content} likePost={props.likePost} url={props.url} posts={props.posts} setPosts={props.setPosts} history={props.history} user={props.user}/>
    </PageContainer>
  )
}

export default Profile
