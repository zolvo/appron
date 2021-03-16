import React from 'react'
import styled from 'styled-components';

function Search({ chefs }) {

    console.log(chefs)

    return (
        <Container>
            <div className='title'>Search List</div>
            <div className='main'>


            </div>
        </Container>
    )
}

const Container = styled.div`
  background-color: #d81159;
  height: 89vh;
  width: 100%;
  display: flex;
  justify-content: center;

  .title {
    margin-top: 6em;
    margin-bottom: 2em;
    padding-top: 2em;
    text-align: center;
    font-family: montserrat;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 1px;
    color: black;
    opacity: 0.8;
  }
`;

export default Search
