import { useState } from "react";
import { RoleInterface } from "../interfaces";

import initialRoles from "../mocks/roles.json";

interface ReturnInterface {
  roles: ReadonlyArray<RoleInterface>;
  disableRole: (roleId: number) => void;
  resetRoles: () => void;
}

export const useRoles = (): ReturnInterface => {
  const [roles, setRoles]: any = useState(initialRoles);

  const disableRole = (roleId: number) => {
    setRoles(roles.filter((role: RoleInterface) => role.id !== roleId));
  };

  const resetRoles = () => {
    setRoles(initialRoles);
  };

  return {
    roles,
    disableRole,
    resetRoles,
  };
};
