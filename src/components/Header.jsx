import { APP_LOGO } from "../utils/essentials";
import { useState } from "react";
import { Link } from "react-router-dom";
import Body from "./Body";
import Contact from "./Contact";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  return (
    <div className="header">
      <div className="headerLogo">
        <img className="logo" alt="food logo" src={APP_LOGO}></img>
      </div>
      <div className="headerLinks">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <button
              onClick={() => {
                btn == "Login" ? setBtn("Logout") : setBtn("Login");
              }}>
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
