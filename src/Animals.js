import { useState } from "react";

function Animal() {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of animal is : {count}</div>
    </div>
  );
}

export default Animal;
