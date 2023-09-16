import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const BrandingDesignBanner = () => {
  return (
    <Container>
      <div className="details">
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
          DESIGNING TRUST,
        </motion.h1>
        <motion.span
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 70, opacity: 0 }}
          transition={{ duration: 1, delay: 1, bounce: 0.3, type: "spring" }}
        >
          BUILDING LOYALTY
        </motion.span>
        <p>Visuals That Speak Your Brand's Language.</p>
        <div className="rows">
          <motion.span
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 1.3,
              bounce: 0.3,
              type: "spring",
            }}
          >
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/graphic-design-6332596-5220374.png"
              alt=""
            />
            <h2>Visual Branding</h2>
          </motion.span>
          <motion.span
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 1.6,
              bounce: 0.3,
              type: "spring",
            }}
          >
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/designer-working-on-design-5984589-4971259.png?f=webp"
              alt=""
            />
            <h2>Collateral Design</h2>
          </motion.span>
          <motion.span
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 200, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 1.9,
              bounce: 0.3,
              type: "spring",
            }}
          >
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/brand-tag-7074106-5752020.png  "
              alt=""
            />
            <h2>Brand Guidelines</h2>
          </motion.span>
        </div>
      </div>
      <motion.img
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{
          duration: 0.7,
          bounce: 0.3,
          type: "spring",
        }}
        src="https://cdn3d.iconscout.com/3d/premium/thumb/graphic-designer-5795315-4849606.png"
        alt=""
      />
    </Container>
  );
};
const Container = styled.div`
  padding: 1em 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  background: var(--backgroundGradient);
  img {
    width: 45%;
    max-width: 740px;
  }
  .details {
    h1 {
      font-size: 4.5em;
      font-weight: 600;
      line-height: 1.1em;
    }
    span {
      font-size: 4.5em;
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
    .rows {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1em;
      gap: 10px;
      span {
        width: 70%;
        height: 60px;
        display: flex;
        align-items: center;
        gap: 1em;
        padding: 10px;
        border-radius: 10px;
        backdrop-filter: blur(10px);
        box-shadow: 12px 12px 19px var(--shadowColor1),
          -12px -12px 19px var(--shadowColor2);
        img {
          width: 33px;
        }
        h2 {
          font-size: 20px;
          font-weight: 300;
          font-family: "Comfortaa", cursive;
        }
      }
    }
  }
  @media (max-width: 1310px) {
    .details {
      h1,
      span {
        font-size: 3.7em;
      }
    }
  }
  @media (max-width: 1094px) {
    .details {
      h1,
      span {
        font-size: 3em;
      }
    }
  }
  @media (max-width: 900px) {
    padding: 2em 4%;
    .details {
      h1,
      span {
        font-size: 2.7em;
      }
      .rows {
        span {
          width: 90%;
        }
      }
    }
  }
  @media (max-width: 730px) {
    .details {
      h1,
      span {
        font-size: 2em;
      }
    }
  }
  @media (max-width: 680px) {
    flex-direction: column;
    .details {
      text-align: center;
      h1,
      span {
        font-size: 3.2em;
      }
      .rows {
        align-items: center;
      }
    }
    img {
      width: 70%;
    }
  }
  @media (max-width: 430px) {
    .details {
      h1,
      span {
        font-size: 2em;
      }
    }
    img {
      width: 90%;
    }
    .rows {
      span {
        width: 100%;
        gap: 3px;
      }
    }
  }
`;

export default BrandingDesignBanner;
