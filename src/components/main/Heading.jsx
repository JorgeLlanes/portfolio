import React from "react";
import { Link } from "react-router-dom";
import "./heading.css";

function Heading() {
  return (
    <div>
      <section className="heading-container">
        <div className="name-nav">
          <div>
            <h1 className="first-name">JORGE</h1>
            <h1 className="first-name">LLANESLEAL</h1>
          </div>
          <div className="nav-container">
            <nav className="nav">
              <Link className="links" to="">
                Home
              </Link>
              <Link className="links" to="">
                Projects
              </Link>
              <Link className="links" to="">
                About
              </Link>
              <Link className="links" to="">
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
