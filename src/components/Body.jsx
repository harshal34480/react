import RestCard from "./RestCard";
import { resObj } from "../utils/raw_data";
import { useState } from "react";
const Body = () => {
  let [listOfResturant, updateResturant] = useState(resObj);

  return (
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
