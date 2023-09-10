import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/servicesPageAssets/seoBannerImg.png";
import { motion } from "framer-motion";

const SEOBanner = () => {
  return (
    <Container>
      <motion.img
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -300 }}
        transition={{
          duration: 0.7,
          bounce: 0.3,
          delay: 0.4,
          type: "spring",
        }}
        src={bannerImg}
        alt=""
      />
      <div className="details">
        <h1>
          Your success story, <br />
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
            our SEO strategy.
          </motion.span>
        </h1>
        <div className="keywords">
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 320 }}
            transition={{
              duration: 0.7,
              delay: 1.4,
              type: "spring",
            }}
          >
            #seo
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
            #googleSearch
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
            #traffic
          </motion.p>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 320 }}
            transition={{
              duration: 0.7,
              delay: 2.3,
              type: "spring",
            }}
          >
            #targetedAudience
          </motion.p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 1em 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  img {
    width: 40%;
    max-width: 740px;
  }
  .details {
    h1 {
      font-size: 3.8em;
      font-weight: 400;
      line-height: 1em;
    }
    .keywords {
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
    span {
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  @media (max-width: 1060px) {
    .details {
      h1 {
        font-size: 2.8em;
      }
    }
  }
  @media (max-width: 780px) {
    flex-direction: column;
    text-align: center;
    img {
      width: 70%;
    }
    .details {
      .keywords {
        justify-content: center;
      }
      h1 {
        font-size: 2.8em;
      }
    }
  }
  @media (max-width: 500px) {
    img {
      width: 90%;
    }
  }
  @media (max-width: 420px) {
    .details {
      h1 {
        font-size: 2.2em;
      }
    }
  }
  @media (max-width: 350px) {
    .details {
      h1 {
        font-size: 1.8em;
      }
    }
  }
`;

export default SEOBanner;
