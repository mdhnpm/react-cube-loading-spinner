import React from "react";
import { CubeLoadingSpinner } from "./CubeLoadingSpinner";

const App = () => (
  <div style={{ margin: "100px 100px" }}>
    <CubeLoadingSpinner
      mainColor="black"
      secondaryColor="gray"
      spinnerInnerHeight={9}
      spinnerSpeed={1.5}
    />
  </div>
);

export default App;
