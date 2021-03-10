import React from "react";

import styled from "styled-components";

const PostContainer = styled.div`
  background-color: white;
  
  // margin-top: 5px;
  padding: 5px;
  padding-bottom: 20px;
`;

const PostHeader = styled.div`
  text-align: left;
  h2 {
    font-family: 'RocknRoll One', sans-serif;
    padding: 0;
    margin: 0;
  }
  h3 {
    font-family: 'RocknRoll One', sans-serif;
    margin: 0;
  }
  h4 {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin: 0;
  }
  h5 {
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    margin: 0;
  }
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: #a5aab7;
  button {
    height: 30px;
  }
  h3 {
    margin: 0;
  }
`;

const LikesDiv = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  h3 {
    font-family: 'RocknRoll One', sans-serif;
    margin: 0 10px;
  }
`;

const Content = styled.div`
  min-height: 50px;
  p {
    text-align: left;
    margin: 3px;
    font-family: 'Shippori Mincho', serif;
    font-size: 20px;
  }
`;

const BottomLine = styled.div`
  margin: 20px 10px 0;
  border-bottom: 1px solid rgba(0,0,0, 0.3);
`;

const Post = (props) => {
  const [state, setState] = React.useState(true);

  const handleClick = (post) => {
    props.likePost(post);
    setState(!state);
  };

  return (
    <div>
      {props.posts.map((post, index) => {
        return (
          <PostContainer>
            <PostHeader>
              <h3>{post.topic}</h3>
              <h2>{post.title}</h2>
              <h4>By: {post.username}</h4>
              <h5>Posted: {new Date(post.created_at).toDateString()}</h5>
            </PostHeader>
            <Content>
              <p>{post.content}</p>
            </Content>
            <PostFooter>
              <LikesDiv>
                <button onClick={() => handleClick(post)}>like</button>
                <h3>{post.likes} Likes</h3>
              </LikesDiv>
              <h3>tags</h3>
            </PostFooter>
            <BottomLine/>
          </PostContainer>
        );
      })}
    </div>
  );
};

export default Post;
