import React from "react";
import "../Header.css";
import axios from "axios";

const NewPost = (props) => {
  const createPost = (postData) => {
    axios
      .post(
        props.url + "/posts",
        {
          title: postData.title[0],
          topic: postData.topic[0],
          content: postData.content[0],
        },
        {
          headers: {
            authorization: "bearer " + sessionStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        props.history.push("/homepage");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const emptyLoginFormData = {
    title: "",
    topic: "",
    content: "",
    likes: 0
  };

  const [formData, setFormData] = React.useState(emptyLoginFormData);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    console.log(formData);
    createPost(formData); // update passed down state from App.js with the form data
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Title</h1>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <h1>Topic</h1>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
        />
        {/* <h1>Tags</h1>
        <input
          type="text"
          name="tags"
          value={formData.content}
          onChange={handleChange}
        /> */}
        <h1>Content</h1>
        <input
          type="text"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default NewPost;
