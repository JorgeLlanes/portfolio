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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            nisi aliquid eveniet. Architecto tenetur non perferendis consectetur
            amet repellendus minus odit repudiandae error alias, ea veniam
            voluptates velit neque cumque? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officiis ducimus eaque minima sequi
            modi alias commodi doloremque recusandae quas quisquam cumque quo
            numquam, hic sed eum nam vero tenetur explicabo!
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
