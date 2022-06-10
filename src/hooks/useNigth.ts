import { useRef, useState } from "react";
import { Ability, Gamer, GamerFactory } from "../clases";
import { AddAnaliticInterface, NigthPushTypes } from "../interfaces";

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

  const updateGamers = () => {
    setGamers(gamers.map((gamer) => GamerFactory.cloneGamer(gamer)));
  };

  const setNigthEnd = () => {
    setNightNumber(nightNumber + 1);

    setGamers(
      gamers.map((gamer) => {
        return GamerFactory.cloneGamer(gamer.resetGamer());
      })
    );
  };

  const getMessagePush = (type: NigthPushTypes) =>
    type === "next"
      ? "Ви дійсно бажаете перейти до наступного гравця ?"
      : "Ви дійсно бажаете використати здібність ?";

  const onGamerPush = (gamerId: number, type: NigthPushTypes) => {
    // eslint-disable-next-line no-restricted-globals
    const isPush = confirm(getMessagePush(type));

    if (!isPush) return;

    const currentGamer = gamers[activeGamerIndex.current];
    currentGamer.setIsActive(false);

    const pushedGamer = gamers.find(({ id }) => id === gamerId) as Gamer;

    const ability = new Ability(currentGamer.abilityType, nightNumber);

    if (type !== "next") {
      pushedGamer.pushIncomingAbility(ability);
    }

    activeGamerIndex.current = getActiveGamerIndex();

    const nextGamer = gamers[activeGamerIndex.current];

    if (nextGamer) nextGamer.setIsActive(true);

    updateGamers();

    addAnaliticLog({
      currentGamer,
      pushedGamer,
      nightNumber,
    });

    if (!nextGamer) {
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
