import axios from "axios";
import { Context, server } from "../main";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateGoal = () => {
  const { id, setRefresh } = useContext(Context);
  const [currSaved, setCurrSaved] = useState("");

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${server}/addmoneytogoal/${id}`,
        { currSaved },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (data.success) {
        toast.success(data.message);
        setRefresh((prev) => !prev);
        navigate("/home");
      }
    } catch (e) {
      toast.error(data.message);
    }
  };
  return (
    <div className="form-container">
      <div className="form-title">
        <h1>Update Goal</h1>
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="saved"
          value={currSaved}
          onChange={(e) => setCurrSaved(e.target.value)}
          required
        />
        <button type="submit">Done</button>
      </form>
    </div>
  );
};
export default UpdateGoal;
