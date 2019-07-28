import React from "react";

export default function Counter({ counterIncrease, counterDecrease, counter }) {
  return (
    <div>
      <button className="btn btn-danger control-btn" onClick={counterDecrease}>Decrease</button>
      {counter}
      <button className="btn btn-success control-btn" onClick={counterIncrease}>Increase</button>
      <style jsx>
        {`
        .control-btn {
          margin: 8px;
        }
      `}
      </style>
    </div>
  );
}