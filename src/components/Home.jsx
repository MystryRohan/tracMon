import Chart from "./Chart";
import "../styles/home.css";
import { FaArrowTrendDown, FaArrowTrendUp, FaPlus } from "react-icons/fa6";
import Goal from "./Goal";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context, server } from "../main";
import axios from "axios";

const Home = () => {
  const { user, goals, setID } = useContext(Context);
  const navigate = useNavigate();

  const editGoalHandler = (id) => {
    setID(id);
    navigate("/updategoal");
  };
  return (
    <div className="home-container">
      <div className="profile">
        <img src="drivepfp.jpg" alt="pfp" />
        <div className="greetings">
          <h4>{user.name}</h4>
          <p>Hi!</p>
        </div>
      </div>
      <div className="current-balance">
        <p>Balance</p>
        <h3>{`₹${user.salary - user.totalSpendThisMonth}`}</h3>
      </div>
      <div className="exp-blocks">
        <div className="income">
          <div className="svg-cover">
            <FaArrowTrendUp color="green" size={25} />
          </div>
          <div className="svg-text">
            <p>Income</p>
            <h4>{`₹${user.salary}`}</h4>
          </div>
        </div>
        <div className="expenditure">
          <div className="svg-cover">
            <FaArrowTrendDown color="red" size={25} />
          </div>
          <div className="svg-text">
            <p>Expense</p>
            <h4>{`₹${user.totalSpendThisWeek}`}</h4>
          </div>
        </div>
      </div>
      <div className="expense-chart">
        <h3>Expense Chart</h3>
        <Chart />
      </div>
      <div className="goals">
        <div className="goals-heading">
          <h3>Goals</h3>
          <Link to={"/goals"}>View all</Link>
        </div>
        {goals.slice(0, 2).map((goal, idx) => (
          <Goal goal={goal} key={idx} editGoalHandler={editGoalHandler} />
        ))}
      </div>
      <Link to={"/addtransaction"} className="add-transaction-btn">
        <FaPlus size={25} />
      </Link>
    </div>
  );
};

export default Home;
