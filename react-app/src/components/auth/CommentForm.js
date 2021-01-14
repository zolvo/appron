import React, { useState } from "react";
import styled from "styled-components";

const CommentForm = (user) => {
    const [comment, setComments] = useState("");
    const [chef, setChef] = useState({});


console.log(chef)
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
      <form onSubmit={createComment}>
        <textarea
          className="text"
          placeholder="leave a review"
          onChange={(e) => setComments(e.target.value)}
        />
      </form>
    </Container>
  );
};

const Container = styled.div``;

export default CommentForm;
