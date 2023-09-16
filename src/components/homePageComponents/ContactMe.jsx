import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import {
  BsFillTelephoneFill,
  BsInstagram,
  BsDribbble,
  BsYoutube,
  BsFacebook,
  BsPinterest,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";
import CV from "../../assets/CV.pdf";
import emailjs from "@emailjs/browser";

const ContactMeComp = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "portfolio-contact",
        "template_q1gkjrc",
        e.target,
        "nxWVeDl0nBiSEU-yp"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation1 = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation1.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);

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
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
        className="items"
      >
        <div className="item">
          <HiLocationMarker className="icon" />
          <h3>LOCATION</h3>
          <p>Podujeva, Kosovo</p>
          <button>
            <a href={CV} download={"amiri-cv.pdf"} className="link-styles">
              DOWNLOAD CV
            </a>
          </button>
        </div>
        <div className="item">
          <BsFillTelephoneFill className="icon" />
          <h3>PHONE NUMBER</h3>
          <p>+383 45 209 534</p>
          <button onClick={openCalendlyPopup}>BOOK A CALL</button>
        </div>
        <div className="item socials">
          <h3>PERSONAL SOCIALS</h3>
          <div>
            <BsInstagram className="icon" />
            <AiFillGithub className="icon" />
            <SiUpwork className="icon" />
            <MdEmail className="icon" />
            <BsDribbble className="icon" />
          </div>
        </div>
        <div className="item socials">
          <h3>BUSINESS SOCIALS</h3>
          <div>
            <BsInstagram className="icon" />
            <BsDribbble className="icon" />
            <BsYoutube className="icon" />
            <BsPinterest className="icon" />
            <BsFacebook className="icon" />
          </div>
        </div>
      </motion.div>
      <form onSubmit={sendEmail}>
        <h2>LET'S TALK</h2>
        <input type="text" name="name" placeholder="Enter Your Name..." />
        <input type="email" name="email" placeholder="Enter Your Email..." />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Enter Your Message..."
        ></textarea>
        <button type="submit" onClick={() => alert("Email Sent")}>
          SUBMIT
        </button>
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
  background: var(--backgroundGradient4);
  color: var(--fontPrimaryColor);
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    max-width: 500px;
    .item {
      width: 230px;
      height: 200px;
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
      div {
        display: flex;
        flex-wrap: wrap;
        padding: 4px 1em;
        gap: 1em;
        justify-content: center;
        .icon {
          padding: 10px;
          box-shadow: 0 0 12px 1px var(--shadowColor);
          border-radius: 10px;
          cursor: pointer;
          transition: 0.4s;
          :hover {
            background: var(--primaryColor);
            color: white;
          }
        }
      }
      h3 {
        font-weight: 500;
      }
      .icon {
        font-size: 3em;
        color: var(--primaryColor);
      }
      p {
        color: gray;
      }
      button {
        font-size: 17px;
        padding: 14px 12px;
        border: none;
        background: none;
        border-bottom: 2px solid var(--fontPrimaryColor);
        color: var(--fontPrimaryColor);
        cursor: pointer;
        transition: 0.4s;
        :hover {
          background: var(--secondaryBackgroundColor);
        }
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
      color: var(--fontPrimaryColor);
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
      :hover {
        box-shadow: 0 0 10px 3px var(--shadowColor);
      }
    }
  }
  @media (max-width: 970px) {
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

export default ContactMeComp;
