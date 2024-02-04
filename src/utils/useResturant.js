import { useEffect } from "react";

const useRestaurent = () => {
  const [listOfResturant, setResturant] = useState([]);
  const [filteredRestaurent, setfilteredRestaurent] = useState([]);
  useEffect(() => {
    apidata();
  }, []);

  const apidata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9319821&lng=77.7523039&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
};

export default useRestaurent;
