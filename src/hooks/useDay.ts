import { Gamer, GamerFactory } from "../clases";

interface ParamsInterface {
  gamers: ReadonlyArray<Gamer>;
  setGamers: (gamers: ReadonlyArray<Gamer>) => void;
}

export const useDay = ({ gamers, setGamers }: ParamsInterface) => {
  const onGamerKill = (gamerId: number) => {
    // eslint-disable-next-line no-restricted-globals
    const isKill = confirm("Ви дійсно бажаете видалити гравця ?");

    if (!isKill) return;

    setGamers(
      gamers.map((gamer) => {
        if (gamer.id === gamerId) {
          return GamerFactory.cloneGamer(gamer.setIsKill(true));
        }
        return gamer;
      })
    );
  };

  return {
    onGamerKill,
  };
};
