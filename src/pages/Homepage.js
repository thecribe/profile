import React from "react";

import { useOutletContext } from "react-router-dom";

const Homepage = () => {
  const { mode, themeSwitchHandler } = useOutletContext();

  console.log(mode);
  return (
    <>
      <button onClick={() => themeSwitchHandler(mode)}>
        {mode ? "true" : "false"}
      </button>
    </>
  );
};

export default Homepage;
