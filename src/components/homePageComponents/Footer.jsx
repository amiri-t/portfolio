import React from "react";
import styled from "styled-components";
import logo from "../../assets/personalLogoPng.png";
import logoDm from "../../assets/dmPersonalLogoPng.png";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = ({ theme }) => {
  return (
    <Container>
      <Link to={"/"} className="link-styles">
        <div className="logo">
          {theme === "dark" ? (
            <img src={logoDm} alt="" />
          ) : (
            <img src={logo} alt="" />
          )}
          <p>Crafting Digital Experiences, One Line of Code at a Time</p>
        </div>
      </Link>
      <div className="columns">
        <div className="column">
          <h3>Links</h3>
          <p>Home</p>
          <p>Services</p>
          <p>Projects</p>
          <p>Skills</p>
          <p>About Me</p>
          <p>Contact Me</p>
        </div>
        <div className="column">
          <h3>Contact</h3>
          <p>+383 45 209 534</p>
          <p>tahiriamir49@gmail.com</p>
          <p>Amir Tahiri</p>
        </div>
        <div className="column iconColumn">
          <AiFillInstagram className="icon" />
          <AiFillTwitterCircle className="icon" />
          <BiLogoUpwork className="icon" />
          <SiGmail className="icon" />
          <AiFillGithub className="icon" />
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background: var(--backgroundGradient3);
  display: flex;
  justify-content: space-around;
  padding: 4em 4%;
  gap: 1em;
  box-shadow: 0 0 7px 1px var(--shadowColor);
  .logo {
    img {
      width: 200px;
    }
  }
  .columns {
    display: flex;
    gap: 3em;
    h3 {
      color: var(--fontPrimaryColor);
      font-weight: 600;
      padding-bottom: 10px;
    }
    p {
      cursor: pointer;
      color: gray;
      :hover {
        color: var(--fontPrimaryColor);
      }
    }
    .iconColumn {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .icon {
        color: var(--fontPrimaryColor);
        font-size: 24px;
        cursor: pointer;
        :hover {
          color: var(--primaryColor);
          transform: scale(1.1);
        }
      }
    }
  }
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    gap: 4em;
  }
  @media (max-width: 597px) {
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .columns {
      flex-direction: column;
      text-align: center;
      .iconColumn {
        flex-direction: row;
      }
    }
  }
`;

export default Footer;
