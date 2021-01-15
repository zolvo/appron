import React, { useState } from "react";
import styled from "styled-components";
import Comment from "../Comment";
import "./CommentForm.css";

const CommentForm = (user) => {
  const [comment, setComments] = useState("");
  const [chef, setChef] = useState({});

  console.log(chef);
  const createComment = async (e) => {
    e.preventDefault();
    const res = await fetch(`api/chef/${chef.id}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // chef_id,
        // user_id,
        // comment,
        // createdAt,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      // history.push(`/chef/${chef.id}`)
    }
  };

  return (
    <Container>
      <Comment/>
      <RatingIcon>
        <div className="star-widget">
          <input type="radio" name="rate" id="rate-5" />
          <label htmlFor="rate-5" className="fas fa-star" />
          <input type="radio" name="rate" id="rate-4" />
          <label htmlFor="rate-4" className="fas fa-star" />
          <input type="radio" name="rate" id="rate-3" />
          <label htmlFor="rate-3" className="fas fa-star" />
          <input type="radio" name="rate" id="rate-2" />
          <label htmlFor="rate-2" className="fas fa-star" />
          <input type="radio" name="rate" id="rate-1" />
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
    box-sizing:border-box;
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
  display: flex;
  justify-content: center;
  padding-top: 2em;

`;

export default CommentForm;
