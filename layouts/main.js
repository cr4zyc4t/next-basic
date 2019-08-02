import styled, { createGlobalStyle } from "styled-components";
import Navbar from "../components/NavBar";
import Head from "next/head";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

const ContentWrapper = styled.div`
  padding: 15px;
  margin: 15px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  flex: 1;
  overflow: auto;
`;

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

const header = (
  <Header>
    <GlobalStyle />
    <Head>
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="/static/css/bootstrap.min.css"></link>
    </Head>
    <Navbar />
  </Header>
);

function MainLayout({ children }) {
  return (
    <Container>
      {header}
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Container>
  );
}

export default MainLayout;
