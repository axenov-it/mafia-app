import { useGamers } from "common/hooks";

export const useGamer = () => {
  const { gamers } = useGamers({ isActiveNight: true });
  const activeGamer = gamers[0];

  return {
    activeGamer,
  };
};
