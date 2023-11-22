import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CV from "../assets/MyCV.pdf";

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "Amir Tahiri - About Me | Portfolio";
  }, []);

  const openCalendlyPopup = () => {
    window.open(
      "https://calendly.com/amiri-t/talk-with-amir",
      "calendlyPopup",
      "width=800,height=600"
    );
  };
  return (
    <Container>
      <motion.div
        className="title"
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -400, opacity: 0 }}
        transition={{ duration: 0.7, bounce: 0.3, type: "spring" }}
      >
        <h1>About Me</h1>
        <p>
          Fun fact: even though all this website is about me and I'm still
          making an About Me page :), quite smart.
        </p>
      </motion.div>
      <div className="items">
        <div className="item">
          <p>
            Hello, My name is Amir, a passionate and dedicated web designer and
            developer. With a flair for creativity and a knack for innovation,
            I've embarked on a journey to craft compelling digital experiences
            that leave a lasting impact.
          </p>
          <p>
            My journey is fueled by a passion for crafting immersive digital
            experiences that empower businesses to scale effectively. With an
            artistic eye and a mastery of code, I forge websites that seamlessly
            merge aesthetics with functionality. From captivating user
            interfaces to flawless responsive design, my work is a testament to
            the art of user engagement.
          </p>
          <p>
            But I go beyond pixels and lines of code. I'm an advocate of
            strategic branding and Search Engine Optimization (SEO). My approach
            ensures that your digital presence not only stands out but also
            reaches its target audience with impact. The fusion of compelling
            content creation and astute social media management complements my
            strategy, catalyzing brand visibility and audience interaction.
          </p>
          <p>
            My journey isn't just about building websites; it's about
            architecting pathways to success. My portfolio showcases projects
            where businesses have scaled, leveraging my expertise to navigate
            the digital landscape. Through each partnership, I've nurtured
            growth by designing and developing platforms that engage, convert,
            and captivate.
          </p>
          <p>
            Join me in shaping your digital narrative. Let's work together to
            amplify your brand's reach, streamline your digital operations, and
            unlock the full potential of your business.
          </p>
        </div>
        <div className="btns">
          <button>
            <a href={CV} download={"amiri-cv.pdf"} className="link-styles">
              DOWNLOAD CV
            </a>
          </button>
          <button onClick={openCalendlyPopup}>BOOK A CALL</button>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  background: var(--primaryBackgroundColor);
  color: var(--fontPrimaryColor);
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
    flex-direction: column;
    gap: 2em;
    align-items: center;
    margin: 3em 0;
    .item {
      width: 80%;
      p {
        text-align: center;
        margin: 1em 0;
        font-weight: 300;
      }
    }
    button {
      font-size: 17px;
      padding: 14px 12px;
      border: none;
      background: none;
      border-bottom: 2px solid var(--fontPrimaryColor);
      margin-top: 17px;
      cursor: pointer;
      transition: 0.4s;
      margin: 10px;
      :hover {
        background: var(--secondaryBackgroundColor);
      }
      :nth-child(2) {
        background: var(--primaryColor);
        color: white;
        transition: 0.4s;
        border: none;
        :hover {
          box-shadow: 0 0 7px 2px var(--primaryColor);
        }
      }
    }
  }
  @media (max-width: 700px) {
    .title {
      p {
        width: 90%;
      }
    }
  }
`;

export default AboutMe;
