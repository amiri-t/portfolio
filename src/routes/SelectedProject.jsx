import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../routes/projects/projectsData";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const SelectedProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title = "Amir Tahiri - Project | Portfolio";
  }, []);
  const {
    aSitesAgencyData,
    traveloData,
    amiriSitesData,
    theTastyTableData,
    dreamDecorData,
    phoneHiveData,
    starbucksCloneData,
  } = data;
  const { projectId } = useParams();
  return (
    <Container>
      <>
        {aSitesAgencyData
          .filter((item) => item.projectId === projectId)
          .map((card) => (
            <div>
              <div className="topSection">
                <motion.img
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: -400, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="mainImg"
                  src={card.mainImg}
                  alt=""
                />
                <motion.div
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: 200, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="details"
                >
                  <h2>{card.name}</h2>
                  <p>{card.description}</p>
                  <div>
                    <h3>Availability:</h3>
                    <span>{card.availability}</span>
                  </div>
                  <div>
                    <h3>Completition:</h3>
                    <span>{card.completition}</span>
                  </div>
                  <div>
                    <h3>Backend:</h3>
                    <span>{card.backend}</span>
                  </div>
                  <div>
                    <h3>Theme:</h3>
                    <span>{card.theme}</span>
                  </div>
                  <button>LET'S TALK</button>
                </motion.div>
              </div>
              <p className="note">
                NOTE: All of my websites are 100% responsive to any type of
                device and built with the newest technologies, frameworks,
                libraries and apps, and you Contact Me if you wanna talk about
                any of them or even custom projects.
              </p>
              <div className="designDevDesc">
                <motion.div className="item">
                  <h3>Design</h3>
                  <p>{card.designDesc}</p>
                </motion.div>
                <div className="item">
                  <h3>Development</h3>
                  <p>{card.developmentDesc}</p>
                </div>
              </div>
              <div className="bottomDetails">
                <div className="item">
                  <img src={card.bannerImg} alt="" />
                  <p>{card.text1}</p>
                </div>
                <div className="keywords">
                  <h1>MODERN.</h1>
                  <h2>PROFESSIONAL.</h2>
                  <h1>RESPONSIVE.</h1>
                  <h2>FUNCTIONAL.</h2>
                  <h1>CLEAN.</h1>
                  <h2>SaaS.</h2>
                  <h1>CUSTOM.</h1>
                </div>
                <Swiper
                  speed={600}
                  parallax={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="swiper"
                >
                  <SwiperSlide className="slide">
                    <img src={card.mainImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.bannerImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img3} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img4} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img5} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          ))}
        {traveloData
          .filter((item) => item.projectId === projectId)
          .map((card) => (
            <div>
              <div className="topSection">
                <motion.img
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: -400, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="mainImg"
                  src={card.mainImg}
                  alt=""
                />
                <motion.div
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: 200, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="details"
                >
                  <h2>{card.name}</h2>
                  <p>{card.description}</p>
                  <div>
                    <h3>Availability:</h3>
                    <span>{card.availability}</span>
                  </div>
                  <div>
                    <h3>Completition:</h3>
                    <span>{card.completition}</span>
                  </div>
                  <div>
                    <h3>Backend:</h3>
                    <span>{card.backend}</span>
                  </div>
                  <div>
                    <h3>Theme:</h3>
                    <span>{card.theme}</span>
                  </div>
                  <button>LET'S TALK</button>
                </motion.div>
              </div>
              <p className="note">
                NOTE: All of my websites are 100% responsive to any type of
                device and built with the newest technologies, frameworks,
                libraries and apps, and you Contact Me if you wanna talk about
                any of them or even custom projects.
              </p>
              <div className="designDevDesc">
                <div className="item">
                  <h3>Design</h3>
                  <p>{card.designDesc}</p>
                </div>
                <div className="item">
                  <h3>Development</h3>
                  <p>{card.developmentDesc}</p>
                </div>
              </div>
              <div className="bottomDetails">
                <div className="item">
                  <img src={card.bannerImg} alt="" />
                  <p>{card.text1}</p>
                </div>
                <div className="keywords">
                  <h2>PROFESSIONAL.</h2>
                  <h1>MODERN.</h1>
                  <h2>FUNCTIONAL.</h2>
                  <h1>CLEAN.</h1>
                  <h2>SaaS.</h2>
                  <h1>RESPONSIVE.</h1>
                  <h2>CUSTOM.</h2>
                </div>
                <Swiper
                  speed={600}
                  parallax={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="swiper"
                >
                  <SwiperSlide className="slide">
                    <img src={card.mainImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.bannerImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img3} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img4} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img5} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img6} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img7} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          ))}
        {amiriSitesData
          .filter((item) => item.projectId === projectId)
          .map((card) => (
            <div>
              <div className="topSection">
                <motion.img
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: -400, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="mainImg"
                  src={card.mainImg}
                  alt=""
                />
                <motion.div
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: 200, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="details"
                >
                  <h2>{card.name}</h2>
                  <p>{card.description}</p>
                  <div>
                    <h3>Availability:</h3>
                    <span>{card.availability}</span>
                  </div>
                  <div>
                    <h3>Completition:</h3>
                    <span>{card.completition}</span>
                  </div>
                  <div>
                    <h3>Backend:</h3>
                    <span>{card.backend}</span>
                  </div>
                  <div>
                    <h3>Theme:</h3>
                    <span>{card.theme}</span>
                  </div>
                  <button>LET'S TALK</button>
                </motion.div>
              </div>
              <p className="note">
                NOTE: All of my websites are 100% responsive to any type of
                device and built with the newest technologies, frameworks,
                libraries and apps, and you Contact Me if you wanna talk about
                any of them or even custom projects.
              </p>
              <div className="designDevDesc">
                <div className="item">
                  <h3>Design</h3>
                  <p>{card.designDesc}</p>
                </div>
                <div className="item">
                  <h3>Development</h3>
                  <p>{card.developmentDesc}</p>
                </div>
              </div>
              <div className="bottomDetails">
                <div className="item">
                  <img src={card.bannerImg} alt="" />
                  <p>{card.text1}</p>
                </div>
                <div className="keywords">
                  <h2>PROFESSIONAL.</h2>
                  <h1>MODERN.</h1>
                  <h2>FUNCTIONAL.</h2>
                  <h1>CLEAN.</h1>
                  <h2>SaaS.</h2>
                  <h1>RESPONSIVE.</h1>
                  <h2>CUSTOM.</h2>
                </div>
                <Swiper
                  speed={600}
                  parallax={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="swiper"
                >
                  <SwiperSlide className="slide">
                    <img src={card.mainImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.bannerImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img3} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img4} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img5} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img6} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          ))}
        {theTastyTableData
          .filter((item) => item.projectId === projectId)
          .map((card) => (
            <div>
              <div className="topSection">
                <motion.img
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: -400, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="mainImg"
                  src={card.mainImg}
                  alt=""
                />
                <motion.div
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: 200, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="details"
                >
                  <h2>{card.name}</h2>
                  <p>{card.description}</p>
                  <div>
                    <h3>Availability:</h3>
                    <span>{card.availability}</span>
                  </div>
                  <div>
                    <h3>Completition:</h3>
                    <span>{card.completition}</span>
                  </div>
                  <div>
                    <h3>Theme:</h3>
                    <span>{card.theme}</span>
                  </div>
                  <button>LET'S TALK</button>
                </motion.div>
              </div>
              <p className="note">
                NOTE: All of my websites are 100% responsive to any type of
                device and built with the newest technologies, frameworks,
                libraries and apps, and you Contact Me if you wanna talk about
                any of them or even custom projects.
              </p>
              <div className="designDevDesc">
                <div className="item">
                  <h3>Design</h3>
                  <p>{card.designDesc}</p>
                </div>
                <div className="item">
                  <h3>Development</h3>
                  <p>{card.developmentDesc}</p>
                </div>
              </div>
              <div className="bottomDetails">
                <div className="item">
                  <img src={card.bannerImg} alt="" />
                  <p>{card.text1}</p>
                </div>
                <div className="keywords">
                  <h2>PROFESSIONAL.</h2>
                  <h1>MODERN.</h1>
                  <h2>FUNCTIONAL.</h2>
                  <h1>CLEAN.</h1>
                  <h2>SaaS.</h2>
                  <h1>RESPONSIVE.</h1>
                  <h2>CUSTOM.</h2>
                </div>
                <Swiper
                  speed={600}
                  parallax={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="swiper"
                >
                  <SwiperSlide className="slide">
                    <img src={card.mainImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.bannerImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img3} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img4} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img5} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img6} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          ))}
        {dreamDecorData
          .filter((item) => item.projectId === projectId)
          .map((card) => (
            <div>
              <div className="topSection">
                <motion.img
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: -400, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="mainImg"
                  src={card.mainImg}
                  alt=""
                />
                <motion.div
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: 200, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="details"
                >
                  <h2>{card.name}</h2>
                  <p>{card.description}</p>
                  <div>
                    <h3>Availability:</h3>
                    <span>{card.availability}</span>
                  </div>
                  <div>
                    <h3>Completition:</h3>
                    <span>{card.completition}</span>
                  </div>
                  <div>
                    <h3>Backend:</h3>
                    <span>{card.backend}</span>
                  </div>
                  <div>
                    <h3>Theme:</h3>
                    <span>{card.theme}</span>
                  </div>
                  <button>LET'S TALK</button>
                </motion.div>
              </div>
              <p className="note">
                NOTE: All of my websites are 100% responsive to any type of
                device and built with the newest technologies, frameworks,
                libraries and apps, and you Contact Me if you wanna talk about
                any of them or even custom projects.
              </p>
              <div className="designDevDesc">
                <div className="item">
                  <h3>Design</h3>
                  <p>{card.designDesc}</p>
                </div>
                <div className="item">
                  <h3>Development</h3>
                  <p>{card.developmentDesc}</p>
                </div>
              </div>
              <div className="bottomDetails">
                <div className="item">
                  <img src={card.bannerImg} alt="" />
                  <p>{card.text1}</p>
                </div>
                <div className="keywords">
                  <h1>MODERN.</h1>
                  <h1>CLEAN.</h1>
                  <h1>RESPONSIVE.</h1>
                  <h2>FUNCTIONAL.</h2>
                  <h2>PROFESSIONAL.</h2>
                  <h2>SaaS.</h2>
                  <h2>CUSTOM.</h2>
                </div>
                <Swiper
                  speed={600}
                  parallax={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="swiper"
                >
                  <SwiperSlide className="slide">
                    <img src={card.mainImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.bannerImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img3} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img4} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img5} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img6} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img7} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          ))}
        {phoneHiveData
          .filter((item) => item.projectId === projectId)
          .map((card) => (
            <div>
              <div className="topSection">
                <motion.img
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: -400, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="mainImg"
                  src={card.mainImg}
                  alt=""
                />
                <motion.div
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: 200, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="details"
                >
                  <h2>{card.name}</h2>
                  <p>{card.description}</p>
                  <div>
                    <h3>Availability:</h3>
                    <span>{card.availability}</span>
                  </div>
                  <div>
                    <h3>Completition:</h3>
                    <span>{card.completition}</span>
                  </div>
                  <div>
                    <h3>Backend:</h3>
                    <span>{card.backend}</span>
                  </div>
                  <div>
                    <h3>Theme:</h3>
                    <span>{card.theme}</span>
                  </div>
                  <button>LET'S TALK</button>
                </motion.div>
              </div>
              <p className="note">
                NOTE: All of my websites are 100% responsive to any type of
                device and built with the newest technologies, frameworks,
                libraries and apps, and you Contact Me if you wanna talk about
                any of them or even custom projects.
              </p>
              <div className="designDevDesc">
                <div className="item">
                  <h3>Design</h3>
                  <p>{card.designDesc}</p>
                </div>
                <div className="item">
                  <h3>Development</h3>
                  <p>{card.developmentDesc}</p>
                </div>
              </div>
              <div className="bottomDetails">
                <div className="item">
                  <img src={card.bannerImg} alt="" />
                  <p>{card.text1}</p>
                </div>
                <div className="keywords">
                  <h1>MODERN.</h1>
                  <h1>CLEAN.</h1>
                  <h1>RESPONSIVE.</h1>
                  <h2>FUNCTIONAL.</h2>
                  <h2>PROFESSIONAL.</h2>
                  <h2>SaaS.</h2>
                  <h2>CUSTOM.</h2>
                </div>
                <Swiper
                  speed={600}
                  parallax={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="swiper"
                >
                  <SwiperSlide className="slide">
                    <img src={card.mainImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.bannerImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img3} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img4} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img5} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img6} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img7} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          ))}
        {starbucksCloneData
          .filter((item) => item.projectId === projectId)
          .map((card) => (
            <div>
              <div className="topSection">
                <motion.img
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: -400, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="mainImg"
                  src={card.mainImg}
                  alt=""
                />
                <motion.div
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: 200, opacity: 0 }}
                  transition={{ duration: 1, bounce: 0.3, type: "spring" }}
                  className="details"
                >
                  <h2>{card.name}</h2>
                  <p>{card.description}</p>
                  <div>
                    <h3>Availability:</h3>
                    <span>{card.availability}</span>
                  </div>
                  <div>
                    <h3>Completition:</h3>
                    <span>{card.completition}</span>
                  </div>
                  <div>
                    <h3>Backend:</h3>
                    <span>{card.backend}</span>
                  </div>
                  <div>
                    <h3>Theme:</h3>
                    <span>{card.theme}</span>
                  </div>
                  <button>LET'S TALK</button>
                </motion.div>
              </div>
              <p className="note">
                NOTE: All of my websites are 100% responsive to any type of
                device and built with the newest technologies, frameworks,
                libraries and apps, and you Contact Me if you wanna talk about
                any of them or even custom projects.
              </p>
              <div className="designDevDesc">
                <div className="item">
                  <h3>Design</h3>
                  <p>{card.designDesc}</p>
                </div>
                <div className="item">
                  <h3>Development</h3>
                  <p>{card.developmentDesc}</p>
                </div>
              </div>
              <div className="bottomDetails">
                <div className="item">
                  <img src={card.bannerImg} alt="" />
                  <p>{card.text1}</p>
                </div>
                <div className="keywords">
                  <h1>MODERN.</h1>
                  <h1>CLEAN.</h1>
                  <h1>RESPONSIVE.</h1>
                  <h2>FUNCTIONAL.</h2>
                  <h2>PROFESSIONAL.</h2>
                  <h2>SaaS.</h2>
                  <h2>CUSTOM.</h2>
                </div>
                <Swiper
                  speed={600}
                  parallax={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="swiper"
                >
                  <SwiperSlide className="slide">
                    <img src={card.mainImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.bannerImg} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img2} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img3} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img4} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img5} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img6} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="slide">
                    <img src={card.img7} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          ))}
      </>
    </Container>
  );
};
const Container = styled.div`
  color: var(--fontPrimaryColor);
  background: var(--primaryBackgroundColor);
  div {
    .topSection {
      padding: 7em 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2em;
      img {
        width: 50%;
        max-width: 880px;
      }
      .details {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
        h2 {
          font-family: "Comfortaa", cursive;
          font-weight: 800;
          background: var(--gradientBackground);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          color: var(--fontSecondaryColor);
          font-family: "Comfortaa", cursive;
          font-weight: 300;
          line-height: 20px;
        }
        div {
          margin-left: 1em;
          display: flex;
          align-items: center;
          gap: 8px;
          h3 {
            font-weight: 600;
            background: var(--gradientBackground);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          span {
            font-size: 18px;
            font-weight: 300;
            color: var(--fontSecondaryColor);
          }
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
    .note {
      text-align: center;
      font-size: 16px;
      color: var(--fontSecondaryColor);
      width: 60%;
      margin: auto;
    }
    .designDevDesc {
      display: flex;
      padding: 7em 7%;
      gap: 2em;
      .item {
        width: 44%;
        max-width: 700px;
        h3 {
          font-weight: 600;
          background: var(--gradientBackground);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          color: var(--fontSecondaryColor);
          font-family: "Comfortaa", cursive;
          line-height: 2em;
        }
      }
    }
    .bottomDetails {
      padding: 7em 4%;
      .item {
        margin: 4em 0;
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
        img {
          width: 80%;
        }
        p {
          text-align: center;
          width: 80%;
        }
      }
      .keywords {
        margin: 7em 0;
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        justify-content: center;
        align-items: end;
        h1 {
          font-size: 4em;
          font-weight: 800;
          background: var(--gradientBackground);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        h2 {
          background: var(--gradientBackground2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 3em;
        }
      }
      .swiper {
        width: 100%;
        .slide {
          display: flex;
          justify-content: center;
          img {
            width: 90%;
          }
        }
      }
    }
  }
  @media (max-width: 980px) {
    div {
      .topSection {
        flex-direction: column;
        img {
          width: 70%;
        }
        .details {
          align-items: center;
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 900px) {
    div {
      .bottomDetails {
        .keywords {
          margin: 7em 3%;
          gap: 1px 2em;
          h1 {
          }
        }
      }
    }
  }
  @media (max-width: 770px) {
    div {
      .topSection {
        img {
          width: 90%;
        }
      }
      .note {
        width: 90%;
      }
      .keywords {
        flex-direction: column;
        h1 {
          font-size: 3em;
        }
      }
    }
  }
  @media (max-width: 550px) {
    .designDevDesc {
      width: 100%;
      flex-direction: column;
      .item {
        width: 100%;
        p {
          width: 400px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    div {
      .topSection {
        img {
          width: 97%;
        }
        .details {
          align-items: flex-start;
          text-align: left;
          div {
            margin-left: 0px;
          }
          button {
            align-self: center;
          }
        }
      }
      .designDevDesc {
        .item {
          width: 100%;
          p {
            width: auto;
          }
        }
      }
      .bottomDetails {
        .keywords {
          h1 {
            font-size: 2.8em;
            font-weight: 800;
            background: var(--gradientBackground);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          h2 {
            font-size: 2em;
          }
        }
      }
    }
  }
`;

export default SelectedProject;
