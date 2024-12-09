import axios from "axios";
import { server } from "../main";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../styles/delete.css";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const deleteHandler = async () => {
    const { data } = await axios.delete(`${server}/deleteaccount`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    if (data.success) {
      toast.success("Account Deleted");
      navigate("/");
    } else {
      toast.error("Something Went Wrong");
    }
  };
  const cancelHandler = () => {
    navigate("/profile");
  };
  return (
    <div className="delete-container">
      <h1>Delete Account</h1>
      <div className="btns-side">
        <button onClick={cancelHandler}>Cancel</button>
        <button onClick={deleteHandler}>Delete Account</button>
      </div>
    </div>
  );
};

export default DeleteAccount;
