import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = ({ theme, switchTheme }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const [activeTab, setActiveTab] = useState("home");
  return (
    <Container>
      <Link to={"/"} className="link-styles">
        <h1 className="name">
          Amir <span>Tahiri</span>
        </h1>
      </Link>
      <ul
        onClick={handleToggle}
        className={toggle ? "nav-menu active" : "nav-menu"}
      >
        <Link to={"/"} className="link-styles">
          <li
            className={activeTab === "home" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("home")}
          >
            Home
          </li>
        </Link>
        <li
          className={activeTab === "destinations" ? "activeTab" : "nonActive"}
          onClick={() => setActiveTab("destinations")}
        >
          Services
        </li>
        <li
          className={activeTab === "about-us" ? "activeTab" : "nonActive"}
          onClick={() => setActiveTab("about-us")}
        >
          Projects
        </li>
        <li
          className={activeTab === "packages" ? "activeTab" : "nonActive"}
          onClick={() => setActiveTab("packages")}
        >
          Skills
        </li>
        <li
          className={activeTab === "about-us" ? "activeTab" : "nonActive"}
          onClick={() => setActiveTab("about-us")}
        >
          About Me
        </li>

        <Link to={"/contact-us"} className="link-styles">
          <li
            className={activeTab === "contact-us" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("contact-us")}
          >
            Contact Me
          </li>
        </Link>
        <div className="toggleTheme" onClick={switchTheme}>
          {theme === "dark" ? (
            <BsFillSunFill style={{ color: "white" }} className="themeIcon" />
          ) : (
            <BsMoonFill style={{ color: "#5e5c5c" }} className="themeIcon" />
          )}
        </div>
      </ul>
      <div className="mobile-menu" onClick={handleToggle}>
        {toggle ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </Container>
  );
};
const Container = styled.div`
  background-color: var(--trBackgroundColor);
  color: var(--fontPrimaryColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 4%;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  z-index: 100;
  overflow-x: visible;
  transition: 0.2s;
  .name {
    font-weight: 500;
    span {
      color: var(--primaryColor);
    }
  }
  .nav-menu {
    display: flex;
    gap: 37px;
    list-style: none;
    align-items: center;
    li {
      transition: 0.3s;
      cursor: pointer;
      :hover {
        color: var(--primaryColor);
      }
    }
    .activeTab {
      color: var(--primaryColor);
      font-weight: 600;
    }
    .buttons {
      display: flex;
      gap: 7px;
      button {
        padding: 10px 14px;
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        border: none;
        background: var(--fontPrimaryColor);
        color: var(--fontPrimaryColorOpp);
        border-radius: 7px;
        cursor: pointer;
        :hover {
          background: var(--primaryColor);
          transition: 0.3s;
        }
      }
    }
  }
  .themeIcon {
    font-size: 25px;
    margin-top: 7px;
    transition: 0.3s;
    cursor: pointer;
    :hover {
      color: var(--primaryColor);
    }
  }
  .mobile-menu {
    position: absolute;
    right: 5%;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    display: none;
    margin-top: 7px;
    :hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 1004px) {
    .nav-menu {
      color: var(--fontPrimaryColor);
      background: var(--backgroundGradient2);
      width: 70%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 10%;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0%;
      right: -100%;
      transition: 0.3s;
      z-index: 99;
      border-left: 1px solid var(--fontSecondaryColor);
    }
    .mobile-menu {
      display: block;
      z-index: 99;
    }
    .nav-menu.active {
      right: 0%;
    }
  }

  @media (max-width: 500px) {
    .logo {
      width: 120px;
    }
  }
  @media (max-width: 370px) {
    .nav-menu {
      width: 98%;
    }
  }
`;

export default Navbar;
