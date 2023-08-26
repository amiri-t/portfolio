import React, { useEffect } from "react";
import styled from "styled-components";

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <div className="title">
        <h1>About Me</h1>
        <p>
          Fun fact: all this website is about me and I am still making an About
          Me page :), quite smart.
        </p>
      </div>
      <div className="items">
        <div className="item">
          <p>
            Hello, I'm Amir, a passionate and dedicated web designer and
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
        <button>HIRE ME</button>
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
`;

export default AboutMe;
