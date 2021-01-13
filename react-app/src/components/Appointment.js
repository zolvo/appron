import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";
import { appointmentForm } from "../services/auth";

function Appointment({ user }) {
  const [user_id, setUser_id] = useState({});
  const [chef_id, setChef_id] = useState({});
  const [notes, setNotes] = useState({});
  const [date, setDate] = useState(new Date());


  const onAppointment = async (e) => {
    e.preventDefault();
    const appointment = await appointmentForm(
      user_id,
      chef_id,
      notes,
      date,
    );
    if (!appointment.errors) {
    }
  };

  return (
    <Container>
      <AppointmentHeader>Appointment</AppointmentHeader>
      <MakeAppointment>
        <form onSubmit={onAppointment}>
          <div>Chef Name: </div>
          <div>User Name: {user.username}</div>
          <div className="subtitle">Pick a Date</div>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
          />
          <div>
            <textarea className="notes" />
          </div>
          <button type="submit" className="appointment">
            Make an appointment
          </button>
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
    cursor: pointer;
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
