import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Handler to hide loading screen and show the main app
  const handleAnimationEnd = () => {
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <Loading onAnimationEnd={handleAnimationEnd} />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
