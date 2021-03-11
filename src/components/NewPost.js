import React from "react";
import "../Header.css";
import axios from "axios";
import styled from "styled-components";

const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: left;
  textarea {
    resize: none;
    width: 99%;
  }
  .submit {
    display: flex;
    flex-direction: flex-start;
    margin-right: auto;
  }
`;
const PageContainer = styled.div`
  background-color: #bfdaee;
`;

const ContentContainer = styled.div`
  border: 2px solid #13293d;
  display: flex;
  text-align: left;
  margin: auto;
  flex-direction: column;
  font-family: "RocknRoll One", sans-serif;
  background-color: #418bc8;
  box-shadow: 0px 0px 15px #05090f;
  color: #13293d;
  @media (min-width: 768px) {
    
    margin: 100px auto;
    width: 50vw;
  }
`;
const TitleTopicTags = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  flex-flow: wrap;
  p {
    margin: 0;
  }
`;

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
    likes: 0,
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
    <PageContainer>
      <ContentContainer>
        <PostForm onSubmit={handleSubmit}>
          <TitleTopicTags>
            <p>Title</p>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </TitleTopicTags>
          <TitleTopicTags>
            <p>Topic</p>
            <select name="topic" value={formData.topic} onChange={handleChange}>
              <option>Other</option>
              <option>Gaming</option>
              <option>Sports</option>
              <option>Reading</option>
              <option>Cleaning</option>
            </select>
          </TitleTopicTags>
          {/* <h1>Tags</h1>
        <input
          type="text"
          name="tags"
          value={formData.content}
          onChange={handleChange}
        /> */}
          <h1>Content</h1>
          <textarea
            cols="120"
            rows="15"
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
          <br />
          <input className="submit" type="submit" value="submit" />
        </PostForm>
      </ContentContainer>
    </PageContainer>
  );
};

export default NewPost;
