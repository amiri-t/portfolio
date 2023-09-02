import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";

const FAQ = () => {
  const [activeAnswer, setActiveAnswer] = useState(null);
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
      <div className="title">
        <h1>FAQ</h1>
        <p>
          Here some of the most important questions that clients usually ask me.
          If you have any other question, please{" "}
          <Link to={"/contact-me"} className="link-styles">
            Contact Me
          </Link>
        </p>
      </div>
      <div ref={ref} className="questions">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
          className={activeAnswer === 1 ? "active" : "row"}
          onClick={() => setActiveAnswer(activeAnswer === 1 ? null : 1)}
        >
          <span>
            <h2>Can you design custom websites or other projects?</h2>
            <MdKeyboardArrowDown className="icon" />
          </span>
          <p>
            Sure, that's what I mostly do. 80% of my previous clinets wanted
            custom websites.
          </p>
        </motion.div>

        <hr />
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
          className={activeAnswer === 3 ? "active" : "row"}
          onClick={() => setActiveAnswer(activeAnswer === 3 ? null : 3)}
        >
          <span>
            <h2>How can I get in touch with you?</h2>
            <MdKeyboardArrowDown className="icon" />
          </span>
          <p>
            You can Contact Me here anytime you want. Or contact me in any of my
            social media platforms that are provides below :).
          </p>
        </motion.div>
        <hr />
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
          className={activeAnswer === 4 ? "active" : "row"}
          onClick={() => setActiveAnswer(activeAnswer === 4 ? null : 4)}
        >
          <span>
            <h2>What types of websites do you build?</h2>
            <MdKeyboardArrowDown className="icon" />
          </span>
          <p>
            Basically any type. Most common ones I design are Full-Stack
            websites for businesses that want to grow online with a beautiful
            website. I can also create personal website, Admin Dashboard
            (Managing system), SaaS, Data websites, etc.
          </p>
        </motion.div>
        <hr />
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.9, type: "spring" }}
          className={activeAnswer === 2 ? "active" : "row"}
          onClick={() => setActiveAnswer(activeAnswer === 2 ? null : 2)}
        >
          <span>
            <h2>What do you use to design and develop your websites?</h2>
            <MdKeyboardArrowDown className="icon" />
          </span>
          <p>
            About the design I mostly use Figma. And about the development I
            mostly use React.JS with Tailwind CSS or Styled-Components, and
            about the back-end I use Firebase or ASP.NET. It all depends on the
            type of projects.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  background: var(--backgroundGradient4);
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
  .questions {
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 2em 0;
    align-items: center;
    hr {
      width: 80%;
      border: none;
      border-top: 1px solid var(--fontSecondaryColor);
    }
    .row {
      transition: 0.4s;
      height: 30px;
      width: 80%;
      cursor: pointer;
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
          color: var(--primaryColor);
          font-weight: 500;
        }
        .icon {
          font-size: 2em;
          color: var(--primaryColor);
        }
      }
      p {
        display: none;
      }
    }

    .active {
      transition: 0.4s;
      height: 80px;
      width: 80%;
      cursor: pointer;
      p {
        transition: 0.4s;
        display: flex;
        color: var(--fontSecondaryColor);
        font-weight: 300;
      }
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
          color: var(--primaryColor);
          font-weight: 500;
        }
        .icon {
          transform: rotate(180deg);
          font-size: 2em;
          color: var(--primaryColor);
        }
      }
    }
  }
  @media (max-width: 1170px) {
    .questions {
      hr {
        width: 97%;
      }
      .row {
        width: 98%;
      }
      .active {
        width: 98%;
      }
    }
  }
  @media (max-width: 955px) {
    .questions {
      .active {
        height: 90px;
        p {
          line-height: 20px;
        }
      }
    }
  }
  @media (max-width: 955px) {
    .questions {
      .row {
        h2 {
          font-size: 1.4em;
        }
      }
      .active {
        width: 98%;
        height: 90px;
        h2 {
          font-size: 1.4em;
        }
        p {
          line-height: 20px;
        }
      }
    }
  }
  @media (max-width: 720px) {
    .questions {
      .active {
        height: 100px;
      }
    }
  }
  @media (max-width: 680px) {
    .questions {
      .row {
        height: 40px;
        h2 {
          line-height: 24px;
        }
      }
      .active {
        height: 100px;
        h2 {
          line-height: 24px;
        }
      }
    }
  }
  @media (max-width: 540px) {
    .questions {
      .active {
        height: 110px;
        p {
          line-height: 18px;
        }
      }
    }
  }
  @media (max-width: 475px) {
    .questions {
      .active {
        height: 130px;
        p {
          line-height: 18px;
        }
      }
    }
  }
  @media (max-width: 425px) {
    .questions {
      .row {
        h2 {
          font-size: 1.2em;
        }
      }
      .active {
        height: 140px;
        h2 {
          font-size: 1.2em;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
  @media (max-width: 365px) {
    .questions {
      .row {
        h2 {
          font-size: 1.2em;
        }
      }
      .active {
        height: 160px;
        h2 {
          font-size: 1.2em;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export default FAQ;
