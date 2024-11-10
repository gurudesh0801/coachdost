import React, { useEffect, useState } from "react";
import "./Home.css";
import LearningImage from "../../assets/images/image9.png"; // Adjust path as necessary
import { FaPlay, FaUser } from "react-icons/fa";
import img1 from "../../assets/images/image1.png";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
    "Relationship.",
    "Career.",
    "Life.",
    "Public Speaking.",
    "Leadership.",
  ];

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      setDisplayText((prevText) => {
        if (!isDeleting) {
          // Typing effect: add a character
          const updatedText = currentWord.slice(0, prevText.length + 1);
          if (updatedText === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
          }
          return updatedText;
        } else {
          // Deleting effect: remove a character
          const updatedText = currentWord.slice(0, prevText.length - 1);
          if (updatedText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to next word
          }
          return updatedText;
        }
      });
    };

    const typingSpeed = isDeleting ? 100 : 150; // Faster speed when deleting
    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout); // Cleanup timeout on unmount
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <>
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Empower Your Learning Journey in{" "}
            <span className="dynamic-text">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </h1>
          <p className="hero-subtitle">
            Join Thousands of learners and access top-quality coaching.
          </p>
          <button className="cta-button">
            <FaUser size={15} />
            &nbsp;Browse Coaches
          </button>
          <button className="cta-button demo-btn">
            <FaPlay size={15} />
            &nbsp;Get Demo
          </button>
        </div>
        <div className="hero-image">
          <div className="image-overlay"></div>
          <img src={LearningImage} alt="Learning" />
        </div>
      </div>

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
      {/* Blog Section */}
      
    </>
  );
};

export default Home;
