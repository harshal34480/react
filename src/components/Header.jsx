import { APP_LOGO } from "../utils/essentials";
import { useState } from "react";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  return (
    <div className="header">
      <div className="headerLogo">
        <img className="logo" alt="food logo" src={APP_LOGO}></img>
      </div>
      <div className="headerLinks">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
