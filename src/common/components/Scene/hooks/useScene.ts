import { SceneTypes, StepInterface } from "common/interfaces";
import { useSelector, selectStep } from "redux-store";
import { Acquaintance, Meeting, Setting, RoleSet, Day, Night } from "scenes";

const Scenes: Record<SceneTypes, () => JSX.Element> = {
  acquaintance: Acquaintance,
  meeting: Meeting,
  cards: Acquaintance,
  roulette: Acquaintance,
  voting: Acquaintance,
  setting: Setting,
  roleset: RoleSet,
  day: Day,
  night: Night,
};

export const useScene = () => {
  const step = useSelector<StepInterface>(selectStep);

  return Scenes[step.scene];
};
