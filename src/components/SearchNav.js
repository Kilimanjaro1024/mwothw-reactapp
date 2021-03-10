import React from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";

const growAnimation = keyframes`
  0% { height: 0px; }
  100% {height: 80px;}
`;

const textGrowAnimation = keyframes`
  0% { height: 0px; }
  100% {height: 30px;}
`;

const btnAnimation = growAnimation;
const SearchBtns = styled.div`
    background-color: #418BC8;
    display: flex;
    justify-content space-around;
    animation-name: ${growAnimation};
    animation-duration: 2s;
    animation-iteration-count: 1;
    overflow: hidden;
`;

const SearchForm = styled.form`
    background-color: #418BC8;
    display: flex;
    justify-content space-around;
    animation-name: ${textGrowAnimation};
    animation-duration: 2s;
    overflow: hidden;
`;

const SearchNav = (props) => {
  const [search, setSearch] = React.useState("");
  let postDisplay = "none";
  let userDisplay = "none";

  const emptyPostSeachFrom = {
    topic: "",
    tag: "",
  };

  const emptyUserSeachFrom = {
    username: "",
  };
  const [formData, setFormData] = React.useState(emptyPostSeachFrom);
  const [searchedUser, setSearchedUser] = React.useState(emptyUserSeachFrom);
  const [topic, setTopic] = React.useState();

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value],
    });
  };

  const handleUserChange = (event) => {
    setSearchedUser({
      ...searchedUser,
      [event.target.name]: [event.target.value],
    });
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();
  };

  const Func = (event) => {
    event.preventDefault();
    console.log("hello");
  };

  const getUsersPosts = (event) => {
    event.preventDefault();
    console.log("get posts");
    axios
      .get(props.url + "/posts/posts_by_user", {
        headers: { authorization: "bearer " + sessionStorage.getItem("token") },
      })
      .then((posts) => {
        console.log(posts);
        props.setPosts(posts.data);
      });
  };

  if (search === "") {
    postDisplay = "none";
    userDisplay = "none";
  }

  if (search === "Post") {
    postDisplay = "block";
    userDisplay = "none";
  }

  if (search === "User") {
    postDisplay = "none";
    userDisplay = "block";
  }

  return (
    <div>
      <SearchBtns>
        <div style={{ width: "50vw" }} onClick={() => setSearch("Post")}>
          <h1>Posts</h1>
        </div>
        <div style={{ width: "50vw" }} onClick={() => setSearch("User")}>
          <h1>Users</h1>
        </div>
      </SearchBtns>
      <div style={{ display: postDisplay }}>
        <SearchForm onSubmit={() => {}}>
          <select name="topic" onChange={handleTopicChange}>
            <option value=""></option>
            <option value="Topic 1">Topic 1</option>
            <option value="Topic 2">Topic 2</option>
            <option value="Topic 3">Topic 3</option>
          </select>
          <input type="text" name="tag" onChange={handleChange} />
          <input type="submit" value="submit" />
        </SearchForm>
      </div>
      <div style={{ display: userDisplay }}>
        <SearchForm onSubmit={getUsersPosts}>
          <input type="text" name="username" onChange={handleChange} />
          <input type="submit" value="submit" />
        </SearchForm>
      </div>
    </div>
  );
  if (search === "") {
    return (
      <SearchBtns>
        <div style={{ width: "50vw" }} onClick={() => setSearch("Post")}>
          <h1>Posts</h1>
        </div>
        <div style={{ width: "50vw" }} onClick={() => setSearch("User")}>
          <h1>Users</h1>
        </div>
      </SearchBtns>
    );
  } else if (search === "Post") {
    return (
      <div>
        <SearchBtns>
          <div style={{ width: "50vw" }} onClick={() => setSearch("Post")}>
            <h1>Posts</h1>
          </div>
          <div style={{ width: "50vw" }} onClick={() => setSearch("User")}>
            <h1>Users</h1>
          </div>
        </SearchBtns>
        <SearchForm onSubmit={() => {}}>
          <select name="topic" onChange={handleTopicChange}>
            <option value=""></option>
            <option value="Topic 1">Topic 1</option>
            <option value="Topic 2">Topic 2</option>
            <option value="Topic 3">Topic 3</option>
          </select>
          <input type="text" name="tag" onChange={handleChange} />
          <input type="submit" value="submit" />
        </SearchForm>
      </div>
    );
  } else if (search === "User") {
    return (
      <div>
        <SearchBtns>
          <div style={{ width: "50vw" }} onClick={() => setSearch("Post")}>
            <h1>Posts</h1>
          </div>
          <div style={{ width: "50vw" }} onClick={() => setSearch("User")}>
            <h1>Users</h1>
          </div>
        </SearchBtns>
        <SearchForm onSubmit={getUsersPosts}>
          <input type="text" name="username" onChange={handleChange} />
          <input type="submit" value="submit" />
        </SearchForm>
      </div>
    );
  }
};

export default SearchNav;
