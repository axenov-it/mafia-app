import { GamerInterface } from "common/interfaces";
import { GamerCard, GamerBottom } from "./components";
import { useGamer } from "./hooks";
import { RunNextGamerInterface } from "./interface";

interface Props {
  gamer: GamerInterface;
  gamerNumbers: number[];
  onFinishAbility: RunNextGamerInterface;
}

export const Gamer = ({ gamer, gamerNumbers, onFinishAbility }: Props) => {
  const GamerComponent = useGamer(gamer.role);

  return (
    <GamerCard>
      <h2>{gamer.role.name}</h2>

      <GamerBottom>
        <GamerComponent
          gamer={gamer}
          gamerNumbers={gamerNumbers}
          onFinishAbility={onFinishAbility}
        />
      </GamerBottom>
    </GamerCard>
  );
};
