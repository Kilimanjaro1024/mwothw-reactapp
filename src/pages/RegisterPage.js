import React from "react"
import Register from "../components/Register"

const RegisterPage = props => {
    return (
        <div>
            <Register history={props.history}/>
        </div>
    )
}

export default RegisterPage