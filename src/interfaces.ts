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
  | "collectiveMafiaKilling"
  | "immortalBlock"
  | "";

export type NigthPushTypes = "push" | "next";

export type AbilityInterface = Record<
  AbilityTypesInterface,
  { id: AbilityTypesInterface; name: string }
>;

export interface RoleInterface {
  id: number;
  name: string;
  type: "mafia" | "city" | "self";
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

export type OnChageGamerAbilityInterface = (
  gamerId: number
) => (e: any) => void;
