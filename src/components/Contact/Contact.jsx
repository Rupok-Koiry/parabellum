import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h3>CONTACT</h3>
        <span></span>
        <div>
          <p className="mb-1">
            <a href="mailto:control@parabellum.co">control@parabellum.co</a>
          </p>
          <p className="m-0">
            <a
              href="https://www.google.com/maps/place/32.107667,34.970917"
              target="_blank"
              rel="noreferrer"
            >
              32°06’27.6”N 34°58’15.3”E
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
