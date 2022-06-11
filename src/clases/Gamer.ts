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

  setIsKill(value: boolean) {
    this.isKilled = value;
    return this;
  }

  resetGamer() {
    this.isBlocked = false;
    return this;
  }

  resetGamerAll() {
    this.isBlocked = false;
    this.isActive = false;
    this.isKilled = false;

    return this;
  }

  pushIncomingAbility(ability: Ability) {
    const prevAbility =
      this.incomingAbilities[this.incomingAbilities.length - 1];

    const isKilled =
      ability.id === "killing" || ability.id === "collectiveMafiaKilling";

    const isBlocked = ability.id === "block" || ability.id === "immortalBlock";

    const isDisableKilled = prevAbility
      ? prevAbility.id === "healing" || prevAbility.id === "immortalBlock"
      : false;

    if (isKilled && !isDisableKilled) {
      this.isKilled = true;
      this.isBlocked = false;
    }

    if (isBlocked) {
      this.isBlocked = true;
    }

    this.incomingAbilities = [...this.incomingAbilities, ability];
  }
}
