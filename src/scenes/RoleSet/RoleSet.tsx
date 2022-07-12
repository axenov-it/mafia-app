import { useSettingsGamers, useSettingsPreset } from "common/hooks";

export const RoleSet = () => {
  const preset = useSettingsPreset();
  const gamers = useSettingsGamers();

  console.log(preset, gamers);

  return <h2>RoleSet</h2>;
};
