import { useEffect } from "react";

const ResturantMenu = () => {
  useEffect(() => {
    fetchResturant();
  }, []);

  const fetchResturant = async () => {
    const data = await fetch(
      "https://www.google-analytics.com/j/collect?v=1&_v=j101&a=9267181&t=pageview&_s=1&dl=https%3A%2F%2Fwww.swiggy.com%2Frestaurants%2Fraghuvir-shyam-chowk-at-shyam-chowk-maltekdi-amravati-692338&dr=https%3A%2F%2Fwww.bing.com%2F&ul=en-us&de=UTF-8&dt=Raghuvir%20Shyam%20Chowk%20%7C%20Home%20delivery%20%7C%20Order%20online%20%7C%20At.%20Shyam%20chowk%20Maltekdi%20Amravati&sd=24-bit&sr=1280x720&vp=1028x777&je=0&_u=QACAAEABAAAAACAAI~&jid=1845743670&gjid=1748461581&cid=1726940235.1704609983&uid=100827038&tid=0&_gid=717971145.1706157114&_r=1&_slc=1&gtm=45He41m0n81MJV7Q8Qv78036788&gcd=11l1l1l1l1&dma=0&tag_exp=71847096&z=379473846"
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
