import React, { useEffect, useState } from "react";
import "./Home.css";
import LearningImage from "../../assets/images/image2.png"; // Adjust path as necessary
import { FaPlay, FaUser } from "react-icons/fa";

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
  );
};

export default Home;
