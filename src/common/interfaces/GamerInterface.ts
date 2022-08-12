import { RoleInterface } from "./RoleInterface";
import { AbilityTypes } from "./types";

export interface GamerIcoumingAbility {
  id: AbilityTypes;
  gameCircle: number;
  isNeedClear: boolean;
}

export interface GamerInterface {
  id: number;
  isActive: boolean;
  isBlocked: boolean;
  role: RoleInterface;
  incomingAbilities: GamerIcoumingAbility[];
}
