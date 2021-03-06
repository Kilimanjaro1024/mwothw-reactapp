import React from "react"
import NewPost from "../components/NewPost"

const NewPostPage = props => {
    return(
        <NewPost history={props.history} url={props.url}/>
    )
}

export default NewPostPage