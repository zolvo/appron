import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
const ChefAppointment = ({ user, chef }) => {
  const [appointment, setAppointment] = useState({});

  const { chefId } = useParams();

  useEffect(() => {
    document.title = "Appron: Appointment";
    if (!chefId) {
      return;
    }
    (async () => {
      const res = await fetch(`/api/chefs/${chefId}/appointment`);
      const appointment = await res.json();
      setAppointment(appointment);
    })();
  }, [chefId]);

  // console.log(chef);
  return (
    <Container>
      <AppointmentList>
        {appointment.appointment &&
          appointment.appointment.map((app, i) => (
            <div key={i}>
              <div className="title">
                <div>{app.date}</div>
                <div>
                  <NavLink to={`/users/${app.user_id}`} className="link">
                    {app.user}
                  </NavLink>
                </div>
              </div>
              <div className="list">{app.notes}</div>
              <div>
                ______________________________________________________________________________
              </div>
            </div>
          ))}
      </AppointmentList>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  box-sizing: border-box;
  padding: 1em;
  border-radius: 0.5em;
  background-color: #444;
`;

const AppointmentList = styled.div`
  .title {
    padding-top: 1em;
    padding-bottom: 0.5em;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-family: dancing-script;
  }

  .list {
    padding-bottom: 1em;
    font-family: monserrat;
    padding-bottom: 2em;
    font-size: 15px;
  }

  .link {
    text-transform: upperCase;
    color: #ffbc42;
  }
`;

export default ChefAppointment;
