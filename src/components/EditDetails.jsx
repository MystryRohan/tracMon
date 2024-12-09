import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context, server } from "../main";
import toast from "react-hot-toast";

const EditDetails = () => {
  const [salary, setSalary] = useState("");
  const [rentBudget, setRentBudget] = useState("");
  const [entertainmentBudget, setEntertainmentBudget] = useState("");
  const [foodBudget, setFoodBudget] = useState("");
  const [travelBudget, setTravelBudget] = useState("");
  const [investmentBudget, setInvestmentBudget] = useState("");

  const { setRefresh } = useContext(Context);

  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate("/profile");
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${server}/updatedetails`,
        {
          salary,
          rentBudget,
          entertainmentBudget,
          foodBudget,
          travelBudget,
          investmentBudget,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (data.success) {
        setRefresh((prev) => !prev);
        toast.success("Data Updated!");
      } else {
        toast.error("Failed, try again...");
      }
    } catch (e) {
      console.log("Something went wrong");
    }
  };
  return (
    <div className="form-container">
      <div className="btns-side">
        <button className="cancel-btn" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
      <div className="form-title">
        <h3>Edit Budget</h3>
        <p>Fill the details</p>
      </div>
      <form onSubmit={submitHandler}>
        <input
          type=""
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rent Budget"
          value={rentBudget}
          onChange={(e) => setRentBudget(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Travel Budget"
          value={travelBudget}
          onChange={(e) => setTravelBudget(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Entertainment Budget"
          value={entertainmentBudget}
          onChange={(e) => setEntertainmentBudget(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Food Budget"
          value={foodBudget}
          onChange={(e) => setFoodBudget(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Investment Budget"
          value={investmentBudget}
          onChange={(e) => setInvestmentBudget(e.target.value)}
          required
        />
        <div className="btns-side">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditDetails;
