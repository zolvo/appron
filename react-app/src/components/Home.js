import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import styled from "styled-components";
import background from "../image/background.webp";

const Home = ({ setAuthenticated, authenticated }) => {
  return authenticated ? (
    <div></div>
  ) : (
    <Container>
      <SubContainer1>
        <h1> this is home</h1>
      </SubContainer1>
      <SubContainer2 />
      <SubContainer3></SubContainer3>
    </Container>
  );
};

const Container = styled.div``;

const SubContainer1 = styled.div`
  box-sizing: border-box;
  // border: 1px solid red;
  height: 900px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40% center;
`;

const SubContainer2 = styled.div`
  box-sizing: border-box;
  // border: 1px solid red;
  height: 30em;
  background-color: #ffbc42;
`;

const SubContainer3 = styled.div`
  box-sizing: border-box;
  // border: 1px solid red;
  height: 40em;
  background-color: brokenwhite;
`;
export default Home;
