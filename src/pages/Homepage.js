import React, { useState } from "react"
import { Route, Switch, Link, Router } from "react-router-dom";
import styled from 'styled-components'

import SearchNav from "../components/SearchNav"
import Header from "../components/Header"
import RecentPosts from "../components/RecentPosts"

const NewPostBtn = styled.button`
    width: 100vw;
    height: 10vh;
`;

const Homepage = props => {
    const [visible, setVisable] = useState(false)

    if(visible){
        return (
            <div>
                <Header history={props.history} setVisable={setVisable} visable={visible}/>
                <SearchNav/>
                <NewPostBtn onClick={() => {props.history.push("/new_post")}}>New Post</NewPostBtn>
                <RecentPosts url={props.url} likePost={props.likePost} posts={props.posts} setPosts={props.setPosts}/>
            </div>
        )
    }
    else {
        return (
            <div>
                <Header history={props.history} setVisable={setVisable} visable={visible}/>
                <NewPostBtn onClick={() => {props.history.push("/new_post")}}>New Post</NewPostBtn>
                <RecentPosts url={props.url} likePost={props.likePost} posts={props.posts} setPosts={props.setPosts}/>
            </div>
        )
    }
} 

export default Homepage