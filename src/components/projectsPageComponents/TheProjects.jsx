import React from "react";
import styled from "styled-components";
import asitesAgency from "../../assets/projectsPageAssets/ASites Agency.png";
import travelo from "../../assets/projectsPageAssets/Travelo.png";
import theTTT from "../../assets/projectsPageAssets/The Tasty Table.png";
import amiriSites from "../../assets/projectsPageAssets/AmiriSites.png";
import dreamDecor from "../../assets/projectsPageAssets/DreamDecor.png";
import phoneHive from "../../assets/projectsPageAssets/PhoneHive.png";
import starbucksClone from "../../assets/projectsPageAssets/Starbucks Clone.png";
import { Link } from "react-router-dom";

const TheProjects = () => {
  return (
    <Container>
      <div className="title">
        <h1>Coding Dreams, Designing Success</h1>
        <p>
          Explore projects that breathe life into business growth. Seamlessly
          blending design, development, SEO, and branding, I've empowered
          clients to captivate audiences, drive engagement, and scale
          effectively
        </p>
      </div>
      <div className="projects">
        <div className="project">
          <Link to={"/projects/asites-agency"} className="link-styles">
            <img src={asitesAgency} alt="" />
            <h2>ASites Agency</h2>
          </Link>
          <p>
            ASites Agency is my own angecy. It a service-based agency where we
            help small and medimum businesses grow online through Websites,
            Social Media, Marketing, Content Creation, Branding, etc.
          </p>
          <Link to={"/projects/asites-agency"} className="link-styles">
            <button>MORE DETAILS</button>
          </Link>
        </div>
        <div className="project">
          <Link to={"/projects/travelo"} className="link-styles">
            <img src={travelo} alt="" />
            <h2>Travelo</h2>
          </Link>
          <p>
            Travelo is a Travel Agnecy website I recently developed. I provides
            an amazing design and can 100% be used as a SaaS. I provides
            everything a travel agnecy website needs, including booking systems.
          </p>
          <Link to={"/projects/travelo"} className="link-styles">
            <button>MORE DETAILS</button>
          </Link>
        </div>

        <div className="project">
          <Link to={"/projects/amiri-sites"} className="link-styles">
            <img src={amiriSites} alt="" />
            <h2>AmiriSites</h2>
          </Link>
          <p>
            AmiriSites is a website that I created for free just to build my
            portfolio. It's an undone web app very similiar to ASites Agency.
            Provides themes, clean responsive design, authentication, etc.
          </p>
          <Link to={"/projects/amiri-sites"} className="link-styles">
            <button>MORE DETAILS</button>
          </Link>
        </div>
        <div className="project">
          <Link to={"/projects/the-tasty-table"} className="link-styles">
            <img src={theTTT} alt="" />
            <h2>The Tasty Table</h2>
          </Link>
          <p>
            The Tasty Table is a website I built only for design, it doesnt have
            any functinalities, or any backend, the client only wanted the
            design, so that's what I did. It also provides 2 themes and
            animations.
          </p>
          <Link to={"/projects/the-tasty-table"} className="link-styles">
            <button>MORE DETAILS</button>
          </Link>
        </div>
        <div className="project">
          <Link to={"/projects/dream-decor"} className="link-styles">
            <img src={dreamDecor} alt="" />
            <h2>DreamDecor</h2>
          </Link>
          <p>
            I built DreamDecor 2 years ago. It has a really minimalistic design,
            not becase I wanted to, but I didn't really know how to make cool
            design back then, but it turned out to look pretty cool :) Maybe I
            should redesign it.
          </p>
          <Link to={"/projects/dream-decor"} className="link-styles">
            <button>MORE DETAILS</button>
          </Link>
        </div>
        <div className="project">
          <Link to={"/projects/phone-hive"} className="link-styles">
            <img src={phoneHive} alt="" />
            <h2>PhoneHIVE</h2>
          </Link>
          <p>
            PhoneHIVE is the biggest website I have every built. I built it
            using React.JS and ASP.NET. The backend is very professional. It's
            the best SaaS + website that I have ever created.
          </p>
          <Link to={"/projects/phone-hive"} className="link-styles">
            <button>MORE DETAILS</button>
          </Link>
        </div>
        <div className="project">
          <Link to={"/projects/starbucks-clone"} className="link-styles">
            <img src={starbucksClone} alt="" />
            <h2>Starbucks Clone</h2>
          </Link>
          <p>
            I built that Starbucks Clone website couple of weeks after I started
            learning React.JS. Of course, I did it for free just to showcase my
            skills, even tho it's old it looks pretty nice.
          </p>
          <Link to={"/projects/starbucks-clone"} className="link-styles">
            <button>MORE DETAILS</button>
          </Link>
        </div>
        {/* <div className="project">
          <Link to={"/projects/amiri-books"} className="link-styles">
            <img src={amiriBooks} alt="" />
            <h2>AmiriBooks</h2>
          </Link>
          <p>
            Yeah, Amiri all over the place, I like my name. This website is also
            just a design website that I built only to showcase my design and
            development skills.
          </p>
          <Link to={"/projects/amiri-books"} className="link-styles">
            <button>MORE DETAILS</button>
          </Link>
        </div> */}
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 6em 4%;
  background: var(--backgroundGradient);
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
  .projects {
    padding: 4em 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 4em 2em;
    .project {
      width: 40%;
      max-width: 700px;
      img {
        width: 100%;
        cursor: pointer;
        transition: 0.4s;
        :hover {
          box-shadow: 0 0 12px 2px var(--shadowColor);
        }
      }
      h2 {
        text-align: center;
        background: var(--gradientBackground);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 500;
        cursor: pointer;
      }
      p {
        color: var(--fontSecondaryColor);
        padding: 0 10px;
        text-align: center;
      }
      button {
        border: none;
        font-size: 18px;
        background: transparent;
        padding: 10px;
        margin: auto;
        display: flex;
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
  @media (max-width: 900px) {
    padding: 6em 2%;
    .title {
      p {
        width: 97%;
      }
    }
    .projects {
      gap: 4em 1em;
      .project {
        width: 47%;
      }
    }
  }
  @media (max-width: 700px) {
    .projects {
      gap: 4em 1em;
      .project {
        width: 97%;
      }
    }
  }
`;

export default TheProjects;
