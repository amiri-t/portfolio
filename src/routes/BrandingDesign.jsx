import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "styled-components";
import BrandingDesignBanner from "../components/homePageComponents/BrandingDesignBanner";
import BrandingServices from "../components/servicesComponents/BrandingServices";

const BrandingDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "Amir Tahiri - Branding Design | Portfolio";
  }, []);

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
      <BrandingDesignBanner />
      <div className="text">
        <h1 ref={ref}>WHERE VISION</h1>
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
          MEETS IDENTITY!
        </motion.h1>
      </div>
      <BrandingServices />
    </Container>
  );
};
const Container = styled.div`
  padding: 2em 0;
  background: var(--primaryBackgroundColor);
  color: var(--fontPrimaryColor);
  .text {
    background: var(--backgroundGradient3);
    padding: 8em 5%;
    h1 {
      font-size: 9em;
      line-height: 1em;
      font-weight: 300;
      :nth-child(2) {
        background: var(--gradientBackground);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  @media (max-width: 1190px) {
    .text {
      h1 {
        font-size: 7em;
      }
    }
  }
  @media (max-width: 930px) {
    .text {
      h1 {
        font-size: 5em;
      }
    }
  }
  @media (max-width: 660px) {
    .text {
      h1 {
        font-size: 4em;
      }
    }
  }
`;

export default BrandingDesign;
