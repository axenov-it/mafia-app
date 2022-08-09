import { GamerInterface } from "common/interfaces";

import { useSheriff } from "./hooks";
import { RunNextGamerInterface } from "./interfaces";

interface Props {
  gamer: GamerInterface;
  gamerNumbers: number[];
  onFinishAbility: RunNextGamerInterface;
}

export const Sheriff = ({ gamer, gamerNumbers, onFinishAbility }: Props) => {
  useSheriff();
  return <h3>{gamer.role.name}</h3>;
};
