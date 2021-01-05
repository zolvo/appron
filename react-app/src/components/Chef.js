import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Chef() {
  const [chef, setChef] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
  const { chefId } = useParams();

  useEffect(() => {
    if (!chefId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/chefs/${chefId}`);
      const user = await response.json();
      setChef(chef);
    })();
  }, [chefId]);

  if (!chef) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>Chef Id</strong> {chefId}
      </li>
      <li>
        <strong>Username</strong> {chef.username}
      </li>
      <li>
        <strong>Email</strong> {chef.email}
      </li>
      <li>
        <strong>Address</strong> {chef.address}
      </li>
      <li>
        <strong>City</strong> {chef.city}
      </li>
      <li>
        <strong>State</strong> {chef.state}
      </li>
      <li>
        <strong>ZipCode</strong> {chef.zipcode}
      </li>
      <li>
        <strong>Phone</strong> {chef.phone}
      </li>
      <li>
        <strong>About</strong> {chef.about}
      </li>
      <li>
        <strong>Service</strong> {chef.service}
      </li>
      <li>
        <strong>Menu</strong> {chef.menu}
      </li>
      <li>
        <strong>Pricing</strong> {chef.pricing}
      </li>
      <li>
        <strong>Available</strong> {chef.available}
      </li>
    </ul>
  );
}
export default Chef;
