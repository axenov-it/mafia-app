import { AbilityTypes, GamerInterface } from "common/interfaces";
import { useSelector, useDispatch, selectGames, setGamers } from "redux-store";
import compose from "lodash/fp/compose";
interface FilterProps {
  isActiveNight: boolean;
}

interface PushedGamerOptionsInterface {
  isNeedClear?: boolean;
  isActive?: boolean;
  isBlocked?: boolean;
}

interface PipeGamerInterface {
  gamer: GamerInterface;
  ability: AbilityTypes;
  gameCircle: number;
  options?: PushedGamerOptionsInterface;
  pipeType?: "protection" | string | "";
}

const getPushedGamer = ({
  gamer,
  ability,
  options,
  gameCircle,
  pipeType,
}: PipeGamerInterface) => {
  if (pipeType === "protection") return { ...gamer };

  return {
    ...gamer,
    incomingAbilities: [
      ...gamer.incomingAbilities,
      {
        id: ability,
        gameCircle,
        isNeedClear:
          options?.isNeedClear === undefined ? true : options?.isNeedClear,
      },
    ],
  };
};

const getProtectionGamer = ({
  gamer,
  ability,
  options,
  gameCircle,
}: PipeGamerInterface) => {
  const protectionType = gamer.incomingAbilities.find(
    ({ id }) => id === "immortal" || id === "immortalBlock" || id === "healing"
  );

  if (protectionType?.id === "healing") {
    gamer.incomingAbilities = gamer.incomingAbilities.filter(
      ({ id }) => id !== "healing"
    );
  }

  const pipeType =
    protectionType &&
    (ability === "killing" || ability === "collectiveMafiaKilling")
      ? "protection"
      : "";

  return {
    gamer,
    ability,
    options,
    gameCircle,
    pipeType,
  };
};

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

    pushIncomingAbility: (
      pushGamerId: number,
      ability: string,
      options?: PushedGamerOptionsInterface
    ) =>
      dispatch(
        setGamers(
          dataGamers.map((gamer) =>
            pushGamerId === gamer.id
              ? compose(
                  getPushedGamer,
                  getProtectionGamer
                )({ gamer, ability, gameCircle: 1, options })
              : gamer
          )
        )
      ),
  };
};
