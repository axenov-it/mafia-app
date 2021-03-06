import { SceneTypes } from "./types";
export interface StepInterface {
  isActive: boolean;
  type: string;
  scene: SceneTypes;
  isRepeat: boolean;
  isRequired: boolean;
  isUsed: boolean;
  action: string;
  gamerRoleTime: number;
}
