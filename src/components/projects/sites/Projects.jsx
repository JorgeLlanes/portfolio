import React from "react";
import "./projects.css";
import bonAppetit from "../../../images/bonAppetit.mov";
import taskTracker2022 from "../../../images/taskTracker2022.mov";
import solBrillerV1 from "../../../images/solBrillerV1.mov";
import solBrillerV2 from "../../../images/solBrillerV2.mov";
import stay from "../../../images/codeForJustice.mov";
import { RiArrowRightUpLine } from "react-icons/ri";

function Projects() {
  return (
    <div>
      <section className="sec-1">
        <div className="project1">
          <div className="num-title">
            <p>01 / 05</p>
            <h3>Sol Briller v2</h3>
          </div>
          <a href="https://lively-travesseiro-3ac36e.netlify.app/">
            <video
              muted
              onMouseOver={(event) => event.target.play()}
              onMouseOut={(event) => event.target.pause()}
              src={solBrillerV2}
              className="videos"></video>
          </a>
          <div className="info-area">
            <div className="space"></div>
            <div className="info-arrow">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                consequatur excepturi ea autem veritatis, pariatur cupiditate!
                Hic mollitia inventore quod maxime, maiores delectus quis, quasi
                distinctio tenetur, optio libero in.
              </p>
              <a href="https://github.com/JorgeLlanes/solBrillerV2">
                <RiArrowRightUpLine />
              </a>
            </div>
            <div className="space"></div>
          </div>
        </div>

        <div className="project2">
          <div className="num-title">
            <p>02 / 05</p>
            <h3>Task Tracker 2022</h3>
          </div>
          <a href="https://tasktracker2022.herokuapp.com/">
            <video
              muted
              onMouseOver={(event) => event.target.play()}
              onMouseOut={(event) => event.target.pause()}
              src={taskTracker2022}
              className="videos"></video>
          </a>
          <div className="info-area">
            <div className="space"></div>
            <div className="info-arrow">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                consequatur excepturi ea autem veritatis, pariatur cupiditate!
                Hic mollitia inventore quod maxime, maiores delectus quis, quasi
                distinctio tenetur, optio libero in.
              </p>
              <a href="https://github.com/JorgeLlanes/JorgeTaskTracker">
                <RiArrowRightUpLine />
              </a>
            </div>
            <div className="space"></div>
          </div>
        </div>
      </section>

      <section className="sec-2">
        <div className="project3">
          <div className="num-title">
            <p>03 / 05</p>
            <h3>sol Briller v1</h3>
          </div>
          <a href="https://heroic-crostata-70b4a4.netlify.app/">
            <video
              muted
              onMouseOver={(event) => event.target.play()}
              onMouseOut={(event) => event.target.pause()}
              src={solBrillerV1}
              className="videos"></video>
          </a>
          <div className="info-area">
            <div className="space"></div>
            <div className="info-arrow">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                consequatur excepturi ea autem veritatis, pariatur cupiditate!
                Hic mollitia inventore quod maxime, maiores delectus quis, quasi
                distinctio tenetur, optio libero in.
              </p>
              <a href="https://github.com/JorgeLlanes/E-Commerce-Project-Version-1-">
                <RiArrowRightUpLine />
              </a>
            </div>
            <div className="space"></div>
          </div>
        </div>

        <div className="project4">
          <div className="num-title">
            <p>04 / 05</p>
            <h3>Bon Appétit Redesign</h3>
          </div>
          <a href="https://precious-tartufo-16043b.netlify.app/">
            <video
              muted
              onMouseOver={(event) => event.target.play()}
              onMouseOut={(event) => event.target.pause()}
              src={bonAppetit}
              className="videos"></video>
          </a>
          <div className="info-area">
            <div className="space"></div>
            <div className="info-arrow">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                consequatur excepturi ea autem veritatis, pariatur cupiditate!
                Hic mollitia inventore quod maxime, maiores delectus quis, quasi
                distinctio tenetur, optio libero in.
              </p>
              <a href="https://github.com/JorgeLlanes/BonAppetit-Redesign/tree/main/bonappetit_redesign">
                <RiArrowRightUpLine />
              </a>
            </div>
            <div className="space"></div>
          </div>
        </div>


        <div className="project5">
          <div className="num-title">
            <p>05 / 05</p>
            <h3>STAY</h3>
          </div>
          <a href="https://github.com/Brandnn07/Code-for-Justice">
            <video
              muted
              onMouseOver={(event) => event.target.play()}
              onMouseOut={(event) => event.target.pause()}
              src={stay}
              className="videos"></video>
          </a>
          <div className="info-area">
            <div className="space"></div>
            <div className="info-arrow">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                consequatur excepturi ea autem veritatis, pariatur cupiditate!
                Hic mollitia inventore quod maxime, maiores delectus quis, quasi
                distinctio tenetur, optio libero in.
              </p>
              <a href="https://github.com/Brandnn07/Code-for-Justice">
                <RiArrowRightUpLine />
              </a>
            </div>
            <div className="space"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;

//! NON-USED
// {/* <video
//   muted
//   onMouseOver={(event) => event.target.play()}
//   onMouseOut={(event) => event.target.pause()}
//   src={taskTracker2022}
//   className="videos"></video>; */}
//! NON-USED
