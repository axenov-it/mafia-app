import { RoleInterface } from "../interfaces";
import { Gamer } from "./Gamer";

export class GamerFactory {
  static cloneGamer({
    id,
    role,
    abilityType,
    incomingAbilities,
    isActive,
    isBlocked,
    isKilled,
  }: Gamer) {
    const newGamer = new Gamer(id, role);

    newGamer.abilityType = abilityType;
    newGamer.isActive = isActive;
    newGamer.isBlocked = isBlocked;
    newGamer.isKilled = isKilled;
    newGamer.incomingAbilities = [...incomingAbilities];

    return newGamer;
  }

  static createGamer(id: number, role: RoleInterface) {
    return new Gamer(id, role);
  }
}
