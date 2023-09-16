import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

const MyServices = () => {
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
      <div className="items">
        <div className="top">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -300 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={animation1}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="item i1"
          >
            <h2>
              My Awesome <br /> <span>Services</span>
            </h2>
            <p>
              These are 3 of my main services I offer, with years of experience
              on each of them!
            </p>
            <Link to={"/services"} className="link-styles">
              <button>DISCOVER ALL</button>
            </Link>
          </motion.div>
          <motion.div className="item i2" ref={ref}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5596/5596612.png"
              alt=""
            />
            <h2>Development</h2>
            <p>
              Transforming concepts into fully functional, responsive websites.
            </p>
          </motion.div>
        </div>
        <div className="bottom">
          <motion.div className="item i2">
            <img
              src="https://icons-for-free.com/iconfiles/png/512/color+web+design-131983707946616457.png"
              alt=""
            />
            <h2>Design</h2>
            <p>
              Crafting visually captivating and user-centric UI & UX designs
              that breathe life into digital spaces.
            </p>
          </motion.div>

          <motion.div className="item i2 last">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5681/5681665.png"
              alt=""
            />
            <h2>SEO</h2>
            <p>Elevating online visibility through strategic SEO techniques.</p>
            <Link to={"/services"}></Link>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 10em 2%;
  background: var(--primaryBackgroundColor);
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    .item {
      img {
        width: 100px;
      }
      h2 {
        font-weight: 800;
        font-family: "Comfortaa", cursive;
      }
      button {
        font-size: 17px;
        background: var(--fontPrimaryColor);
        color: var(--primaryBackgroundColor);
        padding: 10px 12px;
        border: none;
        margin-top: 10px;
        cursor: pointer;
        transition: 0.4s;
        border-radius: 10px;
        :hover {
          box-shadow: 0 0 10px 3px var(--shadowColor);
        }
      }
    }
    .top {
      display: flex;
      flex-direction: column;
      gap: 3em;
      width: 37%;
    }
    .bottom {
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      gap: 3em;
      margin-top: 3em;
    }
    .i1 {
      width: 62%;
      max-width: 400px;
      h2 {
        font-size: 2.7em;
        line-height: 1.1em;
        font-weight: 400;
        span {
          color: var(--primaryColor);
          font-weight: 500;
          font-family: "Comfortaa", cursive;
        }
      }
      p {
        color: var(--fontSecondaryColor);
        font-size: 15px;
      }
    }
    .i2 {
      align-self: flex-end;
      margin-right: 4em;
      width: 340px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;
      text-align: center;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      box-shadow: 12px 12px 19px var(--shadowColor1),
        -12px -12px 19px var(--shadowColor2);
    }
  }
  @media (max-width: 1040px) {
    .items {
      .i2 {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 840px) {
    .items {
      flex-direction: column;
      .top {
        flex-direction: row;
        width: 90%;
      }
      .bottom {
        flex-direction: row;
        width: 90%;
        margin-left: 2em;
      }
    }
  }
  @media (max-width: 580px) {
    .items {
      .top {
        flex-direction: column;
        width: 90%;
      }
      .i1 {
        width: 90%;
      }
      .i2 {
        width: 80%;
        margin-right: 1%;
      }
      .bottom {
        flex-direction: column;
        width: 90%;
        margin-left: 1.4em;
      }
    }
  }
  @media (max-width: 420px) {
    .items {
      .i2 {
        width: 98%;
        margin-left: 3em;
      }
    }
  }
`;

export default MyServices;
