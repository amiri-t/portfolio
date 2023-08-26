import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const ProgrammingLanguages = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      animation.start({
        opacity: 1,
        transition: { duration: 0.7, delay: 0.2 },
        y: 0,
      });

      setHasAnimated(true);
    }
    if (!inView && !hasAnimated) {
      animation.start({ opacity: 0, y: 100 });
    }
  }, [inView, hasAnimated, animation]);
  return (
    <Container ref={ref}>
      <motion.div animate={animation} className="items">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt=""
        />
        <img src="https://www.cdnlogo.com/logos/h/84/html.svg" alt="" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
          alt=""
        />
        <img
          src="https://logosdownload.com/logo/javascript-logo-big.png"
          alt=""
        />
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-firebase-icon.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
          alt=""
        />
        <img
          src="https://www.daggala.com/static/228867c3668e439101821568a8a03b54/19ca5/sc.png"
          alt=""
        />
        <img
          src="https://assets.asana.biz/transform/ba9b63a3-f255-4088-b5fe-14ab4628f50b/logo-app-figma"
          alt=""
        />
      </motion.div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 17%;
  background: var(--backgroundGradient4);
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 7em;
    img {
      height: 70px;
    }
  }
  @media (max-width: 1180px) {
    padding: 7em 13%;
    .items {
      gap: 6em;
    }
  }
  @media (max-width: 970px) {
    padding: 7em 7%;
    .items {
      gap: 6em;
    }
  }
  @media (max-width: 840px) {
    padding: 7em 7%;
    .items {
      gap: 3em;
    }
  }
  @media (max-width: 610px) {
    padding: 7em 7%;
    .items {
      gap: 3em;
      img {
        height: 50px;
      }
    }
  }
`;

export default ProgrammingLanguages;
