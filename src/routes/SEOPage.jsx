import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "styled-components";
import SEOBanner from "../components/servicesComponents/SEOBanner";
import SEOServices from "../components/servicesComponents/SEOServices";
import SEOTypes from "../components/servicesComponents/SEOTypes";

const SEOPage = () => {
  //       useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);
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
      <SEOBanner />
      <div className="text">
        <h1 ref={ref}>ONLINE</h1>
        <motion.h1
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
        >
          ELEVATOR!
        </motion.h1>
      </div>
      <SEOServices />
      <SEOTypes />
    </Container>
  );
};
const Container = styled.div`
  padding: 4em 0;
  color: var(--fontPrimaryColor);
  background: var(--primaryBackgroundColor);
  .text {
    background: var(--backgroundGradient3);
    padding: 8em 7%;
    h1 {
      font-size: 12em;
      line-height: 1em;
      font-weight: 300;
      :nth-child(2) {
        background: var(--gradientBackground);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  @media (max-width: 1040px) {
    .text {
      h1 {
        font-size: 8em;
      }
    }
  }
  @media (max-width: 740px) {
    .text {
      h1 {
        font-size: 6em;
      }
    }
  }
  @media (max-width: 540px) {
    .text {
      h1 {
        font-size: 3.7em;
      }
    }
  }
`;

export default SEOPage;
