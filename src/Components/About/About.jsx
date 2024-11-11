import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      {/* About Section */}
      <div className="about-container" id="#about">
        <section className="intro-section">
          <h1>
            About <span>CoachDost</span>
          </h1>
          <p>
            At <b>CoachDost</b>, we empower learners to excel in careers,
            relationships, corporate life, and personal growth. Our platform
            combines expert coaching with practical knowledge, helping
            individuals thrive in every aspect of their lives. Whether you're
            advancing in your profession or seeking a balanced lifestyle,
            Coachdost is here to guide you on your journey to success.
          </p>
        </section>

        <section className="values-section">
          <div className="value-box">
            <h2>Easy Access</h2>
            <p>
              Access learning materials anytime, anywhere with our user-friendly
              platform.
            </p>
          </div>
          <div className="value-box">
            <h2>Engagement</h2>
            <p>
              We prioritize interactive learning to keep students engaged and
              motivated.
            </p>
          </div>
          <div className="value-box">
            <h2>Support</h2>
            <p>
              Our dedicated team provides continuous support to ensure a smooth
              learning experience.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
