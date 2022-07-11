import { selectSettigsRoles, useSelector } from "redux-store";

export const useSettingsRoles = () => {
  const roles = useSelector(selectSettigsRoles);

  return roles;
};
