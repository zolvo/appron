import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const ChefAppointment = (user) => {
  const [appointment, setAppontment] = useState({});
  const [chefId, setChefId] = useState("");



  return <Container>This is Appointment</Container>;
};

const Container = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  box-sizing: border-box;
  padding: 1em;
  border-radius: 0.5em;
  background-color: #444;
`;

export default ChefAppointment;
