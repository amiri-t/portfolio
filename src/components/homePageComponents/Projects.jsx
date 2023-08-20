import React from "react";
import styled from "styled-components";
import asites from "../../assets/homePageAssets/ASites Agency.png";
import travelo from "../../assets/homePageAssets/Travelo.png";
import theTastyTable from "../../assets/homePageAssets/The Tasty Table.png";

const Projects = () => {
  return (
    <Container>
      <div className="title">
        <h1>My Projects</h1>
        <p>Exploring a Selection of My Diverse Creations</p>
      </div>
      <div className="projects">
        <div className="project">
          <img src={asites} alt="" />
          <h3>ASites Agency</h3>
          <p>
            Cultivating ASites Agency, I orchestrated a contemporary platform.
            Merging design prowess with advanced authentication, I constructed a
            polished, modern website for unparalleled digital experiences.
          </p>
        </div>
        <div className="project">
          <img src={travelo} alt="" />
          <h3>Travelo</h3>
          <p>
            With creative zeal, I fashioned a dynamic Travel Agency website,
            seamlessly blending design finesse with powerful functionality,
            delivering an immersive user experience and effortless navigation.
          </p>
        </div>
        <div className="project">
          <img src={theTastyTable} alt="" />
          <h3>The Tasty Table</h3>
          <p>
            With culinary flair, I curated The Tasty Table's online presence.
            Combining exquisite design and seamless functionality, I crafted a
            restaurant website that whets appetites and delights patrons.
          </p>
        </div>
      </div>
      <h4>See All...</h4>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 2%;
  background: var(--primaryBackgroundColor);
  .title {
    text-align: center;
    h1 {
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: "Comfortaa", cursive;
      font-weight: 600;
    }
    p {
      width: 60%;
      margin: auto;
      margin-top: 1em;
      color: var(--fontSecondaryColor);
      font-weight: 300;
    }
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    margin-top: 2em;
    .project {
      width: 380px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      img {
        width: 100%;
        box-shadow: 12px 12px 19px var(--shadowColor1),
          -12px -12px 19px var(--shadowColor2);
        transition: 0.4s;
        :hover {
          transform: scale(1.04);
        }
      }
      h3 {
        margin-top: 1.4em;
        font-weight: 600;
        font-family: "Comfortaa", cursive;
        color: var(--fontPrimaryColor);
      }
      p {
        padding: 10px;
        text-align: center;
        color: var(--fontPrimaryColor);
        font-weight: 200;
        font-size: 15px;
      }
    }
  }
  h4 {
    text-align: right;
    margin-right: 7%;
    margin-top: 2em;
    font-weight: 400;
    font-family: "Comfortaa", cursive;
    cursor: pointer;
    color: var(--fontSecondaryColor);
    :hover {
      color: var(--fontPrimaryColor);
    }
  }
  @media (max-width: 810px) {
    .projects {
      .project {
        width: 80%;
      }
    }
  }
  @media (max-width: 810px) {
    .projects {
      .project {
        width: 93%;
      }
    }
  }
`;

export default Projects;
