import { useContext } from "react";
import { Context, tTypeOpts } from "../main";
import "../styles/budget.css";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
const Budget = () => {
  const { user } = useContext(Context);
  return (
    <div className="budget">
      <h3>Budget</h3>

      <div>
        <h4>Category</h4>
        <div className="budget-box ent">
          <div className="icon">{tTypeOpts["entertainmentBudget"]}</div>
          <div className="category">
            <div className="textt">
              <h5>Entertainment</h5>
              <p>₹{user.entertainmentBudget}</p>
            </div>
            <div className="progress">
              <div
                className="completed"
                style={{
                  backgroundColor: "#f5004f",
                  width: `${
                    (user.entertainment /
                      (user.entertainment + user.entertainmentBudget)) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="budget-box travel">
          <div className="icon">{tTypeOpts["travelBudget"]}</div>
          <div className="category">
            <div className="textt">
              <h5>Travel</h5>
              <p>₹{user.travelBudget}</p>
            </div>
            <div className="progress">
              <div
                className="completed"
                style={{
                  backgroundColor: "#ffaf00",
                  width: `${
                    (user.travel / (user.travel + user.travelBudget)) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="budget-box rent">
          <div className="icon">{tTypeOpts["rentBudget"]}</div>
          <div className="category">
            <div className="textt">
              <h5>Rent</h5>
              <p>₹{user.rentBudget}</p>
            </div>
            <div className="progress">
              <div
                className="completed"
                style={{
                  backgroundColor: "#f9e400",
                  width: `${
                    (user.rent / (user.rent + user.rentBudget)) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="budget-box food">
          <div className="icon">{tTypeOpts["foodBudget"]}</div>
          <div className="category">
            <div className="textt">
              <h5>Food</h5>
              <p>₹{user.foodBudget}</p>
            </div>
            <div className="progress">
              <div
                className="completed"
                style={{
                  backgroundColor: "#7c00fe",
                  width: `${
                    (user.food / (user.food + user.foodBudget)) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="budget-box investment">
          <div className="icon">{tTypeOpts["investmentBudget"]}</div>
          <div className="category">
            <div className="textt">
              <h5>Investment</h5>
              <p>₹{user.investmentBudget}</p>
            </div>
            <div className="progress">
              <div
                className="completed"
                style={{
                  backgroundColor: "#9BEC00",
                  width: `${
                    (user.investment /
                      (user.investment + user.investmentBudget)) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* <Link to={"/addCategory"} className="add-transaction-btn">
        <FaPlus size={35} />
      </Link> */}
    </div>
  );
};

export default Budget;
