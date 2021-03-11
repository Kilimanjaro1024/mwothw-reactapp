import React from "react"
import Register from "../components/Register"
import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: #bfdaee;
  height: 100vh;
`;

const RegisterPage = props => {
    return (
        <ContentContainer>
            <Register url={props.url} history={props.history}/>
        </ContentContainer>
    )
}

export default RegisterPage