import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/projectsPageAssets/projectsBannerImg2.png";

const ProjectsBanner = () => {
  return (
    <Container>
      <div className="left">
        <h1>
          Showcasing Projects Redefining Design and Development Excellence.
        </h1>
        <p>Exploring the Fusion of Creativity and Technology</p>
      </div>
      <img className="bannerImg" src={bannerImg} alt="" />
    </Container>
  );
};
const Container = styled.div`
  padding: 2em 7%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  background: var(--backgroundGradient2);
  .bannerImg {
    width: 50%;
    max-width: 600px;
  }
  .left {
    h1 {
      font-size: 3em;
      font-weight: 500;
      font-family: "Montserrat", cursive;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      color: var(--fontSecondaryColor);
    }
  }
  @media (max-width: 1150px) {
    padding: 2em 4%;
  }
  @media (max-width: 1040px) {
    .left {
      h1 {
        font-size: 2.7em;
      }
    }
    .bannerImg {
      width: 47%;
    }
  }
  @media (max-width: 888px) {
    .left {
      h1 {
        font-size: 2.3em;
      }
    }
    .bannerImg {
      width: 43%;
    }
  }
  @media (max-width: 707px) {
    flex-direction: column-reverse;
    .left {
      h1 {
        font-size: 2em;
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
    .bannerImg {
      width: 70%;
    }
  }
  @media (max-width: 400px) {
    .left {
      h1 {
        font-size: 1.4em;
      }
    }
    .bannerImg {
      width: 90%;
    }
  }
`;

export default ProjectsBanner;
