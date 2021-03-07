import React from "react"
import { Route, Switch, Link, Router } from "react-router-dom";

import SearchNav from "../components/SearchNav"
import Header from "../components/Header"
import RecentPosts from "../components/RecentPosts"

const Homepage = props => {
    return (
        <div>
            <Header history={props.history}/>
            <SearchNav/>
            <Link to="/new_post">New Post</Link>
            <RecentPosts url={props.url} likePost={props.likePost} posts={props.posts} setPosts={props.setPosts}/>
        </div>
    )
} 

export default Homepage