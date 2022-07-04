import { Acquaintance } from "../interfaces";

export const useAcquaintanceHoks = () => {
  const numberPlayers = 14;
  const area: Acquaintance[] = [];
  for (let i = 0; i < numberPlayers; i++) {
    area.push({ id: i + 1, isActiv: i === 1 });
  }
  return {area};
};
