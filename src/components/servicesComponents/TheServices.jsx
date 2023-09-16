import React from "react";
import styled from "styled-components";
import webDesignImg from "../../assets/servicesPageAssets/webDesignImg.png";
import SEOimg from "../../assets/servicesPageAssets/seoImg.png";
import emailMarketingImg from "../../assets/servicesPageAssets/emailMarketingImg.png";
import brandIdentityDesignImg from "../../assets/servicesPageAssets/brandDesignImg.png";
import socialMediaAdsImg from "../../assets/servicesPageAssets/socialMediaAdsImg.png";
import { Link } from "react-router-dom";

const TheServices = () => {
  return (
    <Container>
      <div className="services">
        <div className="service">
          <img src={webDesignImg} alt="" />
          <div>
            <h2>Web Design & Development</h2>
            <p>
              Transforming visions into captivating digital realities, I create
              websites that resonate with your target audience. With seamless
              functionality and user-centric design, your online presence
              becomes a dynamic tool for engaging potential clients and driving
              conversions.
            </p>
            <span>
              <h3>Experience:</h3>
              <h4>4+ Years</h4>
            </span>
            <div className="btns">
              <Link to={"/services/web-design"}>
                <button>DISCOVER MORE</button>
              </Link>
              <Link to={"/projects"} className="link-styles">
                <button>SEE PROJECTS</button>
              </Link>
            </div>
            <div className="keywords">
              <p>#Modern</p>
              <p>#Professional</p>
              <p>#Responsive</p>
              <p>#DynamicTool</p>
            </div>
          </div>
        </div>
        <div className="service reversed">
          <img src={SEOimg} alt="" />
          <div>
            <h2>SEO (Search Engine Optimization)</h2>
            <p>
              Elevating your online visibility, I implement strategic SEO
              techniques that ensure your website ranks higher on search
              engines. By optimizing content and structure, your business gains
              exposure to a wider audience, resulting in increased organic
              traffic and valuable client leads.
            </p>
            <span>
              <h3>Experience:</h3>
              <h4>2+ Years</h4>
            </span>
            <Link to={"/services/seo"} className="link-styles">
              <div className="btns">
                <button>DISCOVER MORE</button>
              </div>
            </Link>
            <div className="keywords">
              <p>#traffic</p>
              <p>#topResults</p>
              <p>#clients</p>
              <p>#localSEO</p>
            </div>
          </div>
        </div>
        <div className="service">
          <img src={socialMediaAdsImg} alt="" />
          <div>
            <h2>Social Media Marketing</h2>
            <p>
              Leveraging the power of social platforms, I create targeted
              campaigns that resonate with your audience. Engaging content,
              coupled with precise audience targeting, enhances brand awareness,
              generates leads, and ultimately expands your clientele.
            </p>
            <span>
              <h3>Experience:</h3>
              <h4>4+ Years</h4>
            </span>
            <Link
              to={"/services/social-media-marketing"}
              className="link-styles"
            >
              <div className="btns">
                <button>DISCOVER MORE</button>
              </div>
            </Link>
            <div className="keywords">
              <p>#socialMedia</p>
              <p>#marketing</p>
              <p>#ads</p>
              <p>#socialMediaAds</p>
            </div>
          </div>
        </div>
        <div className="service reversed">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/content-creation-4291890-3569923.png"
            alt=""
          />
          <div>
            <h2>Content Creation & Copywriting</h2>
            <p>
              Crafting compelling content tailored to your niche, I establish
              your brand as an authoritative voice. Consistent and valuable
              content not only engages your audience but also builds trust and
              credibility, driving client acquisition and brand loyalty.
            </p>
            <span>
              <h3>Experience:</h3>
              <h4>2+ Years</h4>
            </span>
            <Link to={"/services/content-creation"} className="link-styles">
              <div className="btns">
                <button>DISCOVER MORE</button>
              </div>
            </Link>
            <div className="keywords">
              <p>#contentCreation</p>
              <p>#videoEditing</p>
              <p>#posts</p>
              <p>#contentCopywriting</p>
            </div>
          </div>
        </div>
        <div className="service ">
          <img src={brandIdentityDesignImg} alt="" />
          <div>
            <h2>Brand Identity Design</h2>
            <p>
              Creating a strong and consistent brand identity that resonates
              with your audience. A cohesive brand image fosters recognition,
              trust, and loyalty, ultimately attracting new clients who align
              with your brand values.
            </p>
            <span>
              <h3>Experience:</h3>
              <h4>2+ Years</h4>
            </span>
            <Link to={"/services/branding-design"} className="link-styles">
              <div className="btns">
                <button>DISCOVER MORE</button>
              </div>
            </Link>
            <div className="keywords">
              <p>#brand</p>
              <p>#brandDesign</p>
              <p>#brandIdenity</p>
              <p>#brandDevelpment</p>
            </div>
          </div>
        </div>
        <div className="service reversed">
          <img src={emailMarketingImg} alt="" />
          <div>
            <h2>Email Marketing</h2>
            <p>
              Crafting personalized and targeted email campaigns that nurture
              leads, foster client relationships, and promote special offers.
              Email marketing keeps your brand in the forefront of clients'
              minds, resulting in higher engagement and conversions.
            </p>
            <span>
              <h3>Experience:</h3>
              <h4>1+ Year</h4>
            </span>
            <Link to={"/services/email-marketing"} className="link-styles">
              <div className="btns">
                <button>DISCOVER MORE</button>
              </div>
            </Link>
            <div className="keywords">
              <p>#email</p>
              <p>#marketing</p>
              <p>#promotions</p>
              <p>#newclients</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 0 7%;
  padding-bottom: 7em;
  background: var(--primaryBackgroundColor);
  .services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7em;
    .service {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3em;
      height: 80vh;
      position: sticky;
      top: 3em;
      background: var(--trBackgroundColor);
      backdrop-filter: blur(20px);
      width: 100%;
      padding: 20px;
      div {
        display: flex;
        flex-direction: column;
        gap: 1em;
        h2 {
          font-weight: 600;
          line-height: 1.4em;
          font-family: "Montserrat", cursive;
          background: var(--gradientBackground);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          font-family: "Comfortaa", cursive;
          line-height: 24px;
          color: var(--fontSecondaryColor);
        }
        span {
          display: flex;
          align-items: center;
          gap: 7px;
          h3 {
            font-family: "Montserrat", cursive;
            background: var(--gradientBackground);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          h4 {
            font-weight: 400;
          }
        }
        .btns {
          display: flex;
          flex-direction: row;
          gap: 7px;
          button {
            padding: 10px 14px;
            font-family: "Poppins", sans-serif;
            font-size: 15px;
            border: none;
            background: var(--fontPrimaryColor);
            color: var(--fontPrimaryColorOpp);
            cursor: pointer;
            :nth-child(2) {
              background: none;
              color: var(--fontPrimaryColor);
              border-bottom: 2px solid var(--fontPrimaryColor);
              :hover {
                background-color: var(--secondaryBackgroundColor);
              }
            }
            :hover {
              background: var(--primaryColor);
              transition: 0.3s;
            }
          }
        }
        .keywords {
          flex-direction: row;
          gap: 7px;
          flex-wrap: wrap;
          p {
            padding: 4px 10px;
            background-color: var(--secondaryBackgroundColor);
            border-radius: 1em;
          }
        }
      }
      img {
        max-width: 570px;
      }
    }
    .reversed {
      flex-direction: row-reverse;
    }
  }
  @media (max-width: 1200px) {
    .services {
      .service {
        img {
          width: 470px;
        }
      }
    }
  }
  @media (max-width: 970px) {
    .services {
      .service {
        img {
          width: 420px;
        }
      }
    }
  }
  @media (max-width: 940px) {
    .services {
      .service {
        top: 2em;
        flex-direction: column;
        height: 97vh;
        gap: 10px;
        div {
          gap: 10px;
          text-align: center;
          align-items: center;
          .keywords {
            gap: 7px;
            justify-content: center;
          }
        }
        img {
          width: 400px;
        }
      }
    }
  }
  @media (max-width: 580px) {
    padding: 0 2%;
    .services {
      .service {
        img {
          width: 90%;
        }
        div {
        }
      }
    }
  }
  @media (max-width: 500px) {
    .services {
      .service {
        padding: 4px;
        img {
          width: 80%;
        }
        div {
          h2 {
            font-size: 1.2em;
          }
          p {
            line-height: 1.2em;
          }
        }
      }
    }
  }
`;

export default TheServices;
