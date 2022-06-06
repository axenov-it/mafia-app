import { useRef, useState } from "react";
import { Ability, Gamer, GamerFactory } from "../clases";
import { AddAnaliticInterface } from "../interfaces";

interface ParamsInterface {
  gamers: ReadonlyArray<Gamer>;
  setGamers: (gamers: ReadonlyArray<Gamer>) => void;
  addAnaliticLog: (params: AddAnaliticInterface) => void;
}

export const useNight = ({
  gamers,
  setGamers,
  addAnaliticLog,
}: ParamsInterface) => {
  const activeGamerIndex = useRef(-1);

  const [nightNumber, setNightNumber] = useState(1);

  const getActiveGamerIndex = () =>
    gamers.findIndex(
      ({ role: { isActiveNight }, isBlocked, isKilled }, index) =>
        isActiveNight &&
        index > activeGamerIndex.current &&
        !isBlocked &&
        !isKilled
    );

  const setActiveGamer = () => {
    setGamers(
      gamers.map((gamer, index) =>
        GamerFactory.cloneGamer(
          gamer.setIsActive(activeGamerIndex.current === index)
        )
      )
    );
  };

  const updateGamers = (pushedGamer: Gamer) => {
    const newGamers = gamers.map((gamer, index) => {
      if (gamer.id === pushedGamer.id) {
        return GamerFactory.cloneGamer(pushedGamer);
      }

      if (activeGamerIndex.current === index) {
        return GamerFactory.cloneGamer(gamer.setIsActive(true));
      }

      return GamerFactory.cloneGamer(gamer.setIsActive(false));
    });

    setGamers(newGamers);
  };

  const setNigthEnd = () => {
    setNightNumber(nightNumber + 1);

    setGamers(
      gamers.map((gamer) => {
        return GamerFactory.cloneGamer(gamer.resetGamer());
      })
    );
  };

  const onGamerPush = (gamerId: number) => {
    // eslint-disable-next-line no-restricted-globals
    const isPush = confirm("Ви дійсно бажаете використати здібність ?");

    const currentGamer = gamers[activeGamerIndex.current];
    const pushedGamer = gamers.find(({ id }) => id === gamerId);

    if (isPush && pushedGamer) {
      const ability = new Ability(currentGamer.abilityType, nightNumber);

      pushedGamer.pushIncomingAbility(ability);

      activeGamerIndex.current = getActiveGamerIndex();

      updateGamers(pushedGamer);

      addAnaliticLog({
        currentGamer,
        pushedGamer,
        nightNumber,
      });
    }

    if (activeGamerIndex.current === -1) {
      setNigthEnd();
    }
  };

  const onPlayNigth = () => {
    if (activeGamerIndex.current === -1) {
      activeGamerIndex.current = getActiveGamerIndex();
      setActiveGamer();
    }
  };

  return {
    onPlayNigth,
    onGamerPush,
    nightNumber,
  };
};
