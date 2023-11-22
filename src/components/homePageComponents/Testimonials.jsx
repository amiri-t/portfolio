import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { RiDoubleQuotesR } from "react-icons/ri";
import { motion, useAnimation, useInView } from "framer-motion";

const Testimonials = () => {
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
      <div className="topSection">
        <h1>What Clients and Collaborators Are Saying</h1>
        <p>
          My top priority on working as a web designer, is client satisfaction.
          When my clinet is happy, I'm even happier.
        </p>
      </div>
      <div className="bottomSection">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
          className="item"
        >
          <RiDoubleQuotesR className="icon" />
          <p>
            I needed a web app for my boxing club. I needed a clinets app and an
            admin app, where I could register, modify, delete etc. users. I
            found Amir on Fiverr. He had no experience at all. I wanted to hire
            him beacause he looked professional. He was very nice and took care
            of everything in an amazing way. He also did extra work. Great guy.
            Amazing job.
          </p>
          <div>
            <span>
              <h2>DongKyun Ham</h2>
              <p>First Client</p>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
          className="item"
        >
          <RiDoubleQuotesR className="icon" />
          <p>
            Even tho it wasn't the best design idea for Amir, he made it look
            good anyways. I needed to design a website for my email marketing
            business called Letter from a human. The design had to be like and
            old email app. Amir likes modern stuff, but he made my website even
            better than how I wanted it. He also made me a free logo, and free
            theme :)
          </p>
          <div>
            <span>
              <h2>Maeva Etale</h2>
              <p>Client</p>
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 1, type: "spring" }}
          className="item"
        >
          <RiDoubleQuotesR className="icon" />
          <p>
            I hired Amir like a month ago. A friend told me about him. So I
            wanted him to manage my social media content. He was amazing at
            that. Really hardworking guy. He suggested to create a website for
            my business too. Ofc I accepted. And it was great. Much easier to
            manage social media in one place. And of course, clients...never had
            more. Looking forward to work again with him.
          </p>
          <div>
            <span>
              <h2>Leon Idrizi</h2>
              <p>Client</p>
            </span>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 7%;
  background: var(--backgroundGradient4);
  .topSection {
    display: flex;
    justify-content: center;
    gap: 1em;
    h1 {
      font-size: 3em;
      font-weight: 600;
      max-width: 14em;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      margin-top: 20px;
      max-width: 30em;
      color: var(--fontSecondaryColor);
    }
  }
  .bottomSection {
    flex-wrap: wrap;
    margin-top: 3em;
    display: flex;
    justify-content: center;
    gap: 2em;
    .item {
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 1.4em;
      .icon {
        font-size: 3em;
        color: var(--fontPrimaryColor);
      }
      p {
        color: var(--fontSecondaryColor);
      }
      div {
        display: flex;
        align-items: center;
        gap: 1em;
        h2 {
          color: var(--primaryColor);
          font-size: 17px;
          font-weight: 400;
        }
        p {
          color: var(--fontSecondaryColor);
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 960px) {
    .topSection {
      h1 {
        width: 50%;
      }
      p {
        width: 50%;
      }
    }
  }
  @media (max-width: 940px) {
    padding: 0 3%;
    .bottomSection {
      .item {
        width: 300px;
      }
    }
  }
  @media (max-width: 740px) {
    padding: 0 7%;
    .bottomSection {
      gap: 5em;
      .item {
        width: 100%;
        text-align: center;
        align-items: center;
      }
    }
    .topSection {
      h1 {
        font-size: 2.7em;
      }
    }
  }
  @media (max-width: 672px) {
    .topSection {
      flex-direction: column;
      h1 {
        width: 100%;
      }
      p {
        width: 100%;
      }
    }
  }
  @media (max-width: 430px) {
    .topSection {
      flex-direction: column;
      h1 {
        font-size: 2em;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;

export default Testimonials;
