import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Context, server } from "../main";
import ReactLoading from "react-loading";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rentBudget, setRentBudget] = useState("");
  const [entertainmentBudget, setEntertainmentBudget] = useState("");
  const [foodBudget, setFoodBudget] = useState("");
  const [travelBudget, setTravelBudget] = useState("");
  const [salary, setSalary] = useState("");
  const [investmentBudget, setInvestmentBudget] = useState("");
  const [showNext, setShowNext] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let { data } = await axios.post(
        `${server}/register`,
        {
          email,
          name,
          password,
          salary,
          entertainmentBudget,
          travelBudget,
          rentBudget,
          foodBudget,
          investmentBudget,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (!data.success) {
        setIsLoading(false);
        return toast.error(data.message);
      } else if (data.success) {
        setIsLoading(false);
        toast.success(data.message);
        setIsAuthenticated(true);
        navigate("/home");

        setEmail("");
        setName("");
        setPassword("");
        setSalary("");
        setEntertainmentBudget("");
        setRentBudget("");
        setFoodBudget("");
        setTravelBudget("");
        setInvestmentBudget("");
      }
    } catch (e) {
      setIsLoading(false);
      console.log("something went wrong");
    }
  };
  const nextHandler = () => {
    if (email === "" || name === "" || password === "") {
      return toast.error("fill all the details", {});
    }
    setShowNext((prev) => !prev);
  };
  return (
    <div className="form-container">
      {isLoading ? (
        <ReactLoading
          type={"bubbles"}
          color={"#0666EB"}
          height={"20%"}
          width={"20%"}
        />
      ) : (
        <>
          <div className="form-title">
            <h1>tracMon</h1>
          </div>
          <form onSubmit={submitHandler}>
            <h1>Create Account</h1>
            <p>Fill the below details</p>

            {!showNext ? (
              <Page1
                email={email}
                name={name}
                password={password}
                setEmail={setEmail}
                setName={setName}
                setPassword={setPassword}
                nextHandler={nextHandler}
              />
            ) : (
              <Page2
                salary={salary}
                entertainmentBudget={entertainmentBudget}
                foodBudget={foodBudget}
                rentBudget={rentBudget}
                travelBudget={travelBudget}
                investmentBudget={investmentBudget}
                setEntertainmentBudget={setEntertainmentBudget}
                setFoodBudget={setFoodBudget}
                setRentBudget={setRentBudget}
                setSalary={setSalary}
                setTravelBudget={setTravelBudget}
                setInvestmentBudget={setInvestmentBudget}
                nextHandler={nextHandler}
              />
            )}
          </form>
          <p>
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </>
      )}
    </div>
  );
};

const Page1 = ({
  email,
  password,
  name,
  nextHandler,
  setEmail,
  setName,
  setPassword,
}) => {
  return (
    <>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button onClick={nextHandler}>Next</button>
    </>
  );
};

const Page2 = ({
  nextHandler,
  salary,
  rentBudget,
  travelBudget,
  entertainmentBudget,
  foodBudget,
  setFoodBudget,
  setEntertainmentBudget,
  setSalary,
  setRentBudget,
  setTravelBudget,
  investmentBudget,
  setInvestmentBudget,
}) => {
  return (
    <>
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
        <button onClick={nextHandler}>Back</button>
        <button type="submit">Register</button>
      </div>
    </>
  );
};

export default Register;
