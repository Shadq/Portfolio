import React, { useState } from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiYarn } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { DiNpm } from "react-icons/di";
import "../styles/Skills.css";

const Skills = () => {
  const [frontEnd, setFrontEnd] = useState(true);
  const [backEnd, setBackEnd] = useState(false);
  const [tools, setTools] = useState(false);

  const frontend = [
    {
      name: "HTML",
      icon: (
        <p>
          <AiFillHtml5 />
        </p>
      ),
    },
    {
      name: "CSS",
      icon: (
        <p>
          <DiCss3Full />
        </p>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <p>
          <SiJavascript />
        </p>
      ),
    },
    {
      name: "ReactJs",
      icon: (
        <p>
          <FaReact />
        </p>
      ),
    },
  ];

  const backend = [
    {
      name: "NodeJs",
      icon: (
        <p>
          <FaNodeJs />
        </p>
      ),
    },
    {
      name: "Express",
      icon: (
        <p>
          <SiExpress />
        </p>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <p>
          <SiMongodb />
        </p>
      ),
    },
    {
      name: "GraphQL",
      icon: (
        <p>
          <SiGraphql />
        </p>
      ),
    },
  ];

  const Tools = [
    {
      name: "Npm",
      icon: (
        <p>
          <DiNpm />
        </p>
      ),
    },
    {
      name: "Yarn",
      icon: (
        <p>
          <SiYarn />
        </p>
      ),
    },
    {
      name: "Git",
      icon: (
        <p>
          <FaGitAlt />
        </p>
      ),
    },
    {
      name: "Chrome Dev Tools",
      icon: (
        <p>
          <FaChrome />
        </p>
      ),
    },
    {
      name: "VSCode",
      icon: (
        <p>
          <SiVisualstudiocode />
        </p>
      ),
    },
  ];
  return (
    <div className="skills__container">
      <div className="skills__intro">
        <div style={{ display: "flex", gap: "9px" }}>
          <h1>My Tech</h1>
          <h1 style={{ color: "#4f45e4" }}>Skills</h1>
        </div>
        <span>
          Everything i have learned in the past 3 years
          <br /> and what i will learn in the future.
        </span>
      </div>
      <div className="skills__section">
        <div className="skills__buttons">
          <button
            onClick={() => {
              setBackEnd(false);
              setTools(false);
              setFrontEnd(true);
            }}
            className="skills__button"
          >
            {frontEnd ? (
              <span style={{ color: "#4f45e4" }}>
                <FaGlobeAfrica />
              </span>
            ) : (
              <span>
                <FaGlobeAfrica />
              </span>
            )}
            {frontEnd ? (
              <p style={{ color: "#4f45e4" }}>Frontend</p>
            ) : (
              <p>Frontend</p>
            )}
          </button>
          <button
            onClick={() => {
              setBackEnd(true);
              setTools(false);
              setFrontEnd(false);
            }}
            className="skills__button"
          >
            {backEnd ? (
              <span style={{ color: "#4f45e4" }}>
                <FaServer />
              </span>
            ) : (
              <span>
                <FaServer />
              </span>
            )}
            {backEnd ? (
              <p style={{ color: "#4f45e4" }}>Backend</p>
            ) : (
              <p>Backend</p>
            )}
          </button>
          <button
            onClick={() => {
              setBackEnd(false);
              setTools(true);
              setFrontEnd(false);
            }}
            className="skills__button"
          >
            {tools ? (
              <span style={{ color: "#4f45e4" }}>
                <FaTools />
              </span>
            ) : (
              <span>
                <FaTools />
              </span>
            )}
            {tools ? <p style={{ color: "#4f45e4" }}>Tools</p> : <p>Tools</p>}
          </button>
        </div>
        <div className="skills__knowledge__container">
          {/* FrontEnd */}
          {frontEnd ? (
            <div className="skills__knowledge">
              {frontend.map((language) => (
                <div className="skill">
                  {language.icon}
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
          ) : null}
          {/* FrontEnd */}
          {backEnd ? (
            <div className="skills__knowledge">
              {backend.map((language) => (
                <div className="skill">
                  {language.icon}
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
          ) : null}
          {/* FrontEnd */}
          {tools ? (
            <div className="skills__knowledge">
              {Tools.map((language) => (
                <div className="skill">
                  {language.icon}
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Skills;
