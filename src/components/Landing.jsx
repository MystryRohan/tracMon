import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

const Landing = () => {
  const [showNext, setShowNext] = useState(false);
  const navigate = useNavigate();
  const registerHandler = () => {
    navigate("/login");
  };
  const nextHandler = () => {
    setShowNext((prev) => !prev);
  };
  return (
    <div className="landing-container">
      <Landing1 showNext={showNext} nextHandler={nextHandler} />
      <Landing2 showNext={showNext} registerHandler={registerHandler} />
    </div>
  );
};
const Landing1 = ({ showNext, nextHandler }) => {
  return (
    <motion.div className={`${showNext ? "hide" : ""}`}>
      <div className="illus-container">
        <img src="./landing_1.png" alt="landing_1" />
        <motion.h1>First Step to Savings</motion.h1>
        <div className="indicators">
          <div className={`dot ${!showNext ? "activee" : ""}`}></div>
          <div className={`dot ${showNext ? "activee" : ""}`}></div>
        </div>
        <button onClick={nextHandler}>Next</button>
      </div>
    </motion.div>
  );
};
const Landing2 = ({ showNext, registerHandler }) => {
  return (
    <motion.div className={`${!showNext ? "hide" : ""}`}>
      <div className="illus-container">
        <img src="./landing_2.png" alt="landing_2" />
        <motion.h1>Graphical Analysis</motion.h1>
        <div className="indicators">
          <div className={`dot ${!showNext ? "activee" : ""}`}></div>
          <div className={`dot ${showNext ? "activee" : ""}`}></div>
        </div>
        <button onClick={registerHandler}>Let's Go</button>
      </div>
    </motion.div>
  );
};

export default Landing;
