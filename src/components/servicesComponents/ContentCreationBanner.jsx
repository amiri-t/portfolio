import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContentCreationBanner = () => {
  return (
    <Container>
      <motion.img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/online-blog-5842029-4897960.png"
        alt=""
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -300 }}
        transition={{
          duration: 0.7,
          bounce: 0.3,
          delay: 0.4,
          type: "spring",
        }}
      />
      <div>
        <h1>Captivating Content,</h1>
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
          Lasting Impact.
        </motion.span>
        <p>
          Crafting Content That Captivates Audiences and Tells Your Brand's
          Unique Story.
        </p>
        <div>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 320 }}
            transition={{
              duration: 0.7,
              delay: 1.4,
              type: "spring",
            }}
          >
            Content Creation
          </motion.p>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 320 }}
            transition={{
              duration: 0.7,
              delay: 1.7,
              type: "spring",
            }}
          >
            Content Copywriting
          </motion.p>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 320 }}
            transition={{
              duration: 0.7,
              delay: 2,
              type: "spring",
            }}
          >
            Strategy
          </motion.p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 3em 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  background: var(--backgroundGradient2);
  img {
    width: 40%;
  }
  div {
    h1 {
      font-size: 4em;
      font-weight: 600;
      line-height: 1.2em;
    }
    span {
      font-size: 4em;
      font-weight: 600;
      line-height: 1.2em;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      color: var(--fontSecondaryColor);
      font-weight: 300;
    }
    div {
      display: flex;
      gap: 7px;
      flex-wrap: wrap;
      margin-top: 2em;
      p {
        padding: 4px 10px;
        background-color: var(--secondaryBackgroundColor);
        border-radius: 1em;
      }
    }
  }
  @media (max-width: 940px) {
    div {
      h1,
      span {
        font-size: 3.5em;
      }
    }
  }
  @media (max-width: 840px) {
    div {
      h1,
      span {
        font-size: 3em;
      }
    }
  }
  @media (max-width: 740px) {
    padding: 1em 3%;
    flex-direction: column;
    gap: 0;
    img {
      width: 50%;
    }
    div {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        flex-direction: row;
        justify-content: center;
      }
      h1,
      span {
        text-align: center;
      }
      p {
        margin-top: 10px;
      }
    }
  }
  @media (max-width: 470px) {
    div {
      h1,
      span {
        font-size: 2.4em;
      }
    }
  }
`;

export default ContentCreationBanner;
