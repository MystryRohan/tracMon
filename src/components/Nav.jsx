import { GoHome, GoPerson, GoGraph } from "react-icons/go";
import { PiPlant } from "react-icons/pi";
import "../styles/nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-btn">
        <NavLink to={"/home"} activeclassname="activee">
          <GoHome size={"25"} />
          <p className="nav-p">Home</p>
        </NavLink>
      </div>
      <div className="nav-btn">
        <NavLink to={"/stats"}>
          <GoGraph size={"25"} />
          <p className="nav-p">Stats</p>
        </NavLink>
      </div>
      <div className="nav-btn">
        <NavLink to={"/budget"}>
          <PiPlant size={"25"} />
          <p className="nav-p">Budget</p>
        </NavLink>
      </div>
      <div className="nav-btn">
        <NavLink to={"/profile"}>
          <GoPerson size={"25"} />
          <p className="nav-p">Profile</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
