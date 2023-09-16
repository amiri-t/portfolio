import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import bannerImg from "../assets/servicesPageAssets/webDesignBannerImg.png";
import { motion, useAnimation, useInView } from "framer-motion";
import webDesignExamplesD from "../assets/servicesPageAssets/designExamplesImgD.png";
import webDesignExamplesL from "../assets/servicesPageAssets/designExamplesImgL.png";
import UIimg from "../assets/servicesPageAssets/UIimg.png";
import respImg from "../assets/servicesPageAssets/resImg.png";
import HQimg from "../assets/servicesPageAssets/HQimg.png";
import accessibilityImg from "../assets/servicesPageAssets/accessibilityImg.png";
import socialMediaImg from "../assets/servicesPageAssets/socialMediaImg.png";
import animationsImg from "../assets/servicesPageAssets/animationsImg.png";
import WebDesignBanner from "../components/servicesComponents/WebDesignBanner";
import { Link } from "react-router-dom";
import WebServices from "../components/servicesComponents/WebServices";

const WebDesignPage = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "Amir Tahiri - Web Design & Development | Portfolio";
  }, []);

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
      <WebDesignBanner />
      <div className="text">
        <h1>YOUR VISION,</h1>
        <motion.h1
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
        >
          MY CREATION!
        </motion.h1>
      </div>
      <div className="designExamples">
        <h1>
          ALL <br /> TYPES OF <br /> WEBSITES
        </h1>
        {theme === "light" ? (
          <img src={webDesignExamplesL} alt="" />
        ) : (
          <img src={webDesignExamplesD} alt="" />
        )}
      </div>
      <WebServices />
      <div className="websiteTypes">
        <div className="type">
          <div className="details">
            <h1>eCommerce Websites</h1>
            <p>
              Introducing our E-commerce Website solution, where I empower
              businesses to flourish online. Whether you're a budding
              entrepreneur or a seasoned retailer, I create robust platforms
              like Amazon and eBay to help you sell your products or services
              effectively.
            </p>
            <Link to={"/contact-me"}>
              <button>LET'S TALK</button>
            </Link>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/ecommerce-shopping-website-2162029-1819865.png"
            alt=""
          />
        </div>
        <div className="type reversed">
          <div className="details">
            <h1>Corporate Website</h1>
            <p>
              Elevate your corporate presence with my Corporate Website service.
              I design websites for businesses, showcasing your products,
              services, and corporate identity. Your online presence will
              reflect your professionalism.
            </p>
            <Link to={"/contact-me"}>
              <button>LET'S TALK</button>
            </Link>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/corporate-report-presentation-3536589-2963177.png"
            alt=""
          />
        </div>
        <div className="type">
          <div className="details">
            <h1>Portfolio Website</h1>
            <p>
              Unlock the power of personal branding with our Personal Website
              service. In an increasingly digital world, having a strong online
              presence is essential. Whether you're an aspiring influencer, a
              freelancer, or simply someone who wants to share their story,
              we're here to create a personalized online space that truly
              reflects your identity.
            </p>
            <Link to={"/contact-me"}>
              <button>LET'S TALK</button>
            </Link>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/portfolio-6772814-5624195.png"
            alt=""
          />
        </div>
        <div className="type reversed">
          <div className="details">
            <h1>Real Estate Website</h1>
            <p>
              Unlock the doors to your real estate success with our Real Estate
              Website service. Whether you're a realtor, developer, or
              homeowner, my platforms are tailored for listing and searching
              properties, homes, apartments, and real estate services.
            </p>
            <Link to={"/contact-me"}>
              <button>LET'S TALK</button>
            </Link>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/real-estate-owner-giving-key-of-property-to-customer-2974940-2477352.png"
            alt=""
          />
        </div>
        <div className="type">
          <div className="details">
            <h1>Event Website</h1>
            <p>
              Create memorable events with my Event Websites. I specialize in
              promoting and providing information about upcoming events,
              conferences, concerts, or festivals. My websites are designed to
              generate excitement and engagement, ensuring your event's success.
            </p>
            <Link to={"/contact-me"}>
              <button>LET'S TALK</button>
            </Link>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/event-management-5526385-4620528.png"
            alt=""
          />
        </div>
        <div className="type reversed">
          <div className="details">
            <h1>Travel Website</h1>
            <p>
              Embark on a journey of exploration with my Travel Websites. I
              specialize in designing and developing platforms that provide
              travelers with comprehensive information, booking services, and
              travel guides.
            </p>
            <Link to={"/contact-me"}>
              <button>LET'S TALK</button>
            </Link>
          </div>
          <img
            src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-travel-agency-background-vector-illustration-png-image_4869781.png"
            alt=""
          />
        </div>
        <div className="type">
          <div className="details">
            <h1>Blog Website</h1>
            <p>
              Embrace my Blogging service to share your thoughts and ideas with
              the world. I provide a user-friendly platform for you to publish
              articles, journals, or commentary in a chronological format,
              engaging your readers with your unique voice.
            </p>
            <Link to={"/contact-me"}>
              <button>LET'S TALK</button>
            </Link>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/blog-writer-5691580-4759512.png"
            alt=""
          />
        </div>
        <div className="type reversed">
          <div className="details">
            <h1>Custom Websites</h1>
            <p>
              If you have a websites that it's not included on the previous
              ones, I have the custom Website Services. I can desgign and
              develop completely custom websites for you tailered to your taste.
            </p>
            <Link to={"/contact-me"}>
              <button>LET'S TALK</button>
            </Link>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/web-design-3839587-3202981.png"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  color: var(--fontPrimaryColor);
  .text {
    background: var(--backgroundGradient3);
    padding: 8em 7%;
    h1 {
      font-size: 8em;
      line-height: 1em;
      font-weight: 300;
      :nth-child(2) {
        background: var(--gradientBackground);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .designExamples {
    padding: 7em 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background: var(--backgroundGradient3);
    img {
      width: 47%;
      max-width: 700px;
    }
    h1 {
      font-size: 7em;
      line-height: 1em;
      font-weight: 300;
    }
  }
  .features {
    padding: 7em 4%;
    background: var(--backgroundGradient2);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3em;
    flex-wrap: wrap;
    .feature {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 300px;
      text-align: center;
      img {
        width: 150px;
      }
      h2 {
        font-weight: 400;
      }
      p {
        font-weight: 200;
        color: var(--fontSecondaryColor);
      }
    }
  }
  .websiteTypes {
    padding: 4em 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--primaryBackgroundColor);
    .type {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2em;
      padding: 3em 3%;
      position: sticky;
      top: 4em;
      background: var(--trBackgroundColor);
      backdrop-filter: blur(20px);
      img {
        width: 47%;
      }
      .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1em;
        h1 {
          font-weight: 300;
          background: var(--gradientBackground);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          color: var(--fontSecondaryColor);
          font-weight: 300;
        }
        button {
          border: none;
          font-size: 18px;
          background: transparent;
          padding: 10px;
          margin-top: 7px;
          border-bottom: 2px solid var(--fontSecondaryColor);
          color: var(--fontSecondaryColor);
          cursor: pointer;
          transition: 0.4s;
          :hover {
            color: var(--primaryColor);
            border-bottom: 2px solid var(--primaryColor);
          }
        }
      }
    }
    .reversed {
      flex-direction: row-reverse;
    }
  }
  @media (max-width: 1150px) {
    .banner {
      padding: 2em 4%;
    }
  }
  @media (max-width: 1040px) {
    .banner {
      .left {
        h1 {
          padding-right: 4%;
          font-size: 2.7em;
        }
      }
      .bannerImg {
        width: 47%;
      }
    }
    .designExamples {
      h1 {
        font-size: 5em;
      }
    }
    .text {
      h1 {
        font-size: 7em;
      }
    }
  }
  @media (max-width: 888px) {
    .banner {
      margin-top: 2em;
      .left {
        h1 {
          font-size: 2.3em;
        }
      }
      .bannerImg {
        width: 43%;
      }
    }
    .text {
      h1 {
        font-size: 5em;
      }
    }
  }
  @media (max-width: 707px) {
    .banner {
      flex-direction: column-reverse;
      .left {
        h1 {
          font-size: 2em;
          text-align: center;
        }
        p {
          text-align: center;
        }
      }
      .bannerImg {
        width: 70%;
      }
    }
    .designExamples {
      h1 {
        font-size: 3.7em;
      }
    }
    .text {
      h1 {
        font-size: 4em;
      }
    }
    .features {
      .feature {
        width: 100%;
      }
    }
    .websiteTypes {
      gap: 7em;
      .type {
        top: 10px;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1em;
        .details {
          gap: 7px;
          align-items: center;
          h1 {
            text-align: center;
          }
          p {
            font-size: 16px;
          }
        }
        img {
          width: 90%;
        }
      }
    }
  }
  @media (max-width: 550px) {
    .designExamples {
      flex-direction: column;
      align-items: center;
      h1 {
        text-align: center;
      }
      img {
        width: 90%;
      }
    }
  }
  @media (max-width: 500px) {
    .text {
      h1 {
        font-size: 3em;
      }
    }
  }
  @media (max-width: 400px) {
    .banner {
      .left {
        h1 {
          font-size: 1.4em;
        }
      }
      .bannerImg {
        width: 90%;
      }
    }
    .designExamples {
      h1 {
        font-size: 3em;
      }
    }
  }
`;

export default WebDesignPage;
