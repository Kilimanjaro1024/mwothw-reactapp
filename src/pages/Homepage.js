import React from "react"
import Header from "../components/Header"
import RecentPosts from "../components/RecentPosts"
import { Route, Switch, Link, Router } from "react-router-dom";

const Homepage = props => {
    return (
        <div>
            <Header history={props.history}/>
            <Link to="/new_post">New Post</Link>
            <RecentPosts url={props.url} likePost={props.likePost} posts={props.posts} setPosts={props.setPosts}/>
        </div>
    )
} 

export default Homepage