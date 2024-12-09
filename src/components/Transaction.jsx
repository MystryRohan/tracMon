import { tTypeOpts } from "../main";
import "../styles/transaction.css";
import { IoTrashOutline } from "react-icons/io5";

const Transaction = ({ transaction, deleteHandler }) => {
  const { name, price, category, createdAt } = transaction;

  let time = new Date(createdAt);

  return (
    <div className="transaction">
      <div className="transaction-text-1">
        <div className="icon">{tTypeOpts[category]}</div>
        <div>
          <h5>{name}</h5>
          <p>{category}</p>
        </div>
      </div>
      <div className="transaction-text-2">
        <h5>₹{price}</h5>
        <p>
          {time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </p>
      </div>

      <IoTrashOutline
        size={25}
        color="red"
        onClick={() => deleteHandler(transaction._id)}
      />
    </div>
  );
};

export default Transaction;
