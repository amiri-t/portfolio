import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/projectsPageAssets/projectsBannerImg2.png";
import { motion } from "framer-motion";

const ProjectsBanner = () => {
  return (
    <Container>
      <motion.div
        className="left"
        animate={{ x: 0 }}
        initial={{ x: -500 }}
        transition={{ duration: 0.7, bounce: 0.3, type: "spring" }}
      >
        <h1>
          Showcasing Projects Redefining Design and Development Excellence.
        </h1>
        <p>Exploring the Fusion of Creativity and Technology</p>
      </motion.div>
      <motion.img
        className="bannerImg"
        src={bannerImg}
        alt=""
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 0.7, bounce: 0.3, type: "spring" }}
      />
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
      text-align: left;
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
