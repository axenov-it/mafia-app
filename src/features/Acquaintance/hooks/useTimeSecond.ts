import { useState, useEffect } from "react";

export const useTimeSecond = () => {
  const [time, setTimeSecond] = useState(10);

  useEffect(() => {
    const addTimeSecond = setInterval(() => {
      setTimeSecond((time) => {
        if (time < 1) {
          clearInterval(addTimeSecond);
          return 0;
        }
        return time - 1;
      });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return time;
};
