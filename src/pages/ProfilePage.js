import React from "react"

import Profile from "../components/Profile"
import styled from "styled-components";

const PageContainer = styled.div`
  background-color: #bfdaee;
`;

const ProfilePage = props => {
    return (
        <PageContainer>
            <Profile url={props.url} history={props.history} likePost={props.likePost} posts={props.posts} setPosts={props.setPosts} content={props.content} setContent={props.setContent}/>
        </PageContainer>
    )
}

export default ProfilePage