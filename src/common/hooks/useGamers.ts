import { GamerInterface } from "common/interfaces";
import { useSelector, useDispatch, selectGames, setGamers } from "redux-store";

interface FilterProps {
  isActiveNight: boolean;
}

export const useGamers = (filter?: FilterProps) => {
  const dataGamers = useSelector(selectGames);
  const dispatch = useDispatch();

  return {
    gamers: dataGamers.filter((gamer) => {
      if (!filter) return true;

      if (gamer.role.isActiveNight === filter.isActiveNight) return true;

      return false;
    }),
    setGamers: (gamers: GamerInterface[]) => dispatch(setGamers(gamers)),
    pushIncomingAbility: (gamerId: number, ability: string) =>
      dispatch(
        setGamers(
          dataGamers.map((gamer) => {
            return gamerId === gamer.id
              ? {
                  ...gamer,
                  incomingAbilities: [...gamer.incomingAbilities, ability],
                }
              : gamer;
          })
        )
      ),
  };
};
