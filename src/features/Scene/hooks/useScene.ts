import { Acquaintance } from "../../Acquaintance";
import { Meeting } from "../../Meeting";
import { useSelector, selectStep } from "../../../redux";
import { sceneTypes } from "../../../common/interfaces";

const Scenes: Record<sceneTypes, () => JSX.Element> = {
  acquaintance: Acquaintance,
  meeting: Meeting,
  cards: Acquaintance,
  roulette: Acquaintance,
  voting: Acquaintance,
};

export const useScene = () => {
  const step = useSelector(selectStep);

  return Scenes[step.scene];
};
