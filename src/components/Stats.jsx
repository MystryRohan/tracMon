import { Link } from "react-router-dom";
import "../styles/stats.css";
import StatsDetails from "./StatsDetails";
import Transaction from "./Transaction";
import { useContext } from "react";
import { Context, server } from "../main";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";

const Stats = () => {
  const { transactions, setRefresh } = useContext(Context);

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
    <div className="stats">
      <h3>Stats</h3>
      <div className="pie-chartt">
        <StatsDetails />
      </div>
      <div className="stats-details">
        <div className="transaction-heading">
          <h4>Recent Transactions</h4>
          <Link to={"/transactions"}>View All</Link>
        </div>
        <div className="recent-transactions">
          {transactions.slice(0, 4).map((t, idx) => (
            <Transaction
              transaction={t}
              key={idx}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
      </div>
      <Link to={"/addtransaction"} className="add-transaction-btn">
        <FaPlus size={25} />
      </Link>
    </div>
  );
};

export default Stats;
