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

  const [nightSettings, setNigthSettings] = useState({
    number: 0,
    analytics: [] as {},
  });

  const getActiveGamerIndex = () =>
    gamers.findIndex(
      ({ role: { isActiveNight } }, index) =>
        isActiveNight && index > activeGamerIndex.current
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

  const onGamerPush = (gamerId: number) => {
    // eslint-disable-next-line no-restricted-globals
    const isPush = confirm("Ви дійсно бажаете використати здібність ?");

    const currentGamer = gamers[activeGamerIndex.current];
    const pushedGamer = gamers.find(({ id }) => id === gamerId);

    if (isPush && pushedGamer) {
      const ability = new Ability(
        currentGamer.abilityType,
        nightSettings.number
      );

      pushedGamer.pushIncomingAbility(ability);

      activeGamerIndex.current = getActiveGamerIndex();

      const newGamers = gamers.map((gamer, index) => {
        if (gamer.id === pushedGamer.id) {
          return GamerFactory.cloneGamer(pushedGamer);
        }

        if (activeGamerIndex.current === index) {
          return GamerFactory.cloneGamer(gamer.setIsActive(true));
        }

        return GamerFactory.cloneGamer(gamer.setIsActive(false));
      });

      addAnaliticLog({
        currentGamer,
        pushedGamer,
        nightNumber: nightSettings.number,
      });

      setGamers(newGamers);
    }
  };

  const onPlayNigth = () => {
    if (activeGamerIndex.current === -1) {
      setNigthSettings({
        ...nightSettings,
        number: nightSettings.number + 1,
      });

      activeGamerIndex.current = getActiveGamerIndex();
      setActiveGamer();
    }
  };

  return {
    onPlayNigth,
    onGamerPush,
    nightSettings,
  };
};
