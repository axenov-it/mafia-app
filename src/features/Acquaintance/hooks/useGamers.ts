import { GamerInterface } from "../interfaces";

export const useGamers = () => {
  const numberPlayers = 14;
  const gamers: GamerInterface[] = [];

  for (let i = 0; i < numberPlayers; i++) {
    gamers.push({ id: i + 1, isActiv: i === 1 });
  }

  return { gamers };
};
