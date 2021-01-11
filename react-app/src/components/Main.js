import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import background from "../image/bg01.jpg";
import background2 from "../image/02.jpg";
import background3 from "../image/food00.png";
import img00 from "../image/00.png";
import img02 from "../image/00a.png";
import img01 from "../image/01.jpg";
import About from "./About";

const Home = ({ setAuthenticated, authenticated }) => {
  return authenticated ? (
    <div></div>
  ) : (
    <Container>
      <SubContainer1>
        <Title>Appron</Title>
        <Subtitle>Chef on demand</Subtitle>
      </SubContainer1>
      <SubContainer2>
        <img className="img1" src={img00} alt={img00} />
        <img className="img2" src={img01} alt={img01} />
        <img className="img3" src={img02} alt={img02} />
        <div className="title">We Bring You</div>
        <div className="subtitle">Chef on your door</div>
      </SubContainer2>
      <SubContainer3>
        This apps is designed to help you to{" "}
        <span>find chef for your event</span>. Created for all the chef who want
        to <span>serve with passion</span>.
      </SubContainer3>
      <About />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // background-color: #d81159;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right bottom;
`;

const SubContainer1 = styled.div`
  box-sizing: border-box;
  height: 790px;
  background-image: url(${background2});
  background-repeat: no-repeat;
  background-size: 55em;
  background-position: center;
  margin-top: 1.5em;

  .img1 {
    height: 50px;
    box-sizing: border-box;
    border-radius: 30px;
  }
`;

const Title = styled.div`
  box-sizing: border-box;
  margin-top: 1.6em;
  text-align: center;
  font-family: dancing script;
  text-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
  color: white;
  font-size: 9em;
  font-weight: bold;
`;

const Subtitle = styled.div`
  // dispaly: flex;
  // flex-direction: column;
  text-align: center;
  font-family: dancing script;
  text-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
  color: white;
  font-size: 2em;
  font-weight: bold;
  filter: drop-shadow(0 0 30px #fff);
`;

const SubContainer2 = styled.div`
  box-sizing: border-box;
  // border: 1px solid red;
  height: 30em;
  background-color: white;
  // background-image: linear-gradient(360deg, white, grey, white);
  background-image: linear-gradient(to top, rgba(255, 0, 0, 0), grey);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    box-sizing: border-box;
    // margin-top: 1.6em;
    text-align: center;
    font-family: dancing script;
    text-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
    color: white;
    font-size: 5em;
    font-weight: bold;
    z-index: 13;
  }

  .subtitle {
    dispaly: flex;
    flex-direction: column;
    text-align: center;
    font-family: dancing script;
    text-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
    color: white;
    font-size: 3.5em;
    font-weight: bold;
    filter: drop-shadow(0 0 30px #fff);
    z-index: 13;
  }

  .img1 {
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 150px;
    position: absolute;
    z-index: 0;
    margin-top: -50px;
    margin-left: -250px;
    // border-radius: 30px;
  }

  .img2 {
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 230px;
    width: 200px;
    position: absolute;
    z-index: 0;
    margin-top: -50px;
    // margin-left: -250px;
    // border-radius: 30px;
  }

  .img3 {
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 150px;
    position: absolute;
    z-index: 0;
    margin-top: -50px;
    margin-left: 250px;
    // border-radius: 30px;
  }
`;

const SubContainer3 = styled.div`
  box-sizing: border-box;
  // border: 1px solid red;
  height: 40em;
  background-image: url(${background3});
  background-repeat: no-repeat;
  background-size: 300%;
  background-position: 10% top;

  background-color: #eff1f2;
  color: #20303c;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  // position:fixed;
  width: 100%;
  z-index: 10;

  span {
    color: #20303c;
    font-weight: 900;
    margin-left: 5px;
  }
`;

export default Home;
