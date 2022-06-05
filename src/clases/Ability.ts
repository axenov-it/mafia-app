import { AbilityTypesInterface } from "../interfaces";

export class Ability {
  id: AbilityTypesInterface;
  nightNumber: number = 1;

  constructor(id: AbilityTypesInterface, nightNumber: number) {
    this.id = id;
    this.nightNumber = nightNumber;
  }
}
