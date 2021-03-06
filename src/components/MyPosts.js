import React from "react"
import axios from "axios"

import Post from "./Post"

const MyPosts = props => {

  const getMyPosts = () => {
    axios
      .get(props.url + props.path, {
        headers: { authorization: "bearer " + sessionStorage.getItem("token") },
      })
      .then(posts => {
        console.log(posts)
        props.setPosts(posts.data)
      })
  }

  

  React.useEffect(() => {
    getMyPosts()
  }, [])

  return (
    <Post posts={props.posts} likePost={props.likePost}/>
  )
}

export default MyPosts
