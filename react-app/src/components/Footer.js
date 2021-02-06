import React from "react";
import styled from "styled-components";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Container>
      <Base>©2021 Appron - App Academy August 2020 Cohort</Base>
      <Social>
        <a href="https://www.linkedin.com/in/ronald-regan-palisuan-833451163/">
          <FaLinkedin size="25" />
        </a>
        Ronald Regan Palisuan
        <a href="https://github.com/zolvo">
          <FaGithubSquare size="25" />
        </a>
      </Social>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  // height: 8vh;

  background-image: linear-gradient(
    180deg,
    darkgrey,
    rgba(255, 0, 0, 0),
    darkgrey
  );

  padding-bottom: 2.5em;
`;

const Base = styled.div`
  background-color: #d81159;

  color: #ffffff;
  font-weight: 200;
  font-family: dosis;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 13px;
  text-align: center;
  letter-spacing: 0.08em;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  // height: 100%;
  width: 100%;
`;

const Social = styled.div`
  display: flex;
  // box-sizing: border-box;
  // width: 10em;
  margin-bottom: -35px;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
  color: white;
  box-sizing: border-box;
  width: 15em;
  height: 1em;
  font-family: dosis;
  font-size: 13px;
  //   font-weight: 600;
  text-transform: uppercase;
  a {
    color: white;
  }

  text-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
`;

export default Footer;
