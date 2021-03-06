import React from 'react'
import Profile from './Profile'
import MyPosts from './MyPosts'
import AccountInfo from "./AccountInfo"
import { Route, Switch, Link, Router } from "react-router-dom";


const ProfileContent = (props) => {
    

    if(props.content === "Posts"){
        return(
            <div>
                <Link to="/new">New Post</Link>
                <MyPosts path="/profile/posts" likePost={props.likePost} url={props.url} posts={props.posts} setPosts={props.setPosts}/>
            </div>
        )
    }
    else if(props.content === "Liked"){
        return(
            <MyPosts path="/profile/liked" likePost={props.likePost} url={props.url} posts={props.posts} setPosts={props.setPosts}/>
        )
    }
    else if(props.content === "Info"){
        return(
            <AccountInfo/>
        )
    }
    
}

export default ProfileContent