import presetTypes from "mocks/presets.json";
import { setSetting } from "redux-store/slices/settings";
import { useDispatch } from "redux-store/hooks";
import { useState } from "react";


export const useSetting = () => {
  const [countGamers, setCountGamers] = useState(0)
  const [presetId, setPresetId] = useState(0)

  const dispatch = useDispatch();
  const gamerItems = presetTypes.map(({ type }) => type)
  const presetType = presetTypes.find(({ type }) => type === countGamers)
  const preset = presetType?.presets.find(({ id }) => id === presetId)


  const onCountGamersChange = (count: number) => setCountGamers(count)
  const onPresetChange = (presetId: number) => setPresetId(presetId)


  const onSubmit = () => {
    if (!countGamers || !preset) return;

    dispatch(setSetting({ countGamers, preset }));

    alert("Готово!");
  };

  return {
    onSubmit,
    onCountGamersChange,
    onPresetChange,
    gamerItems,
    presets: presetType?.presets || [],
    roles: preset?.roles || [],
  };
};
