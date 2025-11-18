import { useContext } from "react";
import "../styles/profile.css";
import { Context, server } from "../main";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const { user, setUser, setIsAuthenticated } = useContext(Context);
  const logoutHandler = async () => {
    await axios.get(`${server}/logout`, { withCredentials: true });
    navigate("/login");
    setUser({});
    setIsAuthenticated(false);
  };
  return (
    <div className="profile-page">
      <div className="top">
        <Link to={"/deleteaccount"}>
          <AiOutlineDelete size={30} color="#f82525" />
        </Link>
        <h2>tracMon</h2>
        <Link to={"/editprofile"}>
          <AiOutlineEdit size={30} color="#919191" />
        </Link>
      </div>
      <div className="pfp-container">
        <img src="drivepfp.jpg" alt="pfp" />
        <h3>{user.name}</h3>
      </div>
      <div className="change-salary">
        <Block name={"Salary"} budget={user.salary} exp={0} />
        <Block
          name={"Entertainment"}
          budget={user.entertainmentBudget}
          exp={user.entertainment}
        />
        <Block name={"Food"} budget={user.foodBudget} exp={user.food} />
        <Block
          name={"Investment"}
          budget={user.investmentBudget}
          exp={user.investment}
        />
        <Block name={"Rent"} budget={user.rentBudget} exp={user.rent} />
        <Block name={"Travel"} budget={user.travelBudget} exp={user.travel} />
      </div>

      <div className="logout">
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;

const Block = ({ name, budget, exp }) => {
  const percent = (exp / (exp + budget)) * 100;
  let bgColor = "#4bf534ff";

  if (percent < 50) {
    bgColor = "#4bf534ff";
  } else if (percent >= 50 && percent < 80) {
    bgColor = "#f5a937ff";
  } else {
    bgColor = "#fa3f3fff";
  }
  return (
    <div className="budget-block-wrapper">
      <div className="profile-budget-blocks">
        <div
          className="fill-block"
          style={{
            height: `${percent}%`,
            backgroundColor: bgColor,
          }}
        ></div>
        <p>{`₹${budget + exp}`}</p>
      </div>
      <h6>{name == "Salary" ? "Salary" : `${name} Budget`}</h6>
    </div>
  );
};
