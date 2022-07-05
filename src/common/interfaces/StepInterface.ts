export type sceneTypes =
  | "acquaintance"
  | "cards"
  | "meeting"
  | "roulette"
  | "voting";

export interface StepInterface {
  isActive: boolean;
  type: string;
  scene: sceneTypes;
  isRepeat: boolean;
  isRequired: boolean;
  isUsed: boolean;
  action: string;
  gamerRoleTime: number;
}
