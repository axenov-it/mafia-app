import { useState, useEffect } from "react";

export const useTimeSecond = () => {
  const [time, setTimeSecond] = useState(60);
  useEffect(() => {
    const addTimeSecond = setInterval(() => {
      setTimeSecond(time - 1);
    }, 1000);

    return () => {
      clearInterval(addTimeSecond);
    };
  }, [time]);

  return { time, clearInterval };
};
