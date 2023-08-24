import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const ContactUsComp = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      animation.start({
        opacity: 1,
        transition: { duration: 0.7, delay: 0.4 },
        x: 0,
      });

      setHasAnimated(true);
    }
    if (!inView && !hasAnimated) {
      animation.start({ opacity: 0, x: -100 });
    }
  }, [inView, hasAnimated, animation]);
  return (
    <Container ref={ref}>
      <motion.div animate={animation} className="items">
        <div className="item">
          <HiLocationMarker className="icon" />
          <h3>LOCATION</h3>
          <p>
            Podujeva <br />
            Kosovo
          </p>
        </div>
        <div className="item">
          <BsFillTelephoneFill className="icon" />
          <h3>PHONE NUMBER</h3>
          <p>+383 45 209 534</p>
        </div>
        <div className="item">
          <AiFillGithub className="icon" />
          <h3>GitHub</h3>
          <p>amiri-t</p>
        </div>
        <div className="item">
          <MdEmail className="icon" />
          <h3>EMAIL</h3>
          <p>tahiriamir49@gmail.com</p>
        </div>
      </motion.div>
      <form>
        <h2>CONTACT ME</h2>
        <input type="text" placeholder="Ener Your Name..." />
        <input type="email" placeholder="Ener Your Email..." />
        <textarea
          cols="30"
          rows="10"
          placeholder="Enter Your Message or concern..."
        ></textarea>
        <button>SUBMIT</button>
      </form>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--backgroundGradient3);
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    max-width: 440px;
    .item {
      width: 200px;
      height: 170px;
      background: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      border: none;
      box-shadow: 7px 7px 12px var(--shadowColor1),
        -7px -7px 12px var(--shadowColor2);
      gap: 7px;
      border-radius: 20px;
      .icon {
        font-size: 3em;
        color: var(--primaryColor);
      }
      p {
        color: gray;
      }
    }
  }
  form {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 480px;
    padding: 30px;
    h2 {
      font-size: 2em;
      font-weight: 400;
      margin-top: 1em;
      color: var(--fontSecondaryColor);
    }
    input {
      margin-top: 12px;
      border-radius: 20px;
      border: 2px solid transparent;
      padding: 14px 20px;
      font-family: "Poppins", sans-serif;
      outline: none;
      font-size: 16px;
      width: 100%;
      background: transparent;
      box-shadow: 7px 7px 12px var(--shadowColor1),
        -4px -4px 12px var(--shadowColor2);
      color: var(--fontPrimaryColor);
    }
    textarea {
      background: transparent;
      margin-top: 12px;
      border-radius: 20px;
      border: 2px solid transparent;
      box-shadow: 7px 7px 12px var(--shadowColor1),
        -4px -4px 12px var(--shadowColor2);
      padding: 14px 20px;
      font-family: "Poppins", sans-serif;
      outline: none;
      font-size: 16px;
      width: 100%;
    }
    button {
      margin-top: 1em;
      font-size: 17px;
      background: var(--fontPrimaryColor);
      color: var(--primaryBackgroundColor);
      padding: 10px 12px;
      border: none;
      cursor: pointer;
      transition: 0.4s;
      border-radius: 10px;
      :hover {
        box-shadow: 0 0 10px 3px var(--shadowColor);
      }
    }
  }
  @media (max-width: 870px) {
    padding: 7em 3%;
    .items {
      max-width: 400px;
      .item {
        width: 180px;
        height: 140px;
        .icon {
          font-size: 2em;
        }
        h3 {
          font-size: 17px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    form {
      padding: 10px;
    }
  }
  @media (max-width: 740px) {
    flex-direction: column;
  }
  @media (max-width: 530px) {
    padding: 7em 1%;
    form {
      width: 100%;
    }
    .items {
      max-width: 3870px;
      gap: 7px;
      .item {
        width: 170px;
        height: 140px;
        .icon {
          font-size: 2em;
        }
        h3 {
          font-size: 17px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
`;

export default ContactUsComp;
