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

const RestCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  return (
    <div className="restCard">
      <img
        className="rest_photo"
        alt="food_image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "111293",
      name: "Jazeerah Restaurant",
      cloudinaryImageId: "mqjvlapvrchf8aj41std",
      locality: "Ambapeth",
      areaName: "Maltekdi",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Biryani",
        "Chinese",
        "Maharashtrian",
        "Mughlai",
        "Street Food",
      ],
      avgRating: 4.1,
      parentId: "110452",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-09 23:30:00",
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
      link: "https://www.swiggy.com/restaurants/jazeerah-restaurant-ambapeth-maltekdi-amravati-111293",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "517655",
      name: "Hotel Abdullah",
      cloudinaryImageId: "qtnhaz008woisdbs0pgz",
      locality: "Itwara Chowk",
      areaName: "Maltekedi",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "Biryani",
        "Maharashtrian",
        "Mughlai",
        "Beverages",
      ],
      avgRating: 4,
      parentId: "97714",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 0.2,
        serviceability: "SERVICEABLE",
        slaString: "14 mins",
        lastMileTravelString: "0.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-09 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
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
      link: "https://www.swiggy.com/restaurants/hotel-abdullah-itwara-chowk-maltekedi-amravati-517655",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "110887",
      name: "New Eagle Restaurant",
      cloudinaryImageId: "gn2qajmeazmfcyuycfxa",
      locality: "Nai Basti",
      areaName: "Maltekdi",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Maharashtrian",
        "South Indian",
        "Thalis",
        "Chinese",
        "Biryani",
      ],
      avgRating: 4.2,
      veg: true,
      parentId: "146434",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 00:00:00",
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
      link: "https://www.swiggy.com/restaurants/new-eagle-restaurant-nai-basti-maltekdi-amravati-110887",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "109855",
      name: "Raai Jeera Veg & Desi Restaurant",
      cloudinaryImageId: "bagnqcsjtrowukwnlvyc",
      locality: "Rajapeth",
      areaName: "Maltekdi",
      costForTwo: "₹260 for two",
      cuisines: [
        "North Indian",
        "Maharashtrian",
        "Chinese",
        "Thalis",
        "Biryani",
        "Beverages",
      ],
      avgRating: 4.2,
      veg: true,
      parentId: "164009",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-09 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
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
      link: "https://www.swiggy.com/restaurants/raai-jeera-veg-and-desi-restaurant-rajapeth-maltekdi-amravati-109855",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "691784",
      name: "Raghuvir Rajapeth",
      cloudinaryImageId: "b5afbdbed076d75ba4554cba2aad5392",
      locality: "Badnera Road",
      areaName: "Maltekdi",
      costForTwo: "₹200 for two",
      cuisines: [
        "Sweets",
        "Bakery",
        "Desserts",
        "Fast Food",
        "Snacks",
        "Maharashtrian",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "457327",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-09 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
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
      link: "https://www.swiggy.com/restaurants/raghuvir-rajapeth-badnera-road-maltekdi-amravati-691784",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "692338",
      name: "Raghuvir Shyam Chowk",
      cloudinaryImageId: "56c639f72be2b1c9ab8d89dd0e23f770",
      locality: "At. Shyam chowk",
      areaName: "Maltekdi",
      costForTwo: "₹200 for two",
      cuisines: ["Sweets", "Bakery", "Fast Food", "Beverages"],
      avgRating: 4.5,
      veg: true,
      parentId: "457328",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-09 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
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
      link: "https://www.swiggy.com/restaurants/raghuvir-shyam-chowk-at-shyam-chowk-maltekdi-amravati-692338",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "713493",
      name: "Al Kareem Family Restaurants",
      cloudinaryImageId: "e62f00f8ed2bb5493f3a6c58c17855e0",
      locality: "usmaniya masjid compound",
      areaName: "Maltekdi",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Maharashtrian",
        "Biryani",
        "Mughlai",
        "Beverages",
      ],
      avgRating: 4.1,
      parentId: "425934",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-09 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
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
      link: "https://www.swiggy.com/restaurants/al-kareem-family-restaurants-usmaniya-masjid-compound-maltekdi-amravati-713493",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "113985",
      name: "New Punjabi Dhaba & Restaurant",
      cloudinaryImageId: "iflez6gvudkl8fwi7f9c",
      locality: "Vivekanand Colony",
      areaName: "Maltekdi",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "Maharashtrian",
        "Biryani",
        "Mughlai",
        "Chinese",
        "Beverages",
      ],
      avgRating: 4.2,
      parentId: "147606",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-09 23:40:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
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
      link: "https://www.swiggy.com/restaurants/new-punjabi-dhaba-and-restaurant-vivekanand-colony-maltekdi-amravati-113985",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "130989",
      name: "Friends Adda",
      cloudinaryImageId: "lxde3hbkdq73frqspzbz",
      areaName: "Maltekdi",
      costForTwo: "₹200 for two",
      cuisines: ["Pizzas", "Burgers", "Chinese", "Beverages"],
      avgRating: 3.7,
      veg: true,
      parentId: "84138",
      avgRatingString: "3.7",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-09 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
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
      link: "https://www.swiggy.com/restaurants/friends-adda-maltekdi-amravati-130989",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "109873",
      name: "Sahuji Ka Dhaba",
      cloudinaryImageId: "pw8iqwns1qbzokxcvf2n",
      locality: "Irwin-Railway Station Rd",
      areaName: "Maltekdi",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Biryani",
        "Maharashtrian",
        "Mughlai",
        "Seafood",
      ],
      avgRating: 3.8,
      parentId: "174834",
      avgRatingString: "3.8",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 00:00:00",
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
      link: "https://www.swiggy.com/restaurants/sahuji-ka-dhaba-irwin-railway-station-rd-maltekdi-amravati-109873",
      type: "WEBLINK",
    },
  },
];

const Body = () => (
  <div className="body">
    <div className="searchBar">search</div>
    <div className="restContainer">
      {resObj.map((resturant) => (
        <RestCard key={resturant.info.id} resData={resturant} />
      ))}
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
