import styled from "styled-components";
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

const header = (
  <Header>
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
