import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "styled-components";

const BrandingServices = () => {
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
      <motion.div
        className="card"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
      >
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/copywriting-5291378-4431830.png?f=webp"
          alt=""
        />
        <h2>Visual Branding</h2>
        <div className="details">
          <p>
            Create a cohesive visual identity that includes color schemes,
            typography, and design elements.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="card"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
      >
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/social-media-marketing-5463988-4568176.png"
          alt=""
        />
        <h2>Collateral Design</h2>
        <div className="details">
          <p>
            Extend the brand's identity to various collateral, such as business
            cards, letterheads, brochures, and packaging.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="card"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 0.8, type: "spring" }}
      >
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/company-branding-3678953-3092470.png"
          alt=""
        />
        <h2>Brand Messaging</h2>
        <div
          className="details"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 1.1, type: "spring" }}
        >
          <p>
            Craft a compelling brand message and positioning strategy that
            communicates the brand's unique value.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="card"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 1.4, type: "spring" }}
      >
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/creative-agency-4315065-3610799.png"
          alt=""
        />
        <h2>Rebranding</h2>
        <div className="details">
          <p>
            Offer services for rebranding existing businesses or refreshing
            outdated brand identities to stay relevant in a changing market.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="card"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 1.7, type: "spring" }}
      >
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/brand-marketing-5571484-4659647.png"
          alt=""
        />
        <h2>Brand Storytelling</h2>
        <div className="details">
          <p>
            Develop brand narratives and storytelling strategies that engage
            customers and create emotional connections with the brand.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="card"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation1}
        transition={{ duration: 0.7, delay: 2, type: "spring" }}
      >
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/ui-ux-design-5996826-4972885.png"
          alt=""
        />
        <h2>UX</h2>
        <div className="details">
          <p>
            Apply brand identity principles to enhance the user experience of
            digital products and platforms, ensuring brand consistency in all
            user interactions.
          </p>
        </div>
      </motion.div>
    </Container>
  );
};
const Container = styled.div`
  padding: 4em 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
  .card {
    width: 340px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      height: 140px;
    }
    h2 {
      font-weight: 400;
      background: var(--gradientBackground);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .details {
      margin-top: 10px;
      p {
        font-family: 300;
        color: var(--fontSecondaryColor);
      }
    }
  }
  @media (max-width: 1070px) {
    padding: 4em 2%;
  }
  @media (max-width: 870px) {
    gap: 3em 1em;
    .card {
      width: 47%;
    }
  }
  @media (max-width: 600px) {
    .card {
      width: 90%;
      img {
        height: 40%;
        width: 60%;
      }
    }
  }
`;

export default BrandingServices;
