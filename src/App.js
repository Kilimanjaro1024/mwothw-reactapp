import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import React from "react"

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Homepage from "./pages/Homepage"
import ProfilePage from "./pages/ProfilePage"
import NewPostPage from "./pages/NewPostPage"

function App() {
  const url = "http://localhost:3000";
  const [posts, setPosts] = useState([])

  const likePost = post => {
    axios.post(
      url + "/liked_posts",
      { title: post.title, topic: post.topic, content: post.content },
      {
        headers: {
          authorization: "bearer " + sessionStorage.getItem("token"),
        },
      }
    )
  }

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(rp) => <LoginPage {...rp} url={url} />}
        />
        <Route
          exact
          path="/register"
          render={(rp) => <RegisterPage {...rp} url={url} />}
        />
        <Route
          exact
          path="/homepage"
          render={(rp) => <Homepage {...rp} url={url} likePost={likePost} posts={posts} setPosts={setPosts}/>}
        />
        <Route
          exact
          path="/profile"
          render={(rp) => <ProfilePage {...rp} url={url} likePost={likePost} posts={posts} setPosts={setPosts}/>}
        />
        <Route
          exact
          path="/new_post"
          render={(rp) => <NewPostPage {...rp} url={url} />}
        />
        
      </Switch>
    </div>
  );
}

export default App;
