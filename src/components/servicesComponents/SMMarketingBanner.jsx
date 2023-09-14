import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/servicesPageAssets/smMarketingBannerImg.webp";
import { motion } from "framer-motion";

const SMMarketingBanner = () => {
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
          Turning Likes
        </motion.h1>
        <motion.span
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 70, opacity: 0 }}
          transition={{ duration: 1, delay: 1, bounce: 0.3, type: "spring" }}
        >
          into Leads.
        </motion.span>
        <p>
          Harness the Power of Social Media Marketing to Transform Your Brand.
        </p>
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
              src="https://cdn3d.iconscout.com/3d/premium/thumb/online-advertisement-3635244-3038691.png"
              alt=""
            />
            <h2>Content Creation</h2>
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
              src="https://cdn3d.iconscout.com/3d/premium/thumb/target-market-7603148-6165805.png"
              alt=""
            />
            <h2>Audience Growth</h2>
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
              src="https://cdn3d.iconscout.com/3d/premium/thumb/social-media-profile-5406868-4544597.png"
              alt=""
            />
            <h2>Profile Optimization</h2>
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
        className="bannerImg"
        src={bannerImg}
        alt=""
      />
    </Container>
  );
};
const Container = styled.div`
  padding: 5em 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  background: var(--backgroundGradient);
  .bannerImg {
    width: 40%;
    max-width: 740px;
  }
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
  @media (max-width: 1100px) {
    .details {
      h1,
      span {
        font-size: 4em;
      }
    }
  }
  @media (max-width: 920px) {
    .details {
      h1,
      span {
        font-size: 3em;
      }
    }
  }
  @media (max-width: 840px) {
    .rows {
      span {
        width: 90%;
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
    .bannerImg {
      width: 70%;
    }
  }
  @media (max-width: 440px) {
    .details {
      h1,
      span {
        font-size: 2.7em;
      }
    }
    .bannerImg {
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

export default SMMarketingBanner;
