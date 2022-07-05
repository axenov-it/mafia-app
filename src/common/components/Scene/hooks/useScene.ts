import { sceneTypes, StepInterface } from "common/interfaces";
import { useSelector, selectStep } from "redux-store";
import { Acquaintance, Meeting } from "scenes";

const Scenes: Record<sceneTypes, () => JSX.Element> = {
  acquaintance: Acquaintance,
  meeting: Meeting,
  cards: Acquaintance,
  roulette: Acquaintance,
  voting: Acquaintance,
};

export const useScene = () => {
  const step = useSelector<StepInterface>(selectStep);

  return Scenes[step.scene];
};
