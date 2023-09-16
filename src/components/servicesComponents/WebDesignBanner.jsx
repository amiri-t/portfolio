import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/servicesPageAssets/webDesignBannerImg.png";
import { motion } from "framer-motion";

const WebDesignBanner = () => {
  return (
    <Container>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.7, bounce: 0.3, type: "spring" }}
        className="details"
      >
        <motion.h1
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -300, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            bounce: 0.3,
            type: "spring",
          }}
        >
          Where Dreams <br />
        </motion.h1>
        <motion.span
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 70, opacity: 0 }}
          transition={{ duration: 1, delay: 1, bounce: 0.3, type: "spring" }}
        >
          Inspire Design!
        </motion.span>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            bounce: 0.3,
            delay: 1.3,
            type: "spring",
          }}
        >
          Where Innovation Sparks Digital Creation!
        </motion.p>
        <div className="items">
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 1.7,
              bounce: 0.3,
              type: "spring",
            }}
          >
            UI
          </motion.p>
          |
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 2,
              bounce: 0.3,
              type: "spring",
            }}
          >
            UX
          </motion.p>
          |
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 2.3,
              bounce: 0.3,
              type: "spring",
            }}
          >
            PRO DEVELOPMENT
          </motion.p>
          |
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 2.6,
              bounce: 0.3,
              type: "spring",
            }}
          >
            MODERN
          </motion.p>
        </div>
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
        src="https://cdn3d.iconscout.com/3d/premium/thumb/web-design-5482225-4569698.png"
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
  gap: 10px;
  .details {
    h1 {
      font-size: 4.8em;
      font-weight: 600;
      line-height: 1.1em;
    }
    span {
      font-size: 4.8em;
      font-weight: 600;
      line-height: 1.1em;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      color: var(--fontSecondaryColor);
      font-weight: 300;
    }
    .items {
      display: flex;
      align-items: center;
      gap: 1.3em;
      margin-top: 1em;
      p {
        font-size: 24px;
        font-weight: 500;
        line-height: 1.1em;
        color: var(--primaryColor);
      }
    }
  }
  .bannerImg {
    width: 47%;
  }
  @media (max-width: 1345px) {
    padding: 8em 3% 3em 3%;
    .details {
      h1,
      span {
        font-size: 4em;
      }
    }
  }
  @media (max-width: 1070px) {
    .details {
      h1,
      span {
        font-size: 3em;
      }
      .items {
        gap: 10px;
        p {
          font-size: 20px;
        }
      }
    }
  }
  @media (max-width: 805px) {
    padding: 5em 3% 3em 3%;
    .details {
      h1 {
        font-size: 2.8em;
      }
      .items {
        flex-wrap: wrap;
        p {
          font-size: 18px;
        }
      }
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    .details {
      text-align: center;
    }
    .bannerImg {
      width: 70%;
    }
  }
  @media (max-width: 450px) {
    .details {
      h1,
      span {
        font-size: 2.4em;
      }
      .items {
        justify-content: center;
        gap: 4px;
      }
    }
    .bannerImg {
      width: 90%;
    }
  }
`;

export default WebDesignBanner;
