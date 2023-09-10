import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "styled-components";

const SEOServices = () => {
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
      <div className="services">
        <motion.div
          className="service"
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        >
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/seo-tag-8271106-6649168.png?f=webp"
            alt=""
          />
          <h2>SEO</h2>
          <p>
            Unlock the power of SEO to enhance your online visibility. My
            strategic optimization techniques will boost your website's ranking,
            driving organic traffic and increasing conversions.
          </p>
        </motion.div>
        <motion.div
          className="service"
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
        >
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/traffic-chart-5617611-4674322.png?f=webp"
            alt=""
          />
          <h2>STRATEGY</h2>
          <p>
            My strategic expertise is the cornerstone of digital success. I
            craft customized strategies that align with your goals, optimizing
            every facet of your online presence.
          </p>
        </motion.div>
        <motion.div
          className="service"
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 1, type: "spring" }}
        >
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/search-keyword-5617623-4674334.png?f=webp"
            alt=""
          />
          <h2>KEYWORD RESEARCH</h2>
          <p>
            Harness the potential of the right keywords. My meticulous research
            ensures your content aligns with what your audience is searching
            for, maximizing your reach and relevance.
          </p>
        </motion.div>
        <motion.div
          className="service"
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 1.3, type: "spring" }}
        >
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/ppc-8113746-6497274.png?f=webp"
            alt=""
          />
          <h2>PAY-PER-CLICK ADS</h2>
          <p>
            Drive immediate results with targeted pay-per-click advertising
            campaigns. I craft compelling ad strategies that capture the
            attention of your audience and deliver measurable ROI.
          </p>
        </motion.div>
        <motion.div
          className="service"
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 1.6, type: "spring" }}
        >
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/online-reputation-9466772-7746962.png"
            alt=""
          />
          <h2>Online Reputation Management</h2>
          <p>
            Safeguard your brand's image online. We monitor and manage your
            online reputation, addressing feedback and maintaining a positive
            digital presence.
          </p>
        </motion.div>
        <motion.div
          className="service"
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 1.9, type: "spring" }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/026/880/922/original/sleek-3d-seo-illustration-on-a-mobile-device-representing-digital-marketing-perfect-for-showcasing-mobile-optimization-and-search-engine-strategies-free-png.png"
            alt=""
          />
          <h2>MOBILE OPTIMIZATION</h2>
          <p>
            SEO on any device. My mobile optimization strategies guarantee that
            your website functions flawlessly on smartphones and tablets,
            enhancing user engagement.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  .services {
    padding: 7em 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2em;
    .service {
      width: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      border-radius: 20px;
      padding: 15px;
      box-shadow: 12px 12px 17px var(--shadowColor1),
        -12px -12px 17px var(--shadowColor2);
      img {
        width: 130px;
      }
      h2 {
        font-weight: 500;
        background: var(--gradientBackground);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        color: var(--fontSecondayColor);
        font-weight: 300;
      }
    }
  }
  @media (max-width: 770px) {
    .services {
      .service {
        width: 90%;
      }
    }
  }
`;

export default SEOServices;
