import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "styled-components";
import UIimg from "../../assets/servicesPageAssets/UIimg.png";
import respImg from "../../assets/servicesPageAssets/resImg.png";
import HQimg from "../../assets/servicesPageAssets/HQimg.png";
import accessibilityImg from "../../assets/servicesPageAssets/accessibilityImg.png";
import socialMediaImg from "../../assets/servicesPageAssets/socialMediaImg.png";
import animationsImg from "../../assets/servicesPageAssets/animationsImg.png";

const WebServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation1 = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation1.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);
  return (
    <Container>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        className="feature"
      >
        <img src={UIimg} alt="" />
        <h2>UI & UX</h2>
        <p>
          Skilled in crafting user-centric interfaces and experiences for
          digital products, ensuring intuitive interactions and aesthetic
          appeal.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 0.6, type: "spring" }}
        className="feature"
      >
        <img src={respImg} alt="" />
        <h2>Responsive Design</h2>
        <p>
          I always design my websites to work well on various devices and screen
          sizes, including desktops, tablets, and smartphones.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 1, type: "spring" }}
        className="feature"
      >
        <img src={accessibilityImg} alt="" />
        <h2>Accessibility</h2>
        <p>
          I'm committed to making websites accessible to everyone, including
          those with disabilities, by following accessibility guidelines.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 1.4, type: "spring" }}
        className="feature"
      >
        <img src={HQimg} alt="" />
        <h2>High-Quality Content</h2>
        <p>
          Content is king. I ensure that your website provides valuable,
          informative, and engaging content that meets the needs of your target
          audience.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 1.8, type: "spring" }}
        className="feature"
      >
        <img src={socialMediaImg} alt="" />
        <h2>Social Media Integration</h2>
        <p>
          I understand the importance of social media in today's digital
          landscape, keeping visitors connected and informed about the latest
          news, posts, or comments.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 2.2, type: "spring" }}
        className="feature"
      >
        <img src={animationsImg} alt="" />
        <h2>Animations and Transitions</h2>
        <p>
          Recognizing the impact of visual elements on user experience, I
          incorporate carefully curated loading animations and transitions into
          websites.
        </p>
      </motion.div>
    </Container>
  );
};
const Container = styled.div`
  padding: 0 3%;
  padding: 7em 4%;
  background: var(--backgroundGradient2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
  flex-wrap: wrap;
  .feature {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    text-align: center;
    img {
      width: 150px;
    }
    h2 {
      font-weight: 400;
    }
    p {
      font-weight: 200;
      color: var(--fontSecondaryColor);
    }
  }
  @media (max-width: 1085px) {
    padding: 0 2%;
    gap: 20px;
  }
  @media (max-width: 980px) {
    padding: 0 5%;
    .feature {
      width: 48%;
    }
  }
  @media (max-width: 600px) {
    gap: 1.4em;
    .feature {
      width: 98%;
    }
  }
`;

export default WebServices;
