import { GamerType, RoleIdTypes, RoleInterface } from "common/interfaces";
import { Beauty, Doctor, Godfather } from "features/gamers";

const gamers: Record<RoleIdTypes, GamerType> = {
  beauty: Beauty,
  sheriff: Beauty,
  doctor: Doctor,
  admirer: Beauty,
  detective: Beauty,
  godfather: Godfather,
  mafiosi: Beauty,
  maniac: Beauty,
  peaceful: Beauty,
  scrounger: Beauty,
};

export const useGamer = (role: RoleInterface) => gamers[role.id];
