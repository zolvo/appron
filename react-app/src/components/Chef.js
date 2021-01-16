import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import bg from "../image/bg.jpg";
import CommentForm from "./CommentForm";
// import Comment from "./Comment";

function Chef(user) {
  const [chef, setChef] = useState("");
  // const [currentUser, setCurrentUser] = useState("");
  const [comment, setComment] = useState("");
  const [showReviews, setShowReviews] = useState(false);
  const [likes, setLikes] = useState(false);
  const [count, setCount] = useState(0);
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
      // setCurrentUser(user);
    })();
  }, [chefId]);

  if (!chef) {
    return null;
  }

  const handleClick = () => {
    history.push(`/chefs/${chefId}/appointment`);
  };

  const toggleReview = () => {
    if (!user) history.push("/login");
    setShowReviews(!showReviews);
  };

  const handleLike = () => {
    if (!count) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }

    setLikes(!likes);
  };
// console.log(chef)
  return (
    <Container>
      <ChefWrapper>
        <Title>Chef Profile</Title>
        <ul className="body">
          <li>
            <strong>Chef Name: </strong> {chef.chef.user.username}
          </li>
          <li>
            <strong>Email:</strong> {chef.chef.user.email}
          </li>
          <li>
            <strong>Address:</strong> {chef.chef.user.address}
          </li>
          <li>
            <strong>City:</strong> {chef.chef.user.city}
          </li>
          <li>
            <strong>State:</strong> {chef.chef.user.state}
          </li>
          <li>
            <strong>ZipCode:</strong> {chef.chef.user.zipcode}
          </li>
          <li>
            <strong>Phone:</strong> {chef.chef.user.phone}
          </li>
          <li>
            <strong>About:</strong> {chef.chef.about}
          </li>
          <li>
            <strong>Service:</strong> {chef.chef.service}
          </li>
          <li>
            <strong>Menu:</strong> {chef.chef.menu}
          </li>
          <li>
            <strong>Pricing:</strong> {chef.chef.pricing}
          </li>
          <li>
            <strong>Available:</strong> {chef.chef.available ? "Yes" : "No"}
          </li>
        </ul>
        {/* <Box1>
          <RatingIcon>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa  fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </RatingIcon>
          <TotalLikeIcon>
            <i className="far fa-heart icon" />
            <span>{likes.length}</span>
          </TotalLikeIcon>
        </Box1> */}
        <button className="appointment" onClick={handleClick}>
          Make an Appointment
        </button>
        <Box2>
          <LikeIcon>
            <span className="red" onClick={handleLike}>
              {likes ? (
                <i className="fas fa-heart" />
              ) : (
                <i className="far fa-heart icon" />
              )}
            </span>
            <span>{count}</span>
          </LikeIcon>
          <ReviewIcon>
            <i className="far fa-comments icon" onClick={toggleReview} />
            <span>{comment.length}</span>
          </ReviewIcon>
        </Box2>
        <Box3>
          {showReviews && (
            // <textarea
            //   className="text"
            //   placeholder="leave a review"
            //   onClick={(e) => setReviews(e.target.value)}
            // />
            <CommentForm user={user} chef={chef}/>
          )}
        </Box3>
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
  cursor: pointer;
  box-sizing:border-box;
  margin-top: 3em;
  // margin-left: 4em;
  background-color: #ffbc42;
  font-weight: 700;
  width: 18em;
  height: 3em;
  border-radius: 2em;

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
  margin-bottom: 3em;
  padding-right: 1em;
  border-radius: 25px;
`;

const Title = styled.div`
  margin-bottom: 2em;
  margin-top: 3em;
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

  .icon {
    cursor: pointer;

    transition: all 0.2x ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LikeIcon = styled.div`
  .red {
    color: red;
  }
`;

const ReviewIcon = styled.div``;

const Box3 = styled.div`
  // margin-top: 3em;
  margin-bottom: 3em;
  transition: all 0.2x ease-in;
  cursor: pointer;

  .text {
    outline: none;
    font-family: dosis;
    letter-spacing: 0.5px;
    box-sizing: border-box;
    // border: 1px solid red;
    margin-top: 2em;
    background-color: lightgrey;
    height: 10em;
    width: 30em;
    padding: 0.8em;
    border-radius: 1em;
    margin-bottom: 2em;
    margin-left: 1.5em;
  }
`;

export default Chef;
