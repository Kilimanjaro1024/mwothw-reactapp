import { useState } from "react";
import { Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
// import logo from "./logo.svg";
import "./App.css";
import React from "react";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Homepage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import NewPostPage from "./pages/NewPostPage";

function App() {
  const url = "https://mwothw-final-backend.herokuapp.com";
  const [posts, setPosts] = useState([]);
  const [content, setContent] = React.useState("Posts");
  const [user, setUser] = React.useState();
  const [likedPost, setLikedPost] = React.useState();

  const getUser = () => {
    axios
      .get(url + "/users/", {
        headers: {
          authorization: "bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((data) => {
        console.log(data);
        setUser(data.username);
      });
  };

  const likePost = (post) => {
    axios
      .get(url + "/profile/liked", {
        headers: {
          authorization: "bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((data) => {
        console.log(data.data);
        console.log(post.id);
        if (data.data.some(thisPost => thisPost.post_id === post.id)) {
          
          console.log("iterated liked on liked post");
        } else {
          axios
            .post(
              url + "/liked_posts",
              {
                title: post.title,
                topic: post.topic,
                content: post.content,
                likes: post.likes + 1,
                post_id: post.id,
              },
              {
                headers: {
                  authorization: "bearer " + sessionStorage.getItem("token"),
                },
              }
            )
            .then(
              axios.put(
                url + "/posts/" + post.id,
                { ...post, likes: (post.likes += 1) },
                {
                  headers: {
                    authorization: "bearer " + sessionStorage.getItem("token"),
                  },
                }
              )
            );
        }
      });
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(rp) => (
            <LoginPage {...rp} url={url} setUser={setUser} user={user} />
          )}
        />
        <Route
          exact
          path="/register"
          render={(rp) => <RegisterPage {...rp} url={url} />}
        />
        <Route
          exact
          path="/homepage"
          render={(rp) => (
            <Homepage
              {...rp}
              url={url}
              likePost={likePost}
              posts={posts}
              setPosts={setPosts}
              user={user}
            />
          )}
        />
        <Route
          exact
          path="/profile"
          render={(rp) => (
            <ProfilePage
              {...rp}
              url={url}
              likePost={likePost}
              posts={posts}
              setPosts={setPosts}
              content={content}
              setContent={setContent}
              user={user}
            />
          )}
        />
        <Route
          exact
          path="/new_post"
          render={(rp) => (
            <NewPostPage
              {...rp}
              url={url}
              content={content}
              setContent={setContent}
              user={user}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
