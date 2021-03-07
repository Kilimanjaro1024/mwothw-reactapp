import React from "react";
import NewPost from "../components/NewPost";
import ProfileHeader from "../components/ProfileHeader"

const NewPostPage = (props) => {
  return (
    <div>
      <ProfileHeader history={props.history}/>
      <NewPost history={props.history} url={props.url} />
    </div>
  );
};

export default NewPostPage;
