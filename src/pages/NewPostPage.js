import React from "react";
import NewPost from "../components/NewPost";
import ProfileHeader from "../components/ProfileHeader"
import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: #bfdaee;
  height: 100vh;
`;

const NewPostPage = (props) => {
  return (
    <ContentContainer>
      <ProfileHeader history={props.history} user={props.user}/>
      <NewPost history={props.history} url={props.url} />
    </ContentContainer>
  );
};

export default NewPostPage;
