import { useEffect, useState } from "react";

const useOnline = () => {
  const [onlineStatus, setonlineStatus] = useState();

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });
    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnline;
