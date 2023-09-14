import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "styled-components";

const SMMGuarantees = () => {
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
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
      >
        <h1>3X</h1>
        <p>
          3x is the minimum expected development I can bring to your business.
        </p>
      </motion.div>
      <hr />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
        className="e"
      >
        <h1>99%</h1>
        <p>
          99% of key performance indicators are oriented towards potential
          buyers and long-term results.
        </p>
      </motion.div>
      <hr />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 1, type: "spring" }}
      >
        <h1>0%</h1>
        <p>
          chance of me not being able to find a “growth solution” for your
          business needs.
        </p>
      </motion.div>
      <hr />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 1.3, type: "spring" }}
        className="e"
      >
        <h1>94%</h1>
        <p>
          of my clients are international businesses excelling in highly
          competitive markets
        </p>
      </motion.div>
    </Container>
  );
};
const Container = styled.div`
  padding: 5em 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 24%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
    max-width: 370px;
    h1 {
      font-size: 4em;
      font-weight: 400;
      color: var(--primaryColor);
    }
    p {
      color: var(--fontSecondaryColor);
      font-weight: 300;
    }
  }
  .e {
    h1 {
      margin-top: 1em;
    }
  }
  hr {
    height: 120px;
  }
  @media (max-width: 840px) {
    flex-wrap: wrap;
    div {
      width: 300px;
    }
  }
  @media (max-width: 650px) {
    div {
      width: 100%;
    }
    .e {
      h1 {
        margin-top: 0;
      }
    }
    hr {
      display: none;
    }
  }
`;

export default SMMGuarantees;
