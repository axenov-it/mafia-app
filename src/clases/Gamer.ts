import {
  GamerInterface,
  AbilityTypesInterface,
  RoleInterface,
} from "../interfaces";

export class Gamer {
  id: number;
  title: string;
  ability: AbilityTypesInterface;
  isActive: boolean = false;
  isKilled: boolean = false;
  isBlocked: boolean = false;
  incomingAbilities: ReadonlyArray<AbilityTypesInterface> = [];
  role: RoleInterface;

  constructor(id: number, role: RoleInterface) {
    this.id = id;
    this.role = role;
    this.ability = role.abilities.length ? role.abilities[0] : "";
    this.title = `Гравець-${id}`;
  }
}
