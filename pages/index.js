import React from "react";
import styled, { keyframes } from "styled-components";
import Head from "next/head";

const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LogoContainer = styled.div`
  height: 50vmin;
  width: 50vmin;
  background-color: #282c34;
  border-radius: 25vmin;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Next Basic App - Home Page</title>
      </Head>
      <header className="App-header">
        <LogoContainer>
          <Logo src="/static/images/logo.svg" alt="logo" />
        </LogoContainer>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
      </header>
    </Container>
  );
}