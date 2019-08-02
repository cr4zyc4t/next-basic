import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import MainLayout from "../layouts/main";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const head = (
  <>
    <GlobalStyle />
    <Head >
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="/static/css/bootstrap.min.css"></link>
    </Head>
  </>
);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {head}
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Container>
    );
  }

}

export default MyApp;