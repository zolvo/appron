// import { style } from '@material-ui/system';
import React from "react";
import styled from "styled-components";
import test from "../video/test.mp4";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function About() {
  return (
    <Container>
      <video autoPlay loop muted className="video">
        <source src={test} type="video/mp4" />
      </video>
      <h2>About Us</h2>
      <Info>INFO@APPRON.COM / TEL: 123-456-7890</Info>
      <Line>_____________</Line>
      <Words>
        This app is inspired by a chef who got impacted by COVID, and expecting to get
        a new experience with the online web. "Appron" will let
        you know more about Chef, how well they assist you. Decide, choose,
        and create an appointment for your extraordinary dining.
      </Words>
      <Base>©2021 Appron - App Academy August Cohort</Base>
      <Social>
        <FaGithubSquare size="25" />
        <FaFacebookSquare size="25" />
        <FaInstagramSquare size="25" />
      </Social>
    </Container>
  );
}

const Container = styled.div`
  // background-color: #f4f3f2;
  height: 608px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-top: 4em;
    // color: #756f63;
    color: #ffffff;
    font-weight: 200;
    font-family: dancing script;
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const Info = styled.div`
  // color: #756f63;
  color: #ffffff;
  font-weight: 200;
  font-family: monserrat;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.3em;
`;

const Line = styled.div`
  // color: #756f63;
  color: #ffffff;
  margin: 0px 0px;
  text-align: center;
  font-family: monserrat;
  padding-bottom: 1em;
`;

const Words = styled.div`
  // color: #756f63;
  color: #ffffff;
  box-sizing: border-box;
  height: 12em;
  width: 28em;
  padding-top: 30px;
  text-align: center;
  font-family: monserrat;
  font-size: 15px;
  letter-spacing: 0.06em;
  font-weight: 200;
  padding-bottom: 15em;
`;

const Base = styled.div`
  background-color: #d81159;

  color: #ffffff;
  font-weight: 200;
  font-family: monserrat;
  font-size: 13px;
  text-align: center;
  letter-spacing: 0.05em;
  padding-top: 2em;
  padding-bottom: 2em;
  height: 100%;
  width: 100%;
`;

const Social = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 10em;
  margin-bottom:-35px;
  justify-content: space-between;
  margin-top: 1em;
  color: white;
`

export default About;
