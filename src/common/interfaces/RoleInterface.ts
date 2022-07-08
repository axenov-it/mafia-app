import { RoleTypes } from "./types";

export interface RoleInterface {
  id: number;
  type: RoleTypes;
  name: string;
  priority: number;
  isActiveNight: boolean;
  isDisabled: boolean;
  desctiption: string;
  abilities: string[];
}
