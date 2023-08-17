import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/homePageAssets/bannerImg.png";

const Banner = () => {
  return (
    <Container>
      <div className="left">
        <h3>Hello there, my name is</h3>
        <span>
          Amir <br /> <h3 className="ln">Tahiri</h3>
        </span>
        <h1>Web Designer & Developer</h1>
      </div>
      <img src={bannerImg} alt="" />
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 3%;
  color: var(--fontPrimaryColor);
  background: var(--backgroundGradient2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  transition: 0.4s;
  .left {
    h3 {
      font-weight: 300;
    }
    span {
      font-size: 6em;
      font-weight: 900;
      line-height: 1em;
      font-family: "Montserrat", sans-serif;
      .ln {
        font-weight: 900;
        color: var(--fontSecondaryColor);
      }
    }
    h1 {
      font-size: 2em;
      font-weight: 500;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  img {
    width: 44%;
    object-fit: cover;
  }
  @media (max-width: 880px) {
    .left {
      span {
        font-size: 5em;
      }
      h1 {
        font-size: 1.7em;
      }
    }
  }
  @media (max-width: 770px) {
    flex-direction: column;
    .left {
      text-align: center;
    }
    img {
      width: 70%;
    }
  }
  @media (max-width: 560px) {
    img {
      width: 90%;
    }
  }
  @media (max-width: 400px) {
    .left {
      h1 {
        font-size: 1.4em;
      }
    }
    img {
      width: 90%;
    }
  }
`;

export default Banner;
