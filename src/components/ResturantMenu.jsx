import { useEffect } from "react";

const ResturantMenu = () => {
  useEffect(() => {
    fetchResturant();
  }, []);

  const fetchResturant = async () => {
    const data = await fetch(
    );
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="resturant-menu">
      <h1>Resturant Name</h1>
      <ul>
        <li>Maggie</li>
        <li>Samosa</li>
        <li>Sambharvadi</li>
      </ul>
    </div>
  );
};

export default ResturantMenu;
