import React from 'react'
import axios from 'axios'

import Post from "./Post"

const RecentPosts = props => {

    const getRecentPosts = () => {
        axios.get(props.url + "/posts", {
            headers: {'authorization': 'bearer ' + sessionStorage.getItem('token')}
        }).then((posts) => {
            console.log(posts)
            props.setPosts(posts.data)
        })
    }

    React.useEffect(() => {
        getRecentPosts()
    }, [])

    return(
        <Post posts={props.posts} likePost={props.likePost}/>
        
    )
}

export default RecentPosts