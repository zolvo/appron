import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

function Appointment(user) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container>
      <AppointmentHeader>Appointment</AppointmentHeader>
      <MakeAppointment>
        <form>
          <div>Chef Name: </div>
          <div>User Name: </div>
          <div className="subtitle">Pick a Date</div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <div>
            <textarea className="notes" />
          </div>
          <button className="appointment">Make an appointment</button>
        </form>
      </MakeAppointment>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #d81159;
  min-height: 100vh;
  padding-top: 5em;
`;

const AppointmentHeader = styled.div`
  font-family: monserrat;
  color: white;
  font-size: 20px;

  height: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MakeAppointment = styled.div`
  font-family: dosis;
  color: white;

  .notes {
    box-sizing: border-box;
    height: 8em;
    width: 30em;
    outline: none;
    border-radius: 8px;
  }

  .appointment{
    background-color: #ffbc42;
    font-weight: 700;
    width: 18em;
    height: 3em;
    border-radius: 2em;
    box-shadow:0px 14px 9px -15px rgba(0,0,0,0.25);
    outline:none;
    border:none;

    transition: all 0.2x ease-in;
    &:hover{
    transform: translateY(-3px);
  }
`;

export default Appointment;
