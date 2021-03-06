import React from "react"

import Login from "../components/Login"

const LoginPage = props => {
    console.log(props.history)
    return (
        <div>
            <Login url={props.url} history={props.history}/>
        </div>
    )
}

export default LoginPage