import { AbilityInterface, AbilityTypes } from "common/interfaces";
import dataAbilities from "mocks/abilities.json";

const abilities = dataAbilities as Record<AbilityTypes, AbilityInterface>;

export const useAbility = (abilityType: AbilityTypes) => abilities[abilityType];
