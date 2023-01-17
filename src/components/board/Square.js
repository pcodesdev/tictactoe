import React from "react";

function Square({ value, onSquareClick }) {
  //   const [value, setValue] = useState(null);
  //   function handleClick() {
  //     setValue(<GiSkullCrossedBones />);
  //   }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
