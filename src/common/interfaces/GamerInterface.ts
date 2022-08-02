import { RoleInterface } from "./RoleInterface";

export interface GamerInterface {
  id: number;
  isActive: boolean;
  isBlocked: boolean;
  role: RoleInterface;
}
