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
        <form>
          <div className="form-input">
            <h5>Current Salary</h5>
            <input type="text" placeholder={`₹${user.salary}`} disabled />
          </div>
          <div className="form-input">
            <h5>Entertaiment Budget</h5>
            <input
              type="text"
              placeholder={`₹${user.entertainmentBudget + user.entertainment}`}
              disabled
            />
          </div>
          <div className="form-input">
            <h5>Food Budget</h5>
            <input
              type="text"
              placeholder={`₹${user.foodBudget + user.food}`}
              disabled
            />
          </div>
          <div className="form-input">
            <h5>Investment Budget</h5>
            <input
              type="text"
              placeholder={`₹${user.investmentBudget + user.investment}`}
              disabled
            />
          </div>
          <div className="form-input">
            <h5>Rent Budget</h5>
            <input
              type="text"
              placeholder={`₹${user.rentBudget + user.rent}`}
              disabled
            />
          </div>
          <div className="form-input">
            <h5>Travel Budget</h5>
            <input
              type="text"
              placeholder={`₹${user.travelBudget + user.travel}`}
              disabled
            />
          </div>
        </form>
      </div>
      <div className="logout">
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
