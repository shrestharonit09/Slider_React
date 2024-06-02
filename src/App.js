import React from "react";
import Motion from "./components/Motions";
import Practice from "./components/Practice";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
      <Slider />
      <Practice />
      <Motion/>
    </div>
  );
};

export default App;
