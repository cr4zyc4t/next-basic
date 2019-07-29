import React from "react";
import styled from "styled-components";

const ControlBtn = styled.button`
  margin: 8px;
`;

export default function Counter({ counterIncrease, counterDecrease, counter }) {
  return (
    <div>
      <ControlBtn className="btn btn-danger" onClick={counterDecrease}>Decrease</ControlBtn>
      {counter}
      <ControlBtn className="btn btn-success" onClick={counterIncrease}>Increase</ControlBtn>
    </div>
  );
}