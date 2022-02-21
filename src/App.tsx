import React from "react";
import { CubeLoadingSpinner } from "./CubeLoadingSpinner";

const App = () => (
  <div style={{ margin: "100px 100px" }}>
    <CubeLoadingSpinner
      mainColor="black"
      secondaryColor="gray"
      spinnerWidth="28px"
      spinnerSpeed="1.5s"
    />
  </div>
);

export default App;
