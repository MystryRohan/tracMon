import { useContext, useState } from "react";
import "../styles/addtransaction.css";
import axios from "axios";
import { Context, server } from "../main";
import toast from "react-hot-toast";

const AddGoal = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const { refresh, setRefresh } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      `${server}/addgoal`,
      {
        name,
        price,
      },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    if (data.success) {
      toast.success("Goal Saved");

      setName("");
      setPrice("");
      setRefresh((prev) => !prev);
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="form-container">
      <h3>Add Goal</h3>
      <form onSubmit={submitHandler} className="add-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default AddGoal;
