import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ServicesBanner = () => {
  return (
    <Container>
      <motion.div
        className="left"
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 0.7, bounce: 0.3, type: "spring" }}
      >
        <h1>
          Amplifying Business Growth with Expert Design, Development, and SEO
          Strategies.
        </h1>
        <p>
          Elevate Your Business Potential with a professional website, Enabling
          Your Journey to Scale New Heights.
        </p>
      </motion.div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  background: var(--backgroundGradient4);
  .left {
    h1 {
      text-align: center;
      margin-top: 1em;
      font-size: 3em;
      font-weight: 600;
      line-height: 1.4em;
      font-family: "Montserrat", cursive;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      text-align: center;
      font-weight: 300;
    }
  }
  img {
    width: 50%;
    max-width: 600px;
  }
  @media (max-width: 660px) {
    .left {
      h1 {
        font-size: 2em;
      }
    }
  }
  @media (max-width: 460px) {
    padding: 4em 7%;
    .left {
      h1 {
        font-size: 1.5em;
      }
    }
  }
`;

export default ServicesBanner;
