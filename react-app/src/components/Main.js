import React from "react";
import styled from "styled-components";
import background2 from "../image/02.jpg";
import background3 from "../image/food00.png";
import img00 from "../image/00.png";
import img02 from "../image/00a.png";
import img01 from "../image/01.jpg";
import About from "./About";
import gold from "../video/gold.mp4";
import { Element } from "react-scroll";
import { NavLink } from "react-router-dom";
// import ChefList from './ChefsList';

const Home = ({ authenticated, chefs }) => {
  const chefList =
    chefs &&
    chefs.map((chef) => (
      <li key={chef.id}>
        <NavLink className="list" to={`/chefs/${chef.id}`}>
          {chef.user.username}
        </NavLink>
      </li>
    ));

  return authenticated ? (
    <div></div>
  ) : (
    <Container>
      <SubContainer1>
        <Element id="top" name="top">
          <video autoPlay loop muted className="video">
            <source src={gold} type="video/mp4" />
          </video>
        </Element>
        <Title>Appron</Title>
        <Subtitle>Chef on demand</Subtitle>
      </SubContainer1>
      <SubContainer2>
        <img className="img1" src={img00} alt={img00} />
        <img className="img2" src={img01} alt={img01} />
        <img className="img3" src={img02} alt={img02} />
        <div className="title">We Bring You</div>
        <div className="subtitle">Chef on your door</div>
        <ChefList>
          <div className="head">Our Chefs List:</div>
          <div>{chefList}</div>
        </ChefList>
      </SubContainer2>
      <SubContainer3>
        This apps is designed to help you to{" "}
        <span>find chef for your event</span>. Created for all the chef who want
        to <span>serve with passion</span>.
      </SubContainer3>
      <Element id="about" name="about">
        <About />
      </Element>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-repeat: no-repeat;
  object-fit: cover;

  .video {
    box-sizing: border-box;
    margin-top: -24px;
    height: 49em;
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }
`;

const SubContainer1 = styled.div`
  box-sizing: border-box;
  height: 760px;
  background-image: url(${background2});
  background-repeat: no-repeat;
  background-size: 55em;
  background-position: center;
  margin-top: 1.5em;
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

const ChefList = styled.div`
box-sizing: border-box;
border: 1px solid darkgrey;
border-radius: 1em;
margin-top: 22em;
position: absolute;
height: 8em;
width: 20em;
list-style: none;
padding: 1em;
font-family: montserrat;
box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.1);
text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);

.head {
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 1em;
  }

  a {
    font-size: 13px;
    font-weight: 600;
    color: grey;
  }
`;

const SubContainer2 = styled.div`
  box-sizing: border-box;
  // border: 1px solid red;
  height: 35em;
  // padding-top: 5em;
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
  font-family: montserrat;
  // letter-spacing: 0.5px;
  font-size: 16px;
  font-weight: 600;
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
