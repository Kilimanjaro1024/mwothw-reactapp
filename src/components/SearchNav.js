import React from "react";
import styled from "styled-components";

const SearchBtns = styled.div`
    background-color: green;
    display: flex;
    justify-content space-around;
`;

const SearchForm = styled.form`
    background-color: green;
    display: flex;
    justify-content space-around;
`;

const SearchNav = (props) => {
  const [search, setSearch] = React.useState("");
  console.log(search);

  const emptyPostSeachFrom = {
    topic: "",
    tag: "",
  };
  const [formData, setFormData] = React.useState(emptyPostSeachFrom);
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

  if (search === "") {
    return (
      <SearchBtns>
        <h1 onClick={() => setSearch("Post")}>Posts</h1>
        <h1 onClick={() => setSearch("User")}>Users</h1>
      </SearchBtns>
    );
  } else if (search === "Post") {
    return (
      <div>
        <SearchBtns>
          <h1 onClick={() => {setSearch("")}}>Posts</h1>
          <h1 onClick={() => setSearch("User")}>Users</h1>
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
          <h1 onClick={() => setSearch("Post")}>Posts</h1>
          <h1 onClick={() => setSearch("")}>Users</h1>
        </SearchBtns>
        <SearchForm onSubmit={() => {}}>
          <input type="text" name="tag" onChange={handleChange} />
          <input type="submit" value="submit" />
        </SearchForm>
      </div>
    );
  }
};

export default SearchNav;
