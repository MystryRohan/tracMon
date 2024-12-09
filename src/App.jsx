import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Stats from "./components/Stats";
import Budget from "./components/Budget";
import Profile from "./components/Profile";
import AllGoals from "./components/AllGoals";
import AllTransactions from "./components/AllTransactions";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { Context, server } from "./main";
import { useContext, useEffect } from "react";
import AddTransaction from "./components/AddTransaction";
import AddGoal from "./components/AddGoal";
import EditDetails from "./components/EditDetails";
import DeleteAccount from "./components/DeletedAccount";
import UpdateGoal from "./components/UpdateGoal";

function App() {
  const {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    transactions,
    setTransactions,
    goals,
    setGoals,
    refresh,
    setRefresh,
  } = useContext(Context);

  const getTransactions = async () => {
    const { data } = await axios.get(`${server}/mytransactions`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    if (data.success) {
      setTransactions(data.message);
    }
  };
  const getGoals = async () => {
    const { data } = await axios.get(`${server}/mygoals`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    if (data.success) {
      setGoals(data.message);
    }
  };
  useEffect(() => {
    getTransactions();
    getGoals();
    axios
      .get(`${server}/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          setIsAuthenticated(true);
          setUser(res.data.message);
        }
      })
      .catch((err) => {
        setUser({});
        setIsAuthenticated(false);
        console.log("catchblock");
      });
  }, [isAuthenticated, refresh]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Login />} />
        <Route
          path="/stats"
          element={isAuthenticated ? <Stats /> : <Login />}
        />
        <Route
          path="/budget"
          element={isAuthenticated ? <Budget /> : <Login />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Login />}
        />
        <Route
          path="/addtransaction"
          element={isAuthenticated ? <AddTransaction /> : <Login />}
        />
        <Route
          path="/addgoal"
          element={isAuthenticated ? <AddGoal /> : <Login />}
        />
        <Route
          path="/goals"
          element={isAuthenticated ? <AllGoals /> : <Login />}
        />
        <Route
          path="/transactions"
          element={isAuthenticated ? <AllTransactions /> : <Login />}
        />
        <Route
          path="/editprofile"
          element={isAuthenticated ? <EditDetails /> : <Login />}
        />
        <Route
          path="/deleteaccount"
          element={isAuthenticated ? <DeleteAccount /> : <Login />}
        />
        <Route
          path="/updategoal"
          element={isAuthenticated ? <UpdateGoal /> : <Login />}
        />
      </Routes>
      <Nav />
      <Toaster />
    </Router>
  );
}

export default App;
