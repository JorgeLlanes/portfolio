import React from "react";
import "./contact.css";
import { GiTexas } from "react-icons/gi";

function Contact() {
  return (
    <div>
      <div className="contact-container">
        <div>
          <h1 className="contact-title">
            GET IN T
            <span className="tx" id="contact">
              <GiTexas />
            </span>
            UCH
          </h1>
        </div>
        <div className="links-comments">
          <section>
            <ul className="links-list">
              <a href="https://github.com/JorgeLlanes" className="links-social">
                <li>GITHUB</li>
              </a>
              <a href="https://twitter.com/?lang=en" className="links-social">
                <li>TWITTER</li>
              </a>
              <a href="https://www.instagram.com/" className="links-social">
                <li>INSTAGRAM</li>
              </a>
              <a
                href="https://www.linkedin.com/in/jorgellanes/"
                className="links-social">
                <li>LINKEDIN</li>
              </a>
            </ul>
          </section>

          <form action="" className="form">
            <input type="text" name="full_name" placeholder="NAME" required />
            <abbr>*</abbr>
            <input type="email" name="'email" placeholder="EMAIL" required />
            <textarea
              name="comment"
              cols="30"
              rows="10"
              placeholder="DETAILS"
              required></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
