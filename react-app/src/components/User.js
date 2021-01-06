import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [user, setUser] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      <li>
        <strong>Address</strong> {user.address}
      </li>
      <li>
        <strong>City</strong> {user.city}
      </li>
      <li>
        <strong>State</strong> {user.state}
      </li>
      <li>
        <strong>ZipCode</strong> {user.zipcode}
      </li>
      <li>
        <strong>Phone</strong> {user.phone}
      </li>
    </ul>
  );
}
export default User;
