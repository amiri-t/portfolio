import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "styled-components";

const CCServices = () => {
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
        <h2>Website Copywriting</h2>
        <div className="details">
          <li>Engaging website content creation.</li>
          <li>Clear and persuasive messaging.</li>
          <li>Effective calls to action.</li>
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
        <h2>Social Media Content</h2>
        <div className="details">
          <li>Posts and captions.</li>
          <li>Social media calendars.</li>
          <li>Ad copy.</li>
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
          src="https://cdn3d.iconscout.com/3d/premium/thumb/movie-script-8427532-6704163.png?f=webp"
          alt=""
        />
        <h2>Video Scripts</h2>
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
          <li>Explainer, corporate, and tutorial video scripts.</li>
          <li>Visual storyboarding for video content.</li>
          <li>Social Media script optimization.</li>
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
          src="https://cdn3d.iconscout.com/3d/premium/thumb/pay-per-click-5291376-4431828.png?f=webp"
          alt=""
        />
        <h2>Product Descriptions</h2>
        <div className="details">
          <li>SEO optimization for product visibility.</li>
          <li>Compelling e-commerce descriptions that drive sales.</li>
          <li>Concise and persuasive product narratives.</li>
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
          src="https://cdn3d.iconscout.com/3d/premium/thumb/movie-script-4843374-4060940.png"
          alt=""
        />
        <h2>Email Marketing</h2>
        <div className="details">
          <li>Email copywriting.</li>
          <li>Campaign strategy.</li>
          <li>Newsletter content.</li>
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
          src="https://cdn3d.iconscout.com/3d/premium/thumb/copywriting-7378850-6041264.png"
          alt=""
        />
        <h2>Blog Writing</h2>
        <div className="details">
          <li>Regular blog posts.</li>
          <li>SEO-optimized articles.</li>
          <li>Content strategy.</li>
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
        transition={{ duration: 0.7, delay: 2.3, type: "spring" }}
      >
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/review-8868892-7310755.png?f=webp"
          alt=""
        />
        <h2>Content Optimization</h2>
        <div className="details">
          <li>SEO content audits and research.</li>
          <li>Improving readability and user experience.</li>
          <li>Enhancing existing content for relevance.</li>
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
        transition={{ duration: 0.7, delay: 2.6, type: "spring" }}
      >
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/approve-document-4810437-4003140.png"
          alt=""
        />
        <h2>Case Studies & Whitepapers</h2>
        <div className="details">
          <li>In-depth case studies for showcasing success.</li>
          <li>Informative whitepapers for thought leadership.</li>
          <li>Data-driven research and analysis.</li>
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
        transition={{ duration: 0.7, delay: 2.9, type: "spring" }}
      >
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/check-list-3943200-3312409.png?f=webp"
          alt=""
        />
        <h2>Editing and Proofreading</h2>
        <div className="details">
          <li>Content refinement for clarity.</li>
          <li>Grammar and style checks.</li>
          <li>Polishing written material for professionalism.</li>
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
      li {
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

export default CCServices;
