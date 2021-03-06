import React, { useEffect, useState } from "react";
import { chefform } from "../../services/auth";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ChefForm = ({ user }) => {
  const [errors, setErrors] = useState([]);
  const [about, setAbout] = useState("");
  const [service, setService] = useState("");
  const [menu, setMenu] = useState("");
  const [pricing, setPricing] = useState("");
  const [available, setAvailable] = useState(true);

  const history = useHistory();

  useEffect(() => {
    document.title = "Appron: ChefForm";
  }, []);

  const chefForm = async (e) => {
    e.preventDefault();
    const chef = await chefform(
      user.id,
      about,
      service,
      menu,
      pricing,
      available
    );

    if (!chef.errors) {
      history.push("/");
    } else setErrors(chef.errors);
  };

  return (
    <Container>
      <SignupHeader>CHEF FORM</SignupHeader>
      <SignupFormWrapper>
        <form onSubmit={chefForm}>
          <Error>
            <div>
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
          </Error>

          <About>
            <textarea
              className="about"
              name="about"
              placeholder="About"
              onChange={(e) => setAbout(e.target.value)}
              value={about}
            />
          </About>
          <div>
            <Service>
              <textarea
                className="service"
                name="service"
                placeholder="Service"
                onChange={(e) => setService(e.target.value)}
                value={service}
              />
            </Service>
          </div>
          <div>
            <Menu>
              <textarea
                className="menu"
                name="manu"
                placeholder="Menu"
                onChange={(e) => setMenu(e.target.value)}
                value={menu}
              />
            </Menu>
          </div>
          <div>
            <Pricing>
              <textarea
                className="pricing"
                name="pricing"
                placeholder="Pricing"
                onChange={(e) => setPricing(e.target.value)}
                value={pricing}
              />
            </Pricing>
          </div>
          <Available>
            <input
              type="checkbox"
              onChange={(e) => setAvailable(e.target.checked)}
              checked={available}
              className="available"
            />
            <span>ARE YOU AVAILABLE?</span>
          </Available>
          <div>
            <button type="submit">Sign Up Chef</button>
          </div>
          <Footer>
            <p>@2020 created by: APPRON.</p>
          </Footer>
        </form>
      </SignupFormWrapper>
    </Container>
  );
};

const Container = styled.div`
  font-family: montserrat;
  font-size: 16px;
  color: white;
  background-color: #d81159;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 88.7vh;
  padding-bottom: 3em;
`;

const SignupHeader = styled.div`
  margin-top: 3.8em;
  font-weight: 600;
  height: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignupFormWrapper = styled.div`
  background-color: #f4f3f2;
  // padding-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;

  border-radius: 25px;

  div {
    margin-bottom:30px;
    text-decoration: none;
    // box-shadow:0px 14px 9px -15px rgba(0,0,0,0.25);
  }

  textarea {
    border-radius: 0.8em;
    padding: 0.5em;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    color: grey;
  }

  // input {
  //   border: none;
  //   outline: none;
  //   width: 18em;
  //   height: 3em;
  //   padding-left: 1em;
  //   border-radius: 1em;

    // transition: all 0.2x ease-in;
    // &:hover {
    //   transform: translateY(-3px);
    // };

  }

  button{
    // background-color: #EF9D55;
    background-color: #ffbc42;
    font-weight: 700;
    border: none;
    width: 18em;
    height: 3em;
    cursor: pointer;
    border-radius: 2em;
    box-shadow:0px 14px 9px -15px rgba(0,0,0,0.25);
    outline:none;
    border:none;

    transition: all 0.2x ease-in;
    &:hover{
    transform: translateY(-3px);
  }
`;

const About = styled.div`
  // padding-top: 1em;
  .about {
    box-sizing: border-box;
    // border: 1px solid red;
    height: 120px;
    width: 250px;
  }
`;

const Service = styled.div`
  .service {
    box-sizing: border-box;
    // border: 1px solid red;
    height: 100px;
    width: 250px;
  }
`;
const Menu = styled.div`
  .menu {
    box-sizing: border-box;
    // border: 1px solid red;
    height: 90px;
    width: 250px;
  }
`;
const Pricing = styled.div`
  .pricing {
    box-sizing: border-box;
    // border: 1px solid red;
    height: 50px;
    width: 250px;
  }
`;

const Available = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    width: 10em;
    heigth: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // margin-left: 2em;
    font-family: dosis;
    font-size: 16px;
    color: grey;
    // letter-spacing: 0.02em;
  }

  .available {
    width: 1em;
    margin-right: 1em;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: 30px;
    color: #292721;
  }

  span {
    margin-left: 5px;
    font-weight: 700;
    color: #ef9d55;
  }

  p {
    font-size: 10px;
    color: #292721;
  }
`;

const Error = styled.div`
  box-sizing: border-box;
  padding-top: 1.5em;
  // padding-bottom: 1em;

  div {
    box-sizing: border-box;
    margin-bottom: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: montserrat;
    font-size: 14px;
    font-weight: 600;
    color: red;
    margin: 0;
  }
`;

export default ChefForm;
