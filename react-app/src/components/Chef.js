import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import bg from "../image/bg.jpg";

function Chef() {
  const [chef, setChef] = useState("");
  // const [userId, setUserId] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);
  // const [Likes, setLikes] = useState([]);
  // const [rating, setRating] = useState([]);
  const history = useHistory();

  // Notice we use useParams here instead of getting the params
  // From props.
  const { chefId } = useParams();

  useEffect(() => {
    document.title = "Appron: Chef";
    if (!chefId) {
      return;
    }
    (async () => {
      const res = await fetch(`/api/chefs/${chefId}`);
      const chef = await res.json();
      setChef(chef);
    })();
  }, [chefId]);

  if (!chef) {
    return null;
  }

  const handleClick = () => {
    history.push(`/chefs/${chefId}/appointment`);
  };

  const toggleReview = () => {
    if (!currentUser) history.push("/login");
    setShowReviews(!showReviews);
    const hideMe = () => {
      let text = document.getElementById("review-chef");
      text.classList.toggle("hide");
    };
  };

  return (
    <Container>
      <ChefWrapper>
        <Title>Chef Profile</Title>
        <ul className="body">
          <li>
            <strong>Chef Name: </strong> {chef.user.username}
          </li>
          <li>
            <strong>Email:</strong> {chef.user.email}
          </li>
          <li>
            <strong>Address:</strong> {chef.user.address}
          </li>
          <li>
            <strong>City:</strong> {chef.user.city}
          </li>
          <li>
            <strong>State:</strong> {chef.user.state}
          </li>
          <li>
            <strong>ZipCode:</strong> {chef.user.zipcode}
          </li>
          <li>
            <strong>Phone:</strong> {chef.user.phone}
          </li>
          <li>
            <strong>About:</strong> {chef.about}
          </li>
          <li>
            <strong>Service:</strong> {chef.service}
          </li>
          <li>
            <strong>Menu:</strong> {chef.menu}
          </li>
          <li>
            <strong>Pricing:</strong> {chef.pricing}
          </li>
          <li>
            <strong>Available:</strong> {chef.available}
          </li>
        </ul>
        <Box1>
          <RatingIcon>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa  fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </RatingIcon>
          <TotalLikeIcon>
            <i className="far fa-heart"></i>
            <span>{reviews.length}</span>
          </TotalLikeIcon>
        </Box1>
        <button className="appointment" onClick={handleClick}>
          Make an Appointment
        </button>
        <Box2>
          <LikeIcon>
            <i className="far fa-heart"></i>
            <span>{reviews.length}</span>
          </LikeIcon>
          <ReviewIcon>
            <i className="far fa-comments" onClick={toggleReview}>
              <span>{reviews.length}</span>
            </i>
          </ReviewIcon>
        </Box2>
      </ChefWrapper>
    </Container>
  );
}

const Container = styled.div`
// background-color: #d81159;
color: grey;
min-height: 100vh;
display:flex;
justify-content:center;
background-image: url(${bg});
background-repeat: no-repeat;
background-size: center;
background-position: 90% 50%;

li {
  list-style: none;
  padding: 0.1em;
}

.body {
  color: black;
  text-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
}

.appointment{
  box-sizing:border-box;
  margin-top: 3em;
  // margin-left: 4em;
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

const ChefWrapper = styled.div`
  margin-top: 8em;
  box-sizing: border-box;
  border: 1px solid white;
  background-color: #f4f3f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  width: 500px;
  // height: 600px;
  margin-bottom: 1em;
  padding-right: 1em;
  border-radius: 25px;
`;

const Title = styled.div`
  margin-bottom: 2em;
  padding-top: 2em;
  text-align: center;
  font-family: monserrat;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Box1 = styled.div`
  margin-top: 2em;
  // margin-left: 5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-item: center;
  // border: 1px solid white;
  width: 10em;

  span {
    margin-left: 0.5em;
  }
`;

const Box2 = styled.div`
  margin-top: 2em;
  // margin-left: 5em;
  display: flex;
  justify-content: space-between;
  align-item: center;
  // border: 1px solid white;
  width: 10em;

  span {
    margin-left: 0.5em;
  }
`;
const RatingIcon = styled.div`
  color: #ef9d55;
`;

const TotalLikeIcon = styled.div`
  .far {
    color: red;
  }
`;

const LikeIcon = styled.div`
  .far {
    color: red;
  }
`;

const ReviewIcon = styled.div``;

export default Chef;
