import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Animate counter
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return prevCount + Math.ceil(target / 100); // Increment smoothly
        }
        clearInterval(interval);
        return target;
      });
    }, 20); // Speed of increment

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [target]);

  return (
    <div className="counter-box">
      <div className="counter-header">
        <h2 className="counter-value">{count}</h2>
      </div>
      <p className="counter-label">{label}</p>
    </div>
  );
};

export default Counter;
