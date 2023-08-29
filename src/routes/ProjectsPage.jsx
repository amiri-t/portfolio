import React, { useEffect } from "react";
import styled from "styled-components";
import ProjectsBanner from "../components/projectsPageComponents/ProjectsBanner";
import TheProjects from "../components/projectsPageComponents/TheProjects";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <ProjectsBanner />
      <p className="note">
        *These are just some of my websites I have created. <br /> I can't show
        other ones because the clinets didn't want their websites to she shown
        to other websites.
      </p>
      <TheProjects />
    </Container>
  );
};
const Container = styled.div`
  padding: 4em 0%;
  background: var(--primaryBackgroundColor);
  color: var(--fontPrimaryColor);
  p {
    width: 100%;
    text-align: center;
    color: var(--fontSecondaryColor);
    font-weight: 300;
  }
`;

export default ProjectsPage;
