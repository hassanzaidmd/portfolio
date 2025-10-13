import React from "react";

import "./about.css";
import profile from "../../assets/profile2.jpg";
import { Info } from "./Info";
import leetcodeLogo from "../../images/leetcode.png";
import gfg from "../../images/gfg.png";
 import CV from "../../assets/Zaid Resume.pdf";


export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={profile} alt="profile" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            👋 "Hi, my name is Mohammad Zaid Hassan, and I'm a full-stack
            developer with experience in designing, building, and deploying
            end-to-end web applications. I work across both front-end and
            back-end technologies, with a strong foundation in [ React, Node.js,
            Express, BootStrap and MongoDB]. I enjoy creating efficient,
            scalable solutions and bridging the gap between user experience and
            technical implementation. Beyond coding, I'm passionate about
            problem-solving, collaborating in teams, and continuously learning
            new tools to stay updated with industry trends.
            <br />
            <br />
            <div className="link_info">

              <a
                href="https://www.linkedin.com/in/mohammad-zaid-hassan-746b88389/"
                className="home__social-icon"
                target="blank"
              >
                <i className="uil uil-linkedin"></i>
              </a>

              <a
                href="https://leetcode.com/u/hassanzaidmd/"
                className="home__social-icon"
                target="blank"
              >
                <img
                  src={leetcodeLogo}
                  alt="leetcode"
                  className="uil"
                  style={{ height: 20 }}
                />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/hassanzcg5r/"
                className="home__social-icon"
                target="blank"
              >
                <i className="uil ">
                  <img
                    src={gfg}
                    alt=""
                    className="uil"
                    style={{ height: 20 }}
                  />
                </i>
              </a>

              <a
                href="https://github.com/hassanzaidmd"
                className="home__social-icon"
                target="blank"
              >
                <i className="uil uil-github"></i>
              </a>
            </div>
          </p>

          <a
               href={CV}
            
  
            target="_blank"
            rel="noopener noreferrer"
            className="button button--flex"
          >
            Download CV
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                fill="var(--container-color)"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
