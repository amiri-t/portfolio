import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import bannerImg from "../../assets/servicesPageAssets/webDesignBannerImg.png";
import { motion, useAnimation, useInView } from "framer-motion";

const WebDesignBanner = () => {
  return (
    <Container>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.7, bounce: 0.3, type: "spring" }}
        className="left"
      >
        <h1>
          Design is not just what it looks like and feels like, <br />
          <motion.span
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.7,
              bounce: 0.3,
              delay: 1.2,
              type: "spring",
            }}
          >
            Design is how it works.
          </motion.span>
        </h1>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            bounce: 0.3,
            delay: 2,
            type: "spring",
          }}
        >
          -Steve Jobs
        </motion.p>
      </motion.div>
      <motion.img
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{
          duration: 0.7,
          bounce: 0.3,
          type: "spring",
        }}
        className="bannerImg"
        src={bannerImg}
        alt=""
      />
    </Container>
  );
};
const Container = styled.div`
  background: var(--backgroundGradient2);
  transition: 0.4s;
  padding: 8em 7% 3em 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  .left {
    h1 {
      font-size: 2.7em;
      font-weight: 600;
      line-height: 1.4em;
      font-family: "Montserrat", cursive;
      span {
        font-family: "Comfortaa", cursive;
        background: var(--gradientBackground);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    p {
      font-weight: 300;
    }
  }
  .bannerImg {
    width: 47%;
  }
`;

export default WebDesignBanner;
