import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";
import { useContext, useState } from "react";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";
import ReactLoading from "react-loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${server}/login`,
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log(data);
      // console.log(email, password);
      if (!data.success) {
        setIsLoading(false);
        return toast.error(data.message);
      } else if (data.success) {
        toast.success(data.message);
        setIsLoading(false);
        setIsAuthenticated(true);
        navigate("/home");
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      {isloading ? (
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
            <p>Simplify Expenses</p>
          </div>
          <form onSubmit={submitHandler} className="login-form">
            <h1>Sign In</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <Link to={"/register"}>Register</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
