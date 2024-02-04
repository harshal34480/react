import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurent from "../utils/useRestaurentMenu";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurent(resId);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cloudinaryImageId, cuisines } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards);
  return (
    <div className="resturant-menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <p>{costForTwoMessage}</p>
      <h3>{}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
