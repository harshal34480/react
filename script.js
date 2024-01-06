import React from "react";
import ReactDOM from "react-dom/client";

// low level design
// Header
//   - logo
//   - links
// Body
//   - search bar
//   - restro container
//     - restro card
// Footer
//   - address
//   - links

const Header = () => (
  <div className="header">
    <div className="headerLogo">
      <img
        className="logo"
        alt="food logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddccotAtSgd1R7LzWO7dn9PV2Zdc7_IgVhw&usqp=CAU"></img>
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

const RestCard = () => (
  <div className="restCard">
    <img
      className="rest_photo"
      alt="food_image"
      src="https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00="></img>
    <h3>Moon Foods</h3>
    <h4>Indian, South Indian</h4>
    <h4>40 Min</h4>
    <h4>4.4 stars</h4>
  </div>
);

const Body = () => (
  <div className="body">
    <div className="searchBar">search</div>
    <div className="restContainer">
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
      <RestCard />
    </div>
  </div>
);

const Footer = () => (
  <div className="footer">
    <ul>
      <li>Address</li>
      <li>Privacy Policy</li>
      <li>Security Information</li>
      <li>@Copyright 2024</li>
      <li>Made by Harshal</li>
    </ul>
  </div>
);

const AppLayout = () => (
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
