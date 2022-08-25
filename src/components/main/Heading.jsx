import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import earth from "../../images/earth.jpeg"
import { HashLink as Link } from "react-router-hash-link";
import "./heading.css";

function Heading() {
  const [show, setShow] = useState(false);
  const untoggleMenu = () => {
    setShow(false);
  };
  return (
    <div>
      <section className="heading-container" id="home">
        {show ? (
          <nav className="MR-NAV ">
            <Link
              className="linkss link1"
              to="#home"
              spy="true"
              smooth={true}
              offset={50}
              duration={500}
              onClick={untoggleMenu}>
              Home
            </Link>
            <Link
              className="linkss link2"
              to="#projects"
              spy="true"
              smooth={true}
              offset={50}
              duration={500}
              onClick={untoggleMenu}>
              Projects
            </Link>
            <Link
              className="linkss link3"
              to="#about"
              spy="true"
              smooth={true}
              offset={50}
              duration={500}
              onClick={untoggleMenu}>
              About
            </Link>
            <Link
              className="linkss link4"
              to="#contact"
              spy="true"
              smooth={true}
              offset={50}
              duration={500}
              onClick={untoggleMenu}>
              Contacts
            </Link>
          </nav>
        ) : null}
        <a href="##" className="toggle-button" onClick={() => setShow(!show)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="name-nav">
          <div>
            <h1 className="first-name">JORGE</h1>
            <h1 className="first-name">LLANESLEAL</h1>
          </div>
          <div className="nav-container">
            <nav className="nav">
              <Link
                className="links"
                to="#home"
                spy="true"
                smooth={true}
                offset={50}
                duration={500}>
                Home
              </Link>
              <Link
                className="links"
                to="#projects"
                spy="true"
                smooth={true}
                offset={50}
                duration={500}>
                Projects
              </Link>
              <Link
                className="links"
                to="#about"
                spy="true"
                smooth={true}
                offset={50}
                duration={500}>
                About
              </Link>
              <Link
                className="links"
                to="#contact"
                spy="true"
                smooth={true}
                offset={50}
                duration={500}>
                Contacts
              </Link>
            </nav>
          </div>
        </div>

        <div className="para-title">
          <p className="para">
            I HELP COMPANIES, BRANDS AND ENTREPRENEURS DEVELOP ANY DIGITAL
            PRODUCTS AND ACHIEVE THEIR GOALS
          </p>
          {/* <img src={earth} alt="earth..." className="earth"></img> */}
          <div className="job">
            <h1 className="job-title">SOFTWARE</h1>
            <h1 className="job-title">ENGINEER</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Heading;
