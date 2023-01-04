import bird from "./Images/bird.svg";
import cat from "./Images/cat.svg";
import cow from "./Images/cow.svg";
import dog from "./Images/dog.svg";
import heart from "./Images/heart.svg";
import horse from "./Images/horse.svg";
import gator from "./Images/gator.svg";
import { useState } from "react";
import "./Animals.css";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  horse,
  gator,
};

function Animal({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]}></img>
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{
          width: 10 + 10 * clicks + "px",
        }}
      ></img>
    </div>
  );
}

export default Animal;
