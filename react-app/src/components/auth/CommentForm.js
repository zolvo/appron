import React, { useState } from "react";
import styled from "styled-components";
import Comment from "../Comment";
import "./CommentForm.css";
import { useParams } from "react-router-dom";

const CommentForm = ({ user, chef }) => {
  const [comment, setComments] = useState("");
  const [stars, setStars] = useState();
  // const [chef, setChef] = useState({});

  const { id } = useParams();

  // console.log(chef);
  const createComment = async (e) => {
    e.preventDefault();
    const res = await fetch(`api/chef/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        chef_id: id,
        stars,
        comment,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      // history.push(`/chef/${chef.id}`)
    }
  };

  const rate5 = () => {};
  const rate4 = () => {};
  const rate3 = () => {};
  const rate2 = () => {};
  const rate1 = () => {};


  return (
    <Container>
      <Comment user={user} chef={chef}/>
      <RatingIcon>
        <div>Leave a Rating:</div>
        <div className="star-widget">
          <input type="radio" name="rate" id="rate-5" onClick={rate5} />
          <label htmlFor="rate-5" className="fas fa-star" />
          <input type="radio" name="rate" id="rate-4" onClick={rate4} />
          <label htmlFor="rate-4" className="fas fa-star" />
          <input type="radio" name="rate" id="rate-3" onClick={rate3} />
          <label htmlFor="rate-3" className="fas fa-star" />
          <input type="radio" name="rate" id="rate-2" onClick={rate2} />
          <label htmlFor="rate-2" className="fas fa-star" />
          <input type="radio" name="rate" id="rate-1" onClick={rate1} />
          <label htmlFor="rate-1" className="fas fa-star" />
        </div>
      </RatingIcon>
      <form onSubmit={createComment}>
        <textarea
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
`;

export default CommentForm;
