import { useContext } from "react";
import Goal from "./Goal";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const AllGoals = () => {
  const { goals, setID } = useContext(Context);
  const navigate = useNavigate();

  const editGoalHandler = (id) => {
    setID(id);
    navigate("/updategoal");
  };
  return (
    <div className="all-container">
      <h3>Goals</h3>
      <div className="all">
        {goals.map((goal, idx) => (
          <Goal goal={goal} key={idx} editGoalHandler={editGoalHandler} />
        ))}
      </div>
      <Link to={"/addgoal"} className="add-transaction-btn">
        <FaPlus size={25} />
      </Link>
    </div>
  );
};

export default AllGoals;
