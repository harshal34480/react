import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const [resInfo, setresInfo] = useState();
  console.log("body");
  useEffect(() => {
    fetchResturant();
  }, []);

  const fetchResturant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.9319821&lng=77.7523039&restaurantId=300767&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setresInfo(json);
  };

  const { name, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCard } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCard);
  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="resturant-menu">
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <ul>
        <li>Maggie</li>
        <li>Samosa</li>
        <li>Sambharvadi</li>
      </ul>
    </div>
  );
};

export default ResturantMenu;
