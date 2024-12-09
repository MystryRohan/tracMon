import { FaTrophy } from "react-icons/fa6";
import "../styles/goal.css";

const Goal = ({ goal, editGoalHandler }) => {
  return (
    <div className="goal" onClick={() => editGoalHandler(goal._id)}>
      <FaTrophy size={"40"} />
      <div className="text">
        <h4>{goal.name}</h4>
        <div className="progress">
          <div
            className="completed"
            style={{ width: `${(goal.saved / goal.price) * 100}%` }}
          ></div>
        </div>
        <div className="money-required">
          <p>Saved: ₹{goal.saved}</p>
          <p>₹{goal.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
