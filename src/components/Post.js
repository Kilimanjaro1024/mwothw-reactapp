import React from "react";

import styled from "styled-components";

const PostContainer = styled.div`
  background-color: grey;
  border: 1px solid black;
  margin: 5px;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #A5AAB7;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #A5AAB7;
`;

const LikesDiv = styled.div`
  display: flex;
`;

const Post = (props) => {
    const[state, setState]  =React.useState(true)

    const handleClick = post => {
        props.likePost(post)
        setState(!state)

    }

    
  return (
    <div>
      {props.posts.map((post, index) => {
        return (
          <PostContainer>
            <PostHeader>
              <h3>
                {post.title}-{post.username}
              </h3>
              <h3>{post.topic}</h3>

            </PostHeader>
            <p>{post.content}</p>
            <PostFooter>
              <LikesDiv>
                <h3>{post.likes}</h3>
                <button onClick={() => handleClick(post)}>like</button>
              </LikesDiv>
              <h3>tags</h3>
            </PostFooter>
          </PostContainer>
        );
      })}
    </div>
  );
};

export default Post;
