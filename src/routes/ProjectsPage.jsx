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
      <TheProjects />
    </Container>
  );
};
const Container = styled.div`
  padding: 4em 0%;
  background: var(--primaryBackgroundColor);
  color: var(--fontPrimaryColor);
`;

export default ProjectsPage;
