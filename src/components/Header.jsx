import { APP_LOGO } from "../utils/essentials";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
