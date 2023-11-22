import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import webUIicon from "../../assets/homePageAssets/webUIicon.png";

const UIServices = () => {
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
      <div className="title">
        <h1>My Best UI Services</h1>
        <p>
          From creating captivating website UIs and implementing eye-catching
          animations to ensuring seamless responsiveness and optimizing for
          search engines, I specialize in every aspect of crafting user-centric
          digital experiences.
        </p>
      </div>
      <motion.div className="items">
        <motion.div
          className="item"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
          ref={ref}
        >
          <img src={webUIicon} alt="" />
          <h3>Website UI</h3>
          <p>
            Crafting intuitive and engaging user interfaces that guide seamless
            digital journeys.
          </p>
        </motion.div>
        <motion.div
          className="item"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5978/5978228.png"
            alt=""
          />
          <h3>Redesign UI</h3>
          <p>
            Breathing new life into digital spaces through strategic and
            impactful redesigns.
          </p>
        </motion.div>
        <motion.div
          className="item"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721291.png"
            alt=""
          />
          <h3>Responsive UI</h3>
          <p>
            Ensuring flawless functionality and aesthetics across devices with
            responsive design.
          </p>
        </motion.div>
        <motion.div
          className="item"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 1, type: "spring" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920329.png"
            alt=""
          />
          <h3>Mobile UI</h3>
          <p>
            Elevating user experiences through sleek and intuitive mobile
            interfaces.
          </p>
        </motion.div>
        <motion.div
          className="item"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 1.4, type: "spring" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4053/4053022.png"
            alt=""
          />
          <h3>Web App UI</h3>
          <p>
            Designing immersive and efficient user interfaces for dynamic web
            applications.
          </p>
        </motion.div>
        <motion.div
          className="item"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 1.7, type: "spring" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1454/1454776.png"
            alt=""
          />
          <h3>Animations</h3>
          <p>
            Infusing websites with captivating animations that enhance
            interactivity and engagement.
          </p>
        </motion.div>
      </motion.div>
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
    align-items: center;
    gap: 3em 1em;
    margin-top: 3em;
    .item {
      width: 370px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 10px;
      cursor: pointer;
      transition: 0.3s;
      img {
        width: 70px;
      }
      h3 {
        font-weight: 500;
      }
      p {
        color: var(--fontSecondaryColor);
        font-weight: 300;
      }
      :hover {
        box-shadow: 0 0 12px 2px var(--shadowColor1);
      }
    }
  }
`;

export default UIServices;
