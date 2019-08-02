import React from "react";
import Counter from "../components/Counter";
import styled from "styled-components";
import WithRedux from "layouts/with-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default function CounterPage() {
  return (
    <WithRedux>
      <Container>
        <Counter />
      </Container>
    </WithRedux>
  );
}