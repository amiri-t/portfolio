import React from "react";
import styled from "styled-components";
import ServicesBanner from "../components/servicesComponents/ServicesBanner";

const Services = () => {
  return (
    <Container>
      <ServicesBanner />
    </Container>
  );
};
const Container = styled.div`
  color: var(--fontPrimaryColor);
  transition: 0.4s;
`;

export default Services;
