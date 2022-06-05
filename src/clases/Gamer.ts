import { AbilityTypesInterface, RoleInterface } from "../interfaces";
import { Ability } from "./Ability";

export class Gamer {
  id: number;
  title: string;
  abilityType: AbilityTypesInterface;
  isActive: boolean = false;
  isKilled: boolean = false;
  isBlocked: boolean = false;
  incomingAbilities: ReadonlyArray<Ability> = [];
  role: RoleInterface;

  constructor(id: number, role: RoleInterface) {
    this.id = id;
    this.role = role;
    this.abilityType = role.abilities.length ? role.abilities[0] : "";
    this.title = `Гравець-${id}`;
  }

  setAbility(abilityType: AbilityTypesInterface) {
    this.abilityType = abilityType;
    return this;
  }

  setIsActive(value: boolean) {
    this.isActive = value;
    return this;
  }

  pushIncomingAbility(ability: Ability) {
    const prevAbility =
      this.incomingAbilities[this.incomingAbilities.length - 1];

    if (ability.id === "killing" && prevAbility.id !== "healing") {
      this.isKilled = true;
    }

    if (ability.id === "block") {
      this.isBlocked = true;
    }

    this.incomingAbilities = [...this.incomingAbilities, ability];
  }
}
