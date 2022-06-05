import { useState } from "react";
import { Gamer } from "../clases";
import {
  RoleInterface,
  GamerInterface,
  AbilityTypesInterface,
} from "../interfaces";

interface ReturnInterface {
  gamers: ReadonlyArray<GamerInterface>;
  addGamer: (cardNumber: number, roleId: number) => void;
  setActiveGamer: (gamerId: number) => void;
  setGamers: (games: ReadonlyArray<GamerInterface>) => void;
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
  const [gamers, setGamers] = useState([] as ReadonlyArray<GamerInterface>);

  const addGamer = (cardNumber: number, roleId: number) => {
    const role = roles.find((r) => r.id === roleId) as RoleInterface;

    deleteNumber(cardNumber);
    disableRole(roleId);

    const gamer = new Gamer(cardNumber, role);

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
        gamer.id === gamerId ? { ...gamer, ability: abilityId } : gamer
      )
    );
  };

  const setActiveGamer = (gamerId: number) => {
    setGamers(
      gamers.map((gamer) => ({ ...gamer, isActive: gamer.id === gamerId }))
    );
  };

  return {
    gamers,
    setGamers,
    addGamer,
    setActiveGamer,
    onChageGamerAbility,
  };
};
