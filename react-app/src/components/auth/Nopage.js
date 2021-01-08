import React from "react";
import styled from "styled-components";
import logo01 from "../../image/logo01.png";

function Nopage() {
  return (
    <Container>
      <div>
        <img className="img1" src={logo01} alt={logo01} />
      </div>
      <div>No Page to Display, You Are Lost !</div>
    </Container>
  );
}

const Container = styled.div`
  font-family: monserrat;
  font-size: 3em;
  color: white;
  background-color: #d81159;
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6em;
  min-width: 100%;

  div{
    padding-bottom: 1em;
  }
`;

export default Nopage;
