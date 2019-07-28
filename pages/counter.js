import React from "react";
import Counter from "../components/Counter";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default function CounterPage() {
  return (
    <Container>
      <Counter />
    </Container>
  );
}