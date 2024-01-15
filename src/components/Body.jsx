import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  let [listOfResturant, updateResturant] = useState([]);

  useEffect(() => {
    apiData();
  }, []);

  const apiData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9319821&lng=77.7523039&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    updateResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfResturant == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const newList = listOfResturant.filter(
              (res) => res.info.avgRating < 4
            );
            console.log(newList);
            updateResturant(newList);
          }}>
          Click me
        </button>
      </div>

      <div className="restContainer">
        {listOfResturant.map((resturant) => (
          <RestCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
