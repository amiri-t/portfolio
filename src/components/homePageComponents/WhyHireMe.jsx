import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";
import { motion, useAnimation, useInView } from "framer-motion";

const WhyHireMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);
  return (
    <Container>
      <div className="title">
        <h1>Why Hire Me</h1>
        <p>
          In this section I will provide you with some reasons to hire me to get
          you to high levels of success with my services.
        </p>
      </div>
      <div className="items">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 0.1, type: "spring" }}
          className="item"
        >
          <BsCheck2Circle className="icon" />
          <h2>Seamless Scaling</h2>
          <p>
            My holistic approach goes beyond creating websites; I engineer
            growth. Through strategic design, responsive development, and
            targeted digital strategies, I empower businesses to scale
            effectively and seize opportunities.
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
          className="item"
        >
          <BsCheck2Circle className="icon" />
          <h2>Fusion of Creativity and Strategy</h2>
          <p>
            I don't just craft beautiful websites; I construct experiences that
            resonate. My designs are a blend of creative artistry and strategic
            thinking, ensuring a captivating online presence that captivates
            your audience.
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
          className="item"
        >
          <BsCheck2Circle className="icon" />
          <h2>Proven Success</h2>
          <p>
            My portfolio isn't just a collection of projects; it's a narrative
            of success stories. From businesses that have expanded their client
            base to brands that have conquered the digital realm, my track
            record speaks for itself.
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 1, type: "spring" }}
          className="item"
        >
          <BsCheck2Circle className="icon" />
          <h2>ROI-Driven Approach</h2>
          <p>
            My work isn't just about pixels; it's about results. With a strong
            focus on user experience, SEO optimization, and engaging content, I
            ensure your investment yields tangible returns through increased
            visibility and conversions.
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 1.3, type: "spring" }}
          className="item"
        >
          <BsCheck2Circle className="icon" />
          <h2>Tailored Solutions</h2>
          <p>
            No two businesses are alike, and your digital presence should
            reflect your uniqueness. I curate tailored solutions that align with
            your brand identity and business goals, delivering a cohesive and
            impactful online experience.
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 1.6, type: "spring" }}
          className="item"
        >
          <BsCheck2Circle className="icon" />
          <h2>Partnership for Growth</h2>
          <p>
            Hiring me isn't just a transaction; it's a partnership. I'm
            committed to walking alongside you on your digital journey, offering
            guidance, insight, and expertise that contribute to your long-term
            success.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  background: var(--primaryBackgroundColor);
  .title {
    text-align: center;
    h1 {
      font-family: "Comfortaa", cursive;
      font-weight: 600;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      width: 60%;
      margin: auto;
      margin-top: 1em;
      color: var(--fontSecondaryColor);
      font-weight: 300;
    }
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 4em 0;
    gap: 2em;
    .item {
      width: 30%;
      display: flex;
      padding: 20px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      text-align: center;
      .icon {
        color: #0d9b0d;
        font-size: 3em;
      }
      h2 {
        font-weight: 400;
      }
      p {
        font-weight: 300;
        color: var(--fontSecondaryColor);
      }
    }
  }
  @media (max-width: 1000px) {
    .items {
      .item {
        width: 47%;
      }
    }
  }
  @media (max-width: 700px) {
    .items {
      .item {
        width: 97%;
      }
    }
  }
`;

export default WhyHireMe;
