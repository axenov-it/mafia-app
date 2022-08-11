import { useGamers } from "common/hooks";
import { useState } from "react";

export const useNightActions = () => {
  const { gamers } = useGamers({ isActiveNight: true });
  const [gamerNumbers, setGamerNumbers] = useState(gamers.map(({ id }) => id));
  const [currentIndex, setCurrentIndex] = useState(2);

  const activeGamer = gamers[currentIndex];

  const runNextGamer = (currentGamerNumber: number) => {
    console.log(currentGamerNumber);
    setCurrentIndex(currentIndex + 1);
  };

  return {
    activeGamer,
    gamerNumbers,
    runNextGamer,
  };
};
