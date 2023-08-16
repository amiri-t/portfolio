import React from "react";
import styled from "styled-components";
import Banner from "../components/homePageComponents/Banner";

const Home = () => {
  return (
    <Container>
      <Banner />
    </Container>
  );
};
const Container = styled.div`
  color: var(--fontPrimaryColor);
`;

export default Home;
