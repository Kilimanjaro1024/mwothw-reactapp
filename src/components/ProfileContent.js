import React from "react";
// import Profile from "./Profile";
import MyPosts from "./MyPosts";
import AccountInfo from "./AccountInfo";
// import { Route, Switch, Link, Router } from "react-router-dom";
import styled from "styled-components";

const NewPostBtn = styled.div`
  background-color: #418bc8;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #13293d;
  height: 15vh;
  margin: 10px 0;
  font-family: "RocknRoll One", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #13293d;
  :hover {
    background-color: #b1c5d3;
  }
`;

const ContentContainer = styled.div`
  margin: auto;
  text-align: center;
  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const PageContainer = styled.div`
  background-color: #bfdaee;
`;

const ProfileContent = (props) => {
  console.log(props.user)
  if (props.content === "Posts") {
    return (
      <PageContainer>
        <ContentContainer>
          <NewPostBtn
            onClick={() => {
              props.history.push("/new_post");
            }}
          >
            New Post
          </NewPostBtn>
          <MyPosts
            path="/profile/posts"
            likePost={props.likePost}
            url={props.url}
            posts={props.posts}
            setPosts={props.setPosts}
          />
        </ContentContainer>
      </PageContainer>
    );
  } else if (props.content === "Liked") {
    return (
      <PageContainer>
        <ContentContainer>
          <MyPosts
            path="/profile/liked"
            likePost={props.likePost}
            url={props.url}
            posts={props.posts}
            setPosts={props.setPosts}
          />
        </ContentContainer>
      </PageContainer>
    );
  } else if (props.content === "Info") {
    return (
      <PageContainer>
        <AccountInfo user={props.user} url={props.url}/>
      </PageContainer>
    );
  }
};

export default ProfileContent;
