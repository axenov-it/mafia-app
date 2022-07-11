import { useSettingsGamers, useSettingsRoles } from "common/hooks";

export const RoleSet = () => {
  const roles = useSettingsRoles();
  const gamers = useSettingsGamers();

  console.log(roles, gamers);

  return <h2>RoleSet</h2>;
};
