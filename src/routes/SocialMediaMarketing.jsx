import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "styled-components";
import SMMarketingBanner from "../components/servicesComponents/SMMarketingBanner";
import SMMGuarantees from "../components/servicesComponents/SMMGuarantees";
import SMMServices from "../components/servicesComponents/SMMServices";

const SocialMediaMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title = "Amir Tahiri - Social Media Marketing | Portfolio";
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
      <SMMarketingBanner />
      <div className="text">
        <h1 ref={ref}>CLICKS TO</h1>
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
          CLIENTS!
        </motion.h1>
      </div>
      <SMMGuarantees />
      <div className="adDesign">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/graphic-design-6332596-5220374.png"
          alt=""
        />
        <h1>Defining the future of advertising.</h1>
      </div>
      <SMMServices />
    </Container>
  );
};
const Container = styled.div`
  background: var(--primaryBackgroundColor);
  color: var(--fontPrimaryColor);
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
  .adDesign {
    padding: 7em 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    img {
      width: 48%;
      max-width: 600px;
    }
    h1 {
      font-size: 5em;
      font-weight: 400;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  @media (max-width: 1100px) {
    .text {
      h1 {
        font-size: 8em;
      }
    }
  }
  @media (max-width: 1010px) {
    .adDesign {
      h1 {
        font-size: 4em;
      }
    }
  }
  @media (max-width: 820px) {
    .adDesign {
      h1 {
        font-size: 3.4em;
      }
    }
  }
  @media (max-width: 740px) {
    .text {
      h1 {
        font-size: 6em;
      }
    }
    .adDesign {
      h1 {
        font-size: 3em;
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
  @media (max-width: 630px) {
    .text {
      h1 {
        font-size: 3.7em;
      }
    }
    .adDesign {
      flex-direction: column;
      text-align: center;
      img {
        width: 70%;
      }
    }
  }
  @media (max-width: 370px) {
    .text {
      h1 {
        font-size: 3.1em;
      }
    }
  }
`;

export default SocialMediaMarketing;
