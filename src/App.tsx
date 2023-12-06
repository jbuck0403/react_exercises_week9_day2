import { useState } from "react";
import LikeButton from "./components/LikeButton/LikeButton";
import User from "./components/User/User";

import "./App.css";

function App() {
  return (
    <>
      <div className="tweet">
        <img src="./src/img/sampletweet.png"></img>
        <LikeButton />
      </div>
      <div className="game">
        <User />
      </div>
    </>
  );
}

export default App;
