import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Comment({ user }) {
  return (
    <Container>
      {/* {comment.map((comment, i) => (
        <div className="comment-box" claskey={i}>
          <p className="comment-maker">{user.username} says:</p>
          <div>{(comment.comment)}</div>
        </div>
      ))} */}
      <Box1>
        <User>{user.user.username} says:</User>
        <Stars></Stars>
        <Date></Date>
      </Box1>
      <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum
        lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh at
        nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero,
        at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus
        bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras
        pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum
        metus, non dictum mauris. Nulla at tellus sagittis, viverra est a,
        bibendum metus.
      </Body>
    </Container>
  );
}

const Container = styled.div`
  padding: 1em;
  margin-top: 2em;
  box-sizing: border-box;
  width: 27em;
  display: flex;
  flex-direction: column;
`;

const Box1 = styled.div``;

const User = styled.div`
  margin-bottom: 1em;
`;
const Body = styled.div``;
const Date = styled.div``;
const Stars = styled.div``;

export default Comment;
