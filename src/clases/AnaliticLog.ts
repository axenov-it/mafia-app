import { Gamer } from "./Gamer";

export class AnaliticLog {
  type: "day" | "nigth" = "nigth";
  nightNumber: number = 0;
  dayNumber: number = 0;
  currentGamer: Gamer;
  pushedGamer: Gamer;

  constructor(nightNumber: number, currentGamer: Gamer, pushedGamer: Gamer) {
    this.nightNumber = nightNumber;
    this.currentGamer = currentGamer;
    this.pushedGamer = pushedGamer;
  }
}
