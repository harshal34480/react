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

const resObj = {
  info: {
    id: "300767",
    name: "Hotel Al Hayat",
    cloudinaryImageId: "puykvy7shqxhuyvdwcdf",
    locality: "Etwara Bazar",
    areaName: "Maltekdi",
    costForTwo: "₹250 for two",
    cuisines: [
      "Biryani",
      "North Indian",
      "Mughlai",
      "Maharashtrian",
      "Beverages",
    ],
    avgRating: 4,
    parentId: "97811",
    avgRatingString: "4.0",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 0.2,
      serviceability: "SERVICEABLE",
      slaString: "19 mins",
      lastMileTravelString: "0.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-08 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹199",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/hotel-al-hayat-etwara-bazar-maltekdi-amravati-300767",
    type: "WEBLINK",
  },
};

const Body = () => (
  <div className="body">
    <div className="searchBar">search</div>
    <div className="restContainer">
      <RestCard resName={} />
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
