import { useState } from "react";

export const useStart = () => {
  const [isStart, setIsStart] = useState(false);

  return {
    isStart,
    runStart: () => setIsStart(true),
    stopStart: () => setIsStart(false),
  };
};
