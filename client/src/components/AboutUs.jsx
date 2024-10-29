import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            <p>
              "Committed to Your Well-being" We believe in delivering trusted
              medical care with compassion. Whether it’s a general consultation
              or a specialist’s advice, our platform ensures quick and seamless
              doctor-patient connections.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
