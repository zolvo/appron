import React from "react";
import { demo_chef } from "../../services/auth";

const DemoChefButton = ({ setAuthenticated, authenticate }) => {
  const democlick = async (e) => {
    await demo_chef();
    setAuthenticated(true);
    window.location.reload(false);
  };

  return authenticate ? (
    ""
  ) : (
    <button className="demo_chef_button" onClick={democlick}>
      Demo User
    </button>
  );
};

export default DemoChefButton;
