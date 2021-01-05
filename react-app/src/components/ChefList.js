import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ChefsList() {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/chefs/");
      const responseData = await response.json();
      setChefs(responseData.chefs);
    }
    fetchData();
  }, []);

  const chefComponents = chefs.map((chef) => {
    return (
      <li key={chef.id}>
        <NavLink to={`/chef/${chef.id}`}>{chef.username}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>Chef List: </h1>
      <ul>{chefComponents}</ul>
    </>
  );
}

export default ChefsList;
