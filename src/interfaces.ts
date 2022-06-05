import { Gamer } from "./clases";

export type AbilityTypesInterface =
  | "block"
  | "immortal"
  | "healing"
  | "checkRole"
  | "checkPersonTeam"
  | "killing"
  | "сomparePersonsTeam"
  | "checkSheriffRole"
  | "collectiveKilling"
  | "";

export type AbilityInterface = Record<
  AbilityTypesInterface,
  { id: AbilityTypesInterface; name: string }
>;

export interface RoleInterface {
  id: number;
  name: string;
  priority: number;
  isActiveNight: boolean;
  isDisabled: boolean;
  desctiption: string;
  abilities: ReadonlyArray<AbilityTypesInterface>;
}

export interface GamerInterface {
  id: number;
  title: string;
  ability: AbilityTypesInterface;
  isActive: boolean;
  isKilled: boolean;
  isBlocked: boolean;
  incomingAbilities: ReadonlyArray<AbilityTypesInterface>;
  role: RoleInterface;
  pushIncomingAbility: (ablility: AbilityTypesInterface) => void;
}

export interface AddAnaliticInterface {
  nightNumber: number;
  currentGamer: Gamer;
  pushedGamer: Gamer;
}
