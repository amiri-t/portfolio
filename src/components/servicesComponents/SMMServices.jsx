import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "styled-components";

const SMMServices = () => {
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
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/064/657/original/social-media-and-digital-marketing-3d-illustration-free-png.png"
          alt=""
        />
        <h2>Social Media Management</h2>
        <p>
          I take charge of your brand's social media presence. I handle content
          creation, scheduling, audience engagement, and performance tracking,
          ensuring your online platforms thrive.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/064/686/original/social-media-and-digital-marketing-3d-illustration-free-png.png"
          alt=""
        />
        <h2>Paid Social Advertising</h2>
        <p>
          Drive targeted results with my paid advertising campaigns on platforms
          like Facebook, Instagram, Twitter, and LinkedIn. I craft and manage
          ads, optimizing budgets for optimal ROI.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 1, type: "spring" }}
      >
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/content-marketing-6790859-5602416.png"
          alt=""
        />
        <h2>Content Creation and Strategy</h2>
        <p>
          Elevate your content game with my strategy-focused approach. I design
          a content roadmap tailored to your brand's objectives, delivering
          engaging posts, visuals, videos, and articles to captivate your
          audience.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 1.3, type: "spring" }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/015/340/590/original/social-media-growth-3d-character-illustration-png.png"
          alt=""
        />
        <h2>Analytics and Reporting</h2>
        <p>
          I consistently monitor and analyze key performance metrics, from
          engagement rates to conversion stats. My reports empower data-driven
          refinements for maximum impact.
        </p>
      </motion.div>
    </Container>
  );
};
const Container = styled.div`
  padding: 5em 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2em;
  div {
    width: 40%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    padding: 15px;
    box-shadow: 12px 12px 17px var(--shadowColor1),
      -12px -12px 17px var(--shadowColor2);
    img {
      width: 130px;
    }
    h2 {
      font-weight: 500;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      color: var(--fontSecondayColor);
      font-weight: 300;
    }
  }
  @media (max-width: 720px) {
    padding: 5em 2%;
    div {
      width: 47%;
    }
  }
  @media (max-width: 550px) {
    padding: 5em 2%;
    div {
      width: 90%;
    }
  }
`;

export default SMMServices;
