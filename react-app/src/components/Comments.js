import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

function Comments({ user, chef }) {
  return (
    <div>
      <CommentBox>
        {chef.comment.map((comm, i) => (
          <div key={i}>
            <Box1>
              <div>" {comm.user} " says:</div>
              <div className="stars">
                {comm.stars}
                <FaStar size={15} color={"fd4 "} />
                rating
              </div>
              <div>{comm.createdAt}</div>
            </Box1>
            <Review>{comm.comment}</Review>
          </div>
        ))}
      </CommentBox>
    </div>
  );
}

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
  margin-bottom: 10px;
  font-size: 13px;
  font-family: dosis;
  font-weight: 600;

  .stars {
    display: flex;
    align-items: center;
  }
`;

const Review = styled.div`
  padding-bottom: 3em;
  font-size: 15px;
`;
export default Comments;
