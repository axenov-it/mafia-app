import { RoleIdTypes, RoleInterface } from "common/interfaces";
import { Beauty, Sheriff } from "features/gamers";

const gamers: Record<RoleIdTypes, typeof Beauty | typeof Sheriff> = {
  beauty: Beauty,
  sheriff: Sheriff,
  doctor: Sheriff,
  admirer: Sheriff,
  detective: Sheriff,
  godfather: Sheriff,
  mafiosi: Sheriff,
  maniac: Sheriff,
  peaceful: Sheriff,
  scrounger: Sheriff,
};

export const useGamer = (role: RoleInterface) => gamers[role.id];
