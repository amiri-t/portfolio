import React, { useEffect } from "react";
import styled from "styled-components";
import Banner from "../components/homePageComponents/Banner";
import Statistics from "../components/homePageComponents/Statistics";
import MyServices from "../components/homePageComponents/MyServices";
import ProgrammingLanguages from "../components/homePageComponents/ProgrammingLanguages";
import UIServices from "../components/homePageComponents/UIServices";
import Skills from "../components/homePageComponents/Skills";
import Projects from "../components/homePageComponents/Projects";
import Testimonials from "../components/homePageComponents/Testimonials";
import ContactMe from "../components/homePageComponents/ContactMe";
import WhyHireMe from "../components/homePageComponents/WhyHireMe";
import FAQ from "../components/homePageComponents/FAQ";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Banner />
      <Statistics />
      <MyServices />
      <Skills />
      <WhyHireMe />
      <Projects />
      <ProgrammingLanguages />
      <UIServices />
      <FAQ />
      <Testimonials />
      <ContactMe />
    </Container>
  );
};
const Container = styled.div`
  color: var(--fontPrimaryColor);
  transition: 0.4s;
`;

export default Home;
