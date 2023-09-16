import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import img from "../../assets/homePageAssets/skillsImg.png";
import CV from "../../assets/CV.pdf";
import { AiOutlineCheck } from "react-icons/ai";
import { motion, useAnimation, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);

  return (
    <Container>
      <img src={img} alt="" />
      <motion.div
        ref={ref}
        className="right"
        variants={{
          hidden: { opacity: 0, x: 180 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
      >
        <h2 className="title">My Programming Skills</h2>
        <div className="rows">
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>React.JS</h3>
            <span>
              <div></div>
            </span>
            <h4>99%</h4>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>HTML & CSS</h3>
            <span>
              <div></div>
            </span>
            <h4>98%</h4>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>JavaScript</h3>
            <span>
              <div></div>
            </span>
            <h4>94%</h4>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Firebase</h3>
            <span>
              <div></div>
            </span>
            <h4>88%</h4>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>.NET</h3>
            <span>
              <div></div>
            </span>
            <h4>80%</h4>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Tailwind CSS</h3>
            <span>
              <div></div>
            </span>
            <h4>95%</h4>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Bootstrap</h3>
            <span>
              <div></div>
            </span>
            <h4>96%</h4>
          </div>
          <div className="row">
            <AiOutlineCheck className="icon" />
            <h3>Styled-Co.</h3>
            <span>
              <div></div>
            </span>
            <h4>98%</h4>
          </div>
        </div>
        <button>
          <a href={CV} download={"amiri-cv.pdf"} className="link-styles">
            DOWNLOAD CV
          </a>
        </button>
      </motion.div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  background: var(--backgroundGradient3);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4em;
  img {
    width: 40%;
    max-width: 600px;
  }
  .right {
    width: 40%;
    .title {
      font-family: "Comfortaa", cursive;
      margin-bottom: 1em;
    }
    .rows {
      display: flex;
      flex-direction: column;
      .row {
        display: flex;
        align-items: center;
        gap: 1em;
        width: 100%;
        .icon {
          color: green;
          font-size: 1.4em;
        }
        h3 {
          width: 150px;
          font-weight: 400;
        }
        h4 {
          font-weight: 400;
        }
        span {
          border-radius: 4px;
          width: 240px;
          height: 10px;
          background-color: gray;
          div {
            border-radius: 4px;
            background-color: #28b828;
            height: 10px;
            width: 237px;
          }
        }
        :nth-child(2) {
          span {
            width: 240px;
            div {
              width: 236px;
            }
          }
        }
        :nth-child(3) {
          span {
            width: 240px;
            div {
              width: 228px;
            }
          }
        }
        :nth-child(4) {
          span {
            width: 240px;
            div {
              width: 220px;
            }
          }
        }
        :nth-child(5) {
          span {
            width: 240px;
            div {
              width: 210px;
            }
          }
        }
        :nth-child(6) {
          span {
            width: 240px;
            div {
              width: 230px;
            }
          }
        }
        :nth-child(7) {
          span {
            width: 240px;
            div {
              width: 233px;
            }
          }
        }
        :nth-child(8) {
          span {
            width: 240px;
            div {
              width: 236px;
            }
          }
        }
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
      :hover {
        background: var(--secondaryBackgroundColor);
      }
    }
  }
  @media (max-width: 1270px) {
    .right {
      width: 54%;
    }
  }
  @media (max-width: 940px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      display: none;
    }
    .title {
      text-align: center;
    }
    .right {
      width: 74%;
    }
    button {
      display: flex;
      margin: auto;
    }
  }
  @media (max-width: 720px) {
    .right {
      width: 90%;
    }
  }
  @media (max-width: 580px) {
    padding: 7em 1%;
    .right {
      width: 99%;
    }
  }
  @media (max-width: 500px) {
    padding: 7em 1%;
    .right {
      width: 99%;
      .rows {
        .row {
          h3 {
            width: 120px;
          }
          span {
            width: 170px;
            div {
              width: 170px;
            }
          }
          :nth-child(2) {
            span {
              width: 170px;
              div {
                width: 168px;
              }
            }
          }
          :nth-child(3) {
            span {
              width: 170px;
              div {
                width: 163px;
              }
            }
          }
          :nth-child(4) {
            span {
              width: 170px;
              div {
                width: 158px;
              }
            }
          }
          :nth-child(5) {
            span {
              width: 170px;
              div {
                width: 150px;
              }
            }
          }
          :nth-child(6),
          :nth-child(7),
          :nth-child(8) {
            span {
              width: 170px;
              div {
                width: 166px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 400px) {
    .right {
      .rows {
        gap: 2em;
        .row {
          flex-direction: column;
          gap: 4px;
          span {
            width: 90%;
            div {
              width: 99%;
            }
          }
          :nth-child(2) {
            span {
              width: 90%;
              div {
                width: 98%;
              }
            }
          }
          :nth-child(3) {
            span {
              width: 90%;
              div {
                width: 94%;
              }
            }
          }
          :nth-child(4) {
            span {
              width: 90%;
              div {
                width: 88%;
              }
            }
          }
          :nth-child(5) {
            span {
              width: 90%;
              div {
                width: 80%;
              }
            }
          }
          :nth-child(6),
          :nth-child(7) {
            span {
              width: 90%;
              div {
                width: 95%;
              }
            }
          }
          :nth-child(8) {
            span {
              width: 90%;
              div {
                width: 98%;
              }
            }
          }
        }
      }
    }
  }
`;

export default Skills;
