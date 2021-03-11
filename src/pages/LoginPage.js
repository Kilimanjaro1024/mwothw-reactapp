import React from "react"
import Login from "../components/Login"
import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: #bfdaee;
  height: 100vh;
`;

const LoginPage = props => {
    console.log(props.history)
    return (
        <ContentContainer>          
            <Login url={props.url} history={props.history} setUser={props.setUser} user={props.user}/>
        </ContentContainer>
    )
}

export default LoginPage