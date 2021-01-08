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
        <div className="title">Appron</div>
        <div className="subtitle">Chef on demand</div>
      </SubContainer1>
      {/* <SubContainer2 /> */}
      {/* <SubContainer3 /> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const SubContainer1 = styled.div`
  box-sizing: border-box;
  // border: 1px solid red;
  height: 900px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40% center;

  .title {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: dancing script;
    text-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
    color: white;
    font-size: 9em;
    font-weight: bold;
    // border: 1px solid red;
  }

  .subtitle {
    dispaly: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: dancing script;
    text-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
    color: white;
    font-size: 4em;
    font-weight: bold;
    // border: 1px solid red;
  }
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
