import presetTypes from "mocks/presets.json";
import rolesTypes from "mocks/roles.json";
import { setSetting } from "redux-store/slices/settings";
import { useDispatch } from "redux-store/hooks";
import { useState } from "react";
import { RoleInterface } from "common/interfaces";
import { useScene } from "common/hooks";

export const useSetting = () => {
  const [countGamers, setCountGamers] = useState(0);
  const [presetId, setPresetId] = useState(0);
  const { runScene } = useScene();

  const dispatch = useDispatch();
  const gamerItems = presetTypes.map(({ type }) => type);

  const presetType = presetTypes.find(({ type }) => type === countGamers);
  const preset = presetType?.presets.find(({ id }) => id === presetId);

  const roles = preset?.roles.map((roleId) =>
    rolesTypes.find(({ id }) => id === roleId)
  ) as RoleInterface[];

  const onCountGamersChange = (count: number) => setCountGamers(count);
  const onPresetChange = (presetId: number) => setPresetId(presetId);

  const onSubmit = () => {
    if (!countGamers || !preset) return;

    dispatch(setSetting({ countGamers, preset }));

    runScene("acquaintance", "Начать знакомство ?");
  };

  return {
    onSubmit,
    onCountGamersChange,
    onPresetChange,
    gamerItems,
    presets: presetType?.presets || [],
    roles: roles || [],
    countGamers,
  };
};
