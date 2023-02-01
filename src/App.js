import React from "react";
import LeftBar from "./component/LeftBar";
import Main from "./component/Main";
import RightBar from "./component/RightBar";

const App = () => {
  return (
    <div className="App flex">
      <LeftBar />
      <Main />
      <RightBar />
    </div>
  );
};

export default App;
