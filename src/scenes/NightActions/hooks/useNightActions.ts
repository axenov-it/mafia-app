import { useGamers } from "common/hooks";
import { useState } from "react";

export const useNightActions = () => {
  const { gamers } = useGamers({ isActiveNight: true });
  const [gamerNumbers, setGamerNumbers] = useState(gamers.map(({ id }) => id));

  console.log(gamerNumbers);

  const activeGamer = gamers[3];

  return {
    activeGamer,
    gamerNumbers,
  };
};
