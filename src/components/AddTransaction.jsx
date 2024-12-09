import { useContext, useState } from "react";
import "../styles/addtransaction.css";
import axios from "axios";
import { Context, server } from "../main";
import toast from "react-hot-toast";

const AddTransaction = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("entertainmentBudget");

  const { refresh, setRefresh } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      `${server}/addtransaction`,
      {
        name,
        price,
        category,
      },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    if (data.success) {
      toast.success("Transaction Saved");
      setCategory("entertainmentBudget");
      setName("");
      setPrice(0);
      setRefresh((prev) => !prev);
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="form-container">
      <h3>Add Transaction</h3>
      <form onSubmit={submitHandler} className="add-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label htmlFor="categories">
          <select
            id="categories"
            name={"category"}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="entertainmentBudget">Entertainment</option>
            <option value="travelBudget">Travel</option>
            <option value="rentBudget">Rent</option>
            <option value="foodBudget">Food</option>
            <option value="investmentBudget">Investment</option>
          </select>
        </label>

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
