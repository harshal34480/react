import RestCard from "./RestCard";
import { resObj } from "../utils/raw_data";
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            resObj = resObj.filter((res) => res.info.avgRating > 4);
            console.log(resObj);
          }}>
          Click me
        </button>
      </div>

      <div className="restContainer">
        {resObj.map((resturant) => (
          <RestCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
