import { GamerType, RoleIdTypes, RoleInterface } from "common/interfaces";
import { Beauty, Doctor, Godfather, Sheriff, Admirer } from "features/gamers";

const gamers: Record<RoleIdTypes, GamerType> = {
  beauty: Beauty,
  sheriff: Sheriff,
  doctor: Doctor,
  admirer: Admirer,
  detective: Beauty,
  godfather: Godfather,
  mafiosi: Beauty,
  maniac: Beauty,
  peaceful: Beauty,
  scrounger: Beauty,
};

export const useGamer = (role: RoleInterface) => gamers[role.id];
