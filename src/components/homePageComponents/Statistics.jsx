import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation1.start("visible");
      animation2.start("visible");
      animation3.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);

  return (
    <Container ref={ref}>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
      >
        50+ Projects
      </motion.p>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation2}
        transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
      >
        30+ Satistied Clients
      </motion.p>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation3}
        transition={{ duration: 0.4, delay: 1, type: "spring" }}
      >
        4 Years of Experience
      </motion.p>
    </Container>
  );
};
const Container = styled.div`
  padding: 0em 4%;
  color: var(--fontPrimaryColor);
  background: var(--primaryBackgroundColor);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7%;
  @media (max-width: 560px) {
    flex-direction: column;
    gap: 1em;
  }
`;

export default Statistics;
