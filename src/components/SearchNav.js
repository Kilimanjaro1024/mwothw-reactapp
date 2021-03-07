import React from "react";

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
      <div>
        <h1 onClick={() => setSearch("Post")}>Posts</h1>
        <h1 onClick={() => setSearch("User")}>Users</h1>
      </div>
    );
  } else if (search === "Post") {
    return (
      <div>
        <div>
          <h1 onClick={() => setSearch("Post")}>Posts</h1>
          <h1 onClick={() => setSearch("User")}>Users</h1>
        </div>
        <form onSubmit={() => {}}>
          <select name="topic" onChange={handleTopicChange}>
            <option value=""></option>
            <option value="Topic 1">Topic 1</option>
            <option value="Topic 2">Topic 2</option>
            <option value="Topic 3">Topic 3</option>
          </select>
          <input type="text" name="tag" onChange={handleChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  } else if (search === "User") {
    return (
      <div>
        <div>
          <h1 onClick={() => setSearch("Post")}>Posts</h1>
          <h1 onClick={() => setSearch("User")}>Users</h1>
        </div>
        <form onSubmit={() => {}}>
          <input type="text" name="tag" onChange={handleChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
};

export default SearchNav;
