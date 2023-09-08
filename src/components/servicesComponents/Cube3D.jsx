import React from "react";
import styled from "styled-components";
import logo from "../../assets/AmiriLogoBlue.png";

const Cube3D = () => {
  return (
    <Container>
      <div class="cube">
        <div class="top">
          <img src={logo} alt="" />
        </div>
        <div>
          <span style={{ "--i": 0 }}>
            MODERN <br />
            UI & UX
          </span>
          <span style={{ "--i": 1 }}>USER FRIENDLY</span>
          <span style={{ "--i": 2 }}>PROFITABLE</span>
          <span style={{ "--i": 3 }}>FAST & RESPONSIVE</span>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 0 3%;
  .cube {
    position: relative;
    width: 200px;
    margin-left: 10%;
    height: 200px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animate 8s linear infinite;
    border-radius: 20px;
    div {
      position: absolute;
      border-radius: 20px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(var(--fontPrimaryColor), #6188c2);
        transform: rotateY(calc(90deg * var(--i))) translateZ(100px);
        color: var(--fontPrimaryColorOpp);
        display: flex;
        font-size: 2em;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        text-align: center;
      }
    }
  }
  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background: var(--fontPrimaryColor);
    transform: rotateX(90deg) translateZ(100px);
    img {
      width: 100%;
    }
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 200px;
      background: #5689cc;
      transform: translateZ(-240px);
      filter: blur(20px);
    }
  }
  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }
  @media (max-width: 707px) {
    margin-left: 1%;
  }
`;

export default Cube3D;
