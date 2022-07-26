import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineArrowDown } from "react-icons/ai";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__text">
        <span className="hero__span">Hello World,</span>
        <span className="hero__title"> I'm Shadq</span>
        <p className="hero__paragraph">
          Im a 13 years old full-stack dev, with over 3 years of experience.
          <br />
          Html, Css, ReactJs, Express, GraphQL, MongoDB,
        </p>
        <div className="hero__links">
          <span className="hero__icons">
            <AiFillGithub />
          </span>
          <span className="hero__icons">
            <FaDiscord />
          </span>
          <span className="hero__icons">
            <SiGmail />
          </span>
        </div>
      </div>
      <div className="hero__arrow__container">
        <h1>
          <AiOutlineArrowDown />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
