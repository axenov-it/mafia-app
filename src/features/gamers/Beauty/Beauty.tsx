import { GamerInterface } from "common/interfaces";

import { useBeauty } from "./hooks";
import { RunNextGamerInterface } from "./interfaces";

interface Props {
  gamer: GamerInterface;
  gamerNumbers: number[];
  onFinishAbility: RunNextGamerInterface;
}

export const Beauty = ({ gamer, gamerNumbers, onFinishAbility }: Props) => {
  useBeauty();
  return <h3>{gamer.role.name}</h3>;
};
