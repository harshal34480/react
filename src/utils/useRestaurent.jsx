import { useEffect } from "react";

const useRestaurent = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch();
    const json = await data.json();
  };
};

export default useRestaurent;
