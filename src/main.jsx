import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import {
  BiCameraMovie,
  BiTrain,
  BiBuildingHouse,
  BiCandles,
} from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";

export const tTypeOpts = {
  entertainmentBudget: <BiCameraMovie size={40} color="#F5004F" />,
  travelBudget: <BiTrain size={40} color="#FFAF00" />,
  rentBudget: <BiBuildingHouse size={40} color="#F9E400" />,
  foodBudget: <IoFastFoodOutline size={40} color="#7C00FE" />,
  investmentBudget: <BiCandles size={40} color="#9BEC00" />,
};

export const server = "http://localhost:5000/api/v1";
// export const server = "https://tracmon-be.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [goals, setGoals] = useState([]);
  const [id, setID] = useState("");
  const [refresh, setRefresh] = useState(false);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        transactions,
        setTransactions,
        goals,
        setGoals,
        refresh,
        setRefresh,
        id,
        setID,
      }}
    >
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
