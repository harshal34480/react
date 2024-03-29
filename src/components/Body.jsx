import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [listOfResturant, setResturant] = useState([]);
  const [filteredRestaurent, setfilteredRestaurent] = useState([]);

  const [searchValue, setsearchValue] = useState("");
  console.log("body");

  useEffect(() => {
    apiData();
  }, []);

  const apiData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9319821&lng=77.7523039&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnline();

  if (onlineStatus === false)
    return <h1>Something went wrong Check your internet connection</h1>;
  else
    return listOfResturant == 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
          <div className="search-button">
            <input
              type="text"
              className="search-box"
              value={searchValue}
              onChange={(e) => {
                setsearchValue(e.target.value);
              }}
            />
            <button
              onClick={() => {
                let filterResturant = listOfResturant.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );

                setfilteredRestaurent(filterResturant);
                console.log(searchValue);
              }}>
              Search
            </button>
          </div>
          <button
            onClick={() => {
              const newList = listOfResturant.filter(
                (res) => res.info.avgRating > 4
              );
              console.log(newList);
              setfilteredRestaurent(newList);
            }}>
            Click me
          </button>
        </div>

        <div className="restContainer">
          {filteredRestaurent.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={"/resturantmenu/" + resturant.info.id}>
              <RestCard resData={resturant} />
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Body;
