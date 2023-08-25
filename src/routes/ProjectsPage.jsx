import React from "react";
import styled from "styled-components";
import ProjectsBanner from "../components/projectsPageComponents/ProjectsBanner";

const ProjectsPage = () => {
  return (
    <Container>
      <ProjectsBanner />
    </Container>
  );
};
const Container = styled.div`
  padding: 4em 0%;
  background: var(--primaryBackgroundColor);
  color: var(--fontPrimaryColor);
`;

export default ProjectsPage;
