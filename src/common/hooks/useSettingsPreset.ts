import { selectSettigsPreset, useSelector } from "redux-store";

export const useSettingsPreset = () => {
  const roles = useSelector(selectSettigsPreset);

  return roles;
};
