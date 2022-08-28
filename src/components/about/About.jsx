import React from "react";
import "./about.css";
import mexico from "../../images/mexico.png";
// import hacker from "../../images/hack.mp4"

function About() {
  return (
    <div>
      <section className="about-container">
        <div id="about">
          <h2 className="myself-title">SHORTLY ABOUT MYSELF</h2>
        </div>
        <div className="three-values">
          <p>
            I love to combine the modern technologies with visual aesthetics
          </p>
          <p>I believe that every project that I do should have an overvalue</p>
          <p>I always try to find the optimal solution to the client's Task</p>
        </div>
        <div className="myself-para-flag">
          <img src={mexico} alt="Mexico..." className="img-mex" />
          <h4 className="story-para">
            Hello World! My name is Jorge Llanes, located in Austin, Texas. I
            Aspire to be a full-stack software engineer. Everything I do every
            day is aimed at achieving one goal - to fill people's daily lives
            with visual and functional aesthetics. I do both Web-design and
            Development. So the final result always turns out the way I intended
            it. But I also like to work in a team, Where each is a professional
            in their field and does their job perfectly. I am a son of immigrant
            parents from Mexico, My mission is to break barriers in the tech
            industry and bring tech to light in the Latino community 🇲🇽🇺🇸.
          </h4>
        </div>
      </section>
    </div>
  );
}

export default About;

//! NON-USED
// {/* <video src={hacker} className="img-hacker" autoPlay loop muted></video> */}
//! NON-USED
