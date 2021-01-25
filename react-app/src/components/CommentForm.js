import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

// import "./CommentForm.css";
import { useHistory, useParams } from "react-router-dom";

const CommentForm = ({ user, chef }) => {
  const [comment, setComments] = useState("");
  // const [stars, setStars] = useState();
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(null);

  const { chefId } = useParams();
  const history = useHistory();
  // console.log("************************** :", chefId )

  const createComment = async (e) => {
    e.preventDefault();
    // console.log("HERE *****************: ", user.id);
    const res = await fetch(`/api/chefs/${chefId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        chef_id: chefId,
        stars: rating,
        comment,
      }),
    });
    if (res.ok) {
      // const data = await res.json();
      history.push(`/chefs/${chefId}`)
    }
  };
  // console.log(chef)
  if (!user && !chef) {
    return null;
  }

  return (
    <Container>
      <CommentBox>
        <Body>
          {chef.comment.map((comm) => (
            <div>
              <Box1>
                <User>UserId {comm.user_id} says:</User>
                <Stars>
                  {comm.stars}
                  <FaStar size={15} color={"fd4 "} /> rating
                </Stars>
                <Date>{comm.createdAt}</Date>
              </Box1>
              <Review>{comm.comment}</Review>
            </div>
          ))}
        </Body>
      </CommentBox>
      <RatingIcon>
        <div>Leave a Rating:</div>

        <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={ratingValue <= (hover || rating) ? "#fd4" : "#777"}
                  size={18}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
      </RatingIcon>
      <form onSubmit={createComment}>
        <textarea
          name="comment"
          className="text"
          placeholder="leave a review"
          onChange={(e) => setComments(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  cursor: default;

  button {
    box-sizing: border-box;
    width: 30em;
    height: 2em;
    margin-top: -25px;
    margin-left: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1em;
    background-color: #ffbc42;

    font-weight: 700;
    cursor: pointer;
    outline: none;
    border: none;

    :hover {
      background-color: #f4b13d;
    }
  }

  .text {
    color: red;
  }
`;

const RatingIcon = styled.div`
  font-family: dosis;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2em;

  input {
    display: none;
  }
  .star {
    cursor: pointer;
    transition: color 200ms;
    padding: 3px;
    margin-top: 0.5em;
  }
`;

const CommentBox = styled.div`
  padding: 1em;
  margin-top: 2em;
  box-sizing: border-box;
  width: 27em;
  display: flex;
  flex-direction: column;
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: -10px;
`;

const User = styled.div`
  margin-bottom: 1em;
`;
const Body = styled.div``;
const Date = styled.div`
  margin-bottom: 1em;
`;
const Stars = styled.div`
  margin-bottom: 1em;
  display: flex;
  align-items: center;
`;

const Review = styled.div`
  padding-bottom: 3em;
`;

export default CommentForm;
