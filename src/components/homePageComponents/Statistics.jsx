import React from "react";
import styled from "styled-components";

const Statistics = () => {
  return (
    <Container>
      <p>50+ Projects</p>
      <p>30+ Satistied Clients</p>
      <p>4 Years of Experience</p>
    </Container>
  );
};
const Container = styled.div`
  padding: 0em 4%;
  color: var(--fontPrimaryColor);
  background: var(--primaryBackgroundColor);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7%;
  @media (max-width: 560px) {
    flex-direction: column;
    gap: 1em;
  }
`;

export default Statistics;
