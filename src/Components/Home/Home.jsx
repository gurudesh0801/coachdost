// HeroSection.js

import React from "react";
import "./Home.css";
<<<<<<< HEAD
import image from "../../assets/images/girlimg.png";
=======
import LearningImage from "../../assets/images/image2.png"; // Adjust path as necessary
import { FaPlay, FaUser } from "react-icons/fa";
>>>>>>> 434a2cc744e8ca391e11eb6e9030c167fd52fbdd
import About from "../About/About";
import Sec2 from "../Sec2/Sec2";

const Home = () => {
<<<<<<< HEAD
=======
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

>>>>>>> 434a2cc744e8ca391e11eb6e9030c167fd52fbdd
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
<<<<<<< HEAD
            Upgrade Yourself, and Prepare a Better Future
          </h1>
          <p className="hero-subtitle">
            Something bigger to achieve your dreams so we provide all of these
            great things for you.
          </p>
          <div className="hero-buttons">
            <button className="get-started">Get Started</button>
            <button className="watch-video">
              <span className="play-icon">▶</span> Watch Video
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h2>9,500+</h2>
              <p>Education Partners</p>
            </div>
            <div className="stat-item">
              <h2>10K</h2>
              <p>Active Students</p>
            </div>
            <div className="stat-item">
              <h2>24/7</h2>
              <p>All Day Consultation</p>
            </div>
          </div>
=======
            Empower Your Learning Journey in{" "}
            <span className="dynamic-text">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </h1>
          <p className="hero-subtitle">
            Join Thousands of learners and access top-quality coaching.
          </p>
          <div className="cta-buttons">
            <button className="cta-button">
              <FaUser size={15} />
              &nbsp;Browse Coaches
            </button>
            <button className="cta-button demo-btn">
              <FaPlay size={15} />
              &nbsp;Get Demo
            </button>
          </div>
>>>>>>> 434a2cc744e8ca391e11eb6e9030c167fd52fbdd
        </div>
        <div className="hero-image">
          <img src={image} alt="Hero" />
        </div>
      </div>
      <About />
<<<<<<< HEAD
      <Sec2 />
=======
      {/* Additional Sections */}
>>>>>>> 434a2cc744e8ca391e11eb6e9030c167fd52fbdd
    </>
  );
};

export default Home;
