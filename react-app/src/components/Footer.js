import React from "react";
import styled from "styled-components";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

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
  //   // background-color: #f4f3f2;
  //   height: 560px;
  margin-top: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  //   h2 {
  //     margin-top: 4em;
  //     // color: #756f63;
  //     color: #ffffff;
  //     font-weight: 200;
  //     font-family: dancing script;
  //     font-size: 40px;
  //     text-align: center;
  //     margin-bottom: 30px;
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
  height: 100%;
  width: 100%;
`;

const Social = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 10em;
  margin-bottom: -35px;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
  color: white;
  box-sizing: border-box;
  width: 15em;
  height: 2em;
  font-family: dosis;
  font-size: 13px;
  //   font-weight: 600;
  text-transform: uppercase;
  a {
    color: white;
  }
`;

export default Footer;
