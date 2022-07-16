import { useState, useEffect } from "react";
import presets from "../../../mocks/presets.json";
import { PresetInterface } from "common/interfaces";
import { useDispatch } from "../../../redux-store/hooks";
import { setSetting } from "../../../redux-store/slices/settings";

export const useForm = () => {
  const [countGamers, setCountGamers] = useState("");
  const [presetId, setPresetId] = useState("");
  const [preset, setPreset] = useState([] as PresetInterface[]);
  const [countDirty, setCountDirty] = useState(false);
  const [presetIdDirty, setPresetIdDirty] = useState(false);
  const [countError, setCountError] = useState("Обов'язково до заповнення");
  const [presetIdError, setPresetIdError] = useState("Обов'язково до заповнення");
  const [formValid, setFormValid] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const dispatch = useDispatch();


  const presetType: any = presets.find(
    (game) => game.type === Number(countGamers)
  );

  const findPreset = presetId
    ? presetType.presets.find(
      (preset: PresetInterface) => preset.id === Number(presetId)
    )
    : "";

  useEffect(() => {

    setPreset(findPreset);
  }, [findPreset]);

  useEffect(() => {

    if (countError || presetIdError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [countError, presetIdError]);

  const blurHendler = (e: any) => {

    switch (e.target.name) {

      case "countGamers":
        setCountDirty(true);
        break;

      case "presetId":
        setPresetIdDirty(true);
        break;
    }
  };
  const countGamer = (e: any) => {

    setCountGamers(e.target.value);
    if (e.target.value) {
      setCountError("");
    }
  };

  const presetIdGamer = (e: any) => {

    setPresetId(e.target.value);
    if (e.target.value) {
      setPresetIdError("");
    }
  };

  const onSubmit = (e: any) => {

    e.preventDefault();
    dispatch(setSetting({ countGamers: Number(countGamers), preset: Object(preset) }))
    setCountGamers("");
    setPresetId("");
    setOpenAlert(true)
    setInterval(() => {
      setOpenAlert(false)
    }, 3000)
  };

  return {
    onSubmit,
    countGamers,
    countGamer,
    blurHendler,
    countDirty,
    countError,
    presets,
    preset,
    formValid,
    presetId,
    presetIdGamer,
    presetIdDirty,
    presetIdError,
    presetType,
    openAlert
  };
};
