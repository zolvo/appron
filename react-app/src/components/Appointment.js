import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import ChefAppointment from "./ChefAppointment";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory, useParams } from "react-router-dom";

function Appointment({ user, setAppointments }) {
  const [chef, setChef] = useState({});
  const [notes, setNotes] = useState({});
  const [appointment, setAppointment] = useState({});
  const [date, setDate] = useState(new Date());

  const history = useHistory();

  const { chefId } = useParams();
  // console.log(chefId)

  useEffect(() => {
    document.title = "Appron: Appointment";
    if (!chefId) {
      return;
    }
    (async () => {
      const res = await fetch(`/api/chefs/${chefId}`);
      const chef = await res.json();
      setChef(chef);
    })();
  }, []);
  // console.log(" *****************: ", chef);

  const onAppointment = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/chef/${chefId}/appointment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user.id, chef.chef.id, notes, date),
    });

    if (res.ok) {
      const data = await res.json();
      const chefId = data.chef_id;
      history.push(`/chef/${chefId}`);
    }
    // const data = await fetch(`api/chef/${chefId}/appointment`)
  };
  // console.log(chef.chef.id);
  return (
    <Container>
      <AppointmentHeader>Appointment</AppointmentHeader>
      <MakeAppointment>
        <form onSubmit={onAppointment}>
          <div>
            Chef Name:
            {chef.chef && chef.chef.user.username}
          </div>
          <div>User Name: {user.username}</div>
          <ChefAppointment chef={chef} />
          <div className="subtitle">Pick a Date</div>
          <DatePicker
            dateFormat="MMMM d, yyyy h:mm aa"
            name="datetimefield"
            selected={date}
            onChange={(date) => setDate(date)}
            showTimeSelect
          />
          <div>
            <textarea
              className="notes"
              placeholder="Notes: "
              onChange={(e) => setNotes(e.target.value)}
            />
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
    height: 6em;
    width: 30em;
    outline: none;
    border-radius: 8px;
    padding-left: 0.5em;
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
