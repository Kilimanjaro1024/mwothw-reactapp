import React from "react";

const Post = (props) => {
  return (
    <div>
      {props.posts.map((post, index) => {
        return (
          <div>
            <h1>
              {post.title}-{post.username}
            </h1>
            <h1>{post.content}</h1>
            <h1>{post.likes}</h1>
            <button onClick={() => props.likePost(post)}>like</button>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
