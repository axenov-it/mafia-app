import { useState } from "react";
import { Gamer, GamerFactory } from "../clases";
import { RoleInterface, AbilityTypesInterface } from "../interfaces";
import { useDefaultGames } from "./useDefaultGamers";

interface ReturnInterface {
  gamers: ReadonlyArray<Gamer>;
  addGamer: (cardNumber: number, roleId: number) => void;
  setGamers: (games: ReadonlyArray<Gamer>) => void;
  onChageGamerAbility: (
    gamerId: number,
    abilityId: AbilityTypesInterface
  ) => void;
}

interface ParamsInterface {
  deleteNumber: (value: number) => void;
  disableRole: (value: number) => void;
  roles: ReadonlyArray<RoleInterface>;
}

export const useGames = ({
  deleteNumber,
  disableRole,
  roles,
}: ParamsInterface): ReturnInterface => {
  const { defaultGamers } = useDefaultGames()
  const [gamers, setGamers] = useState(defaultGamers as ReadonlyArray<Gamer>);

  const addGamer = (cardNumber: number, roleId: number) => {
    const role = roles.find((r) => r.id === roleId) as RoleInterface;

    deleteNumber(cardNumber);
    disableRole(roleId);

    const gamer = GamerFactory.createGamer(cardNumber, role);

    setGamers(
      [...gamers, gamer].sort(
        (a: any, b: any) => a.role.priority - b.role.priority
      )
    );
  };

  const onChageGamerAbility = (
    gamerId: number,
    abilityId: AbilityTypesInterface
  ) => {
    setGamers(
      gamers.map((gamer) =>
        gamer.id === gamerId
          ? GamerFactory.cloneGamer(gamer.setAbility(abilityId))
          : gamer
      )
    );
  };

  return {
    gamers,
    setGamers,
    addGamer,
    onChageGamerAbility,
  };
};
