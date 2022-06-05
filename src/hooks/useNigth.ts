import { useRef } from "react";
import { GamerInterface } from "../interfaces";
import { useGetGamerStatus } from "./useGetGamerStatus";

interface ParamsInterface {
  gamers: ReadonlyArray<GamerInterface>;
  setGamers: (gamers: ReadonlyArray<GamerInterface>) => void;
}

export const useNight = ({ gamers, setGamers }: ParamsInterface) => {
  const { getGamerStatus } = useGetGamerStatus();
  const activeGamerIndex = useRef(-1);

  console.log(activeGamerIndex);

  const getactiveGamerIndex = () =>
    gamers.findIndex(
      ({ role: { isActiveNight } }, index) =>
        isActiveNight && index > activeGamerIndex.current
    );

  const setActiveGamer = () =>
    setGamers(
      gamers.map((gamer, index) => ({
        ...gamer,
        isActive: activeGamerIndex.current === index,
      }))
    );

  const setGamerPushStatus = (gamerId: number) => {
    const currentGamer = gamers[activeGamerIndex.current];
    const pushGamer = gamers.find(({ id }) => id === gamerId);

    console.log("CURRENT GAMER", currentGamer);

    if (!pushGamer) return;

    const gamerStatus = getGamerStatus(
      currentGamer.ability,
      pushGamer.incomingAbilities
    );

    setGamers(
      gamers.map((gamer, index) => {
        if (gamer.id === gamerId) {
          return {
            ...gamer,
            incomingAbilities: [
              ...gamer.incomingAbilities,
              currentGamer.ability,
            ],
            ...gamerStatus,
          };
        }

        return { ...gamer, isActive: activeGamerIndex.current === index };
      })
    );
  };

  const onGamerPush = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    const isPush = confirm("Ви дійсно бажаете використати здібність ?");

    if (isPush) {
      activeGamerIndex.current = getactiveGamerIndex();

      setGamerPushStatus(id);
    }
  };

  const onPlayNigth = () => {
    if (activeGamerIndex.current === -1) {
      activeGamerIndex.current = getactiveGamerIndex();
      setActiveGamer();
    }
  };

  return {
    onPlayNigth,
    onGamerPush,
  };
};
