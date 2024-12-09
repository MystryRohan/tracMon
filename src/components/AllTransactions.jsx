import { useContext } from "react";
import Transaction from "./Transaction";
import { Context, server } from "../main";
import "../styles/allview.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";

const AllTransactions = () => {
  const { transactions, setRefresh } = useContext(Context);
  const navigate = useNavigate();

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`${server}/deletetransaction/${id}`, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      if (data.success) {
        toast.success(data.message);
        setRefresh((prev) => !prev);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="all-container">
      <h3>Transactions</h3>
      <div className="all">
        {transactions.map((transaction, idx) => (
          <Transaction
            transaction={transaction}
            key={idx}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
      <Link to={"/addtransaction"} className="add-transaction-btn">
        <FaPlus size={25} />
      </Link>
    </div>
  );
};

export default AllTransactions;
