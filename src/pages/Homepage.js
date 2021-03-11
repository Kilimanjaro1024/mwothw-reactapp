import React, { useState } from "react";
// import { Route, Switch, Link, Router } from "react-router-dom";
import styled from "styled-components";

import SearchNav from "../components/SearchNav";
import Header from "../components/Header";
import RecentPosts from "../components/RecentPosts";

const PageContainer = styled.div`
  background-color: #bfdaee;
  height: 100vh;
`;

const NewPostBtn = styled.div`
  background-color: #418bc8;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #13293D;
  height: 15vh;
  margin: 10px 0;
  font-family: "RocknRoll One", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #13293D;
  :hover {
    background-color: #B1C5D3;
  }
`;

const ContentContainer = styled.div`
  margin: auto;
  text-align: center;
  // background-color: white;
  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const Homepage = (props) => {
  const [visible, setVisable] = useState(false);
  console.log(props.user)
  // React.useEffect(() => {
  //   props.getUser()
  // }, [])
  console.log(props.user)
  if (visible) {
    return (
      <PageContainer>
        <Header
          history={props.history}
          setVisable={setVisable}
          visable={visible}
          user={props.user}
        />
        <SearchNav url={props.url} />
        <ContentContainer>
          <NewPostBtn
            onClick={() => {
              props.history.push("/new_post");
            }}
          >
            New Post
          </NewPostBtn>
          <RecentPosts
            url={props.url}
            likePost={props.likePost}
            posts={props.posts}
            setPosts={props.setPosts}
          />
        </ContentContainer>
      </PageContainer>
    );
  } else {
    return (
      <PageContainer>
        <Header
          history={props.history}
          setVisable={setVisable}
          visable={visible}
          user={props.user}
        />
        <ContentContainer>
          <NewPostBtn
            onClick={() => {
              props.history.push("/new_post");
            }}
          >
            New Post
          </NewPostBtn>
          <RecentPosts
            url={props.url}
            likePost={props.likePost}
            posts={props.posts}
            setPosts={props.setPosts}
          />
        </ContentContainer>
      </PageContainer>
    );
  }
};

export default Homepage;
