import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "styled-components";

const SEOTypes = () => {
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
        transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
        className="type"
      >
        <hr />
        <h2>National SEO</h2>
        <p>
          Improve your business’s visibility for highly competitive keywords
          that have a big impact on your bottom line.
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
        className="type"
      >
        <hr />
        <h2>Local SEO</h2>
        <p>
          Increase your presence in local listings and maps to earn more foot
          traffic and brand presence to your locations.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 1.3, type: "spring" }}
        className="type"
      >
        <hr />
        <h2>Small Business SEO</h2>
        <p>
          Elevate your SMB to new heights through performance-focused SEO for
          your business.
        </p>
      </motion.div>
    </Container>
  );
};
const Container = styled.div`
  padding: 5em 2%;
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
  .type {
    width: 300px;
    hr {
      border: none;
      border-bottom: 1px solid var(--primaryColor);
    }
    h2 {
      margin-top: 7px;
      font-weight: 500;
      color: var(--primaryColor);
    }
    p {
      color: var(--fontSecondayColor);
      font-weight: 300;
    }
  }
`;

export default SEOTypes;
