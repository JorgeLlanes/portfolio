import React from "react";
import "./skills.css";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNpm } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { DiHeroku } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { FaGitkraken } from "react-icons/fa";
import { IoLogoAmplify } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { SiIntellijidea } from "react-icons/si";

function Skills() {
  return (
    <div>
      <section className="skills-container">
        <div className="ticker">
          <div className="ticker__items">
            <div className="ticker__item">My skills</div>
            <div className="ticker__item">&nbsp; — My skills</div>
            <div className="ticker__item">&nbsp; — My skills</div>
            <div className="ticker__item">&nbsp; — My skills</div>
            <div className="ticker__item">&nbsp; — My skills</div>
            <div className="ticker__item">&nbsp; — My skills</div>
            <div className="ticker__item">&nbsp; — My skills</div>
            <div className="ticker__item">&nbsp; — My skills</div>
            <div className="ticker__item">&nbsp; — My skills</div>
            <div className="ticker__item">&nbsp; — My skills</div>
          </div>
        </div>
        <p className="p-skills">THERE ARE JUST MY MOST SIGNIFICANT SKILLS</p>

        <section className="skills-section">
          <div className="skills-icons">
            <FaReact className="icons" />
            <p>React.js</p>
          </div>
          <div className="skills-icons">
            <DiJavascript1 className="icons" />
            <p>JavaScript</p>
          </div>
          <div className="skills-icons">
            <FaAws className="icons" />
            <p>AWS</p>
          </div>
          <div className="skills-icons">
            <FaJava className="icons" />
            <p>Java</p>
          </div>
          <div className="skills-icons">
            <FaHtml5 className="icons" />
            <p>HTML</p>
          </div>
          <div className="skills-icons">
            <FaCss3Alt className="icons" />
            <p>CSS</p>
          </div>
          <div className="skills-icons">
            <FaNode className="icons" />
            <p>Node.js</p>
          </div>
          <div className="skills-icons">
            <SiExpress className="icons" />
            <p>Express</p>
          </div>
          <div className="skills-icons">
            <SiMysql className="icons" />
            <p>MySQL</p>
          </div>
          <div className="skills-icons">
            <DiMongodb className="icons" />
            <p>MongoDB</p>
          </div>
          <div className="skills-icons">
            <FaNpm className="icons" />
            <p>NPM</p>
          </div>
          <div className="skills-icons">
            <FaGitAlt className="icons" />
            <p>Git</p>
          </div>
          <div className="skills-icons">
            <FaGithub className="icons" />
            <p>GitHub</p>
          </div>
          <div className="skills-icons">
            <FaGitkraken className="icons" />
            <p>GitKraken</p>
          </div>
          <div className="skills-icons">
            <SiNetlify className="icons" />
            <p>Netlify</p>
          </div>
          <div className="skills-icons">
            <DiHeroku className="icons" />
            <p>Heroku</p>
          </div>
          <div className="skills-icons">
            <SiPostman className="icons" />
            <p>Postman</p>
          </div>
          <div className="skills-icons">
            <IoLogoAmplify className="icons" />
            <p>Amplify</p>
          </div>
          <div className="skills-icons">
            <FaDatabase className="icons" />
            <p>Amazon RDS</p>
          </div>
          <div className="skills-icons">
            <SiIntellijidea className="icons" />
            <p>IntelliJ</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Skills;

// @keyframes example1 {
//   0%   {
//   -moz-transform: translateX(100%); /* Firefox bug fix */
//   -webkit-transform: translateX(100%); /* Firefox bug fix */
//   transform: translateX(100%);
//   }
//   100% {
//   -moz-transform: translateX(-100%); /* Firefox bug fix */
//   -webkit-transform: translateX(-100%); /* Firefox bug fix */
//   transform: translateX(-100%);
//   }
//  }
