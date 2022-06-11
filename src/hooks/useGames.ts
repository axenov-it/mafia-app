import { useState } from "react";
import { Gamer, GamerFactory } from "../clases";
import { RoleInterface } from "../interfaces";
import { useDefaultGames } from "./useDefaultGamers";

interface ParamsInterface {
  deleteNumber: (value: number) => void;
  disableRole: (value: number) => void;
  roles: ReadonlyArray<RoleInterface>;
}

export const useGames = ({
  deleteNumber,
  disableRole,
  roles,
}: ParamsInterface) => {
  const { defaultGamers } = useDefaultGames(0);
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

  const onResetGamerAll = (gamerId: number) => () => {
    // eslint-disable-next-line no-restricted-globals
    const isReset = confirm("Ви дійсно бажаете повернути гравця ?");

    if (!isReset) return;

    setGamers(
      gamers.map((gamer) =>
        gamer.id === gamerId
          ? GamerFactory.cloneGamer(gamer.resetGamerAll())
          : gamer
      )
    );
  };

  const onChageGamerAbility = (gamerId: number) => (e: any) => {
    setGamers(
      gamers.map((gamer) =>
        gamer.id === gamerId
          ? GamerFactory.cloneGamer(gamer.setAbility(e.target.value))
          : gamer
      )
    );
  };

  return {
    gamers,
    setGamers,
    addGamer,
    onChageGamerAbility,
    onResetGamerAll,
  };
};
