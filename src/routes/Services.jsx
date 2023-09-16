import React, { useEffect } from "react";
import styled from "styled-components";
import ServicesBanner from "../components/servicesComponents/ServicesBanner";
import TheServices from "../components/servicesComponents/TheServices";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title = "Amir Tahiri - Services | Portfolio";
  }, []);
  return (
    <Container>
      <ServicesBanner />
      <TheServices />
    </Container>
  );
};
const Container = styled.div`
  color: var(--fontPrimaryColor);
  transition: 0.4s;
`;

export default Services;
