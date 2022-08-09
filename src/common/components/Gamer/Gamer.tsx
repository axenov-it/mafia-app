import { GamerInterface } from "common/interfaces";
import { GamerCard, GamerBottom } from "./components";
import { useGamer } from "./hooks";
import { RunNextGamerInterface } from "./interface";

interface Props {
  gamer: GamerInterface;
  gamerNumbers: number[];
  onFinishAbility: RunNextGamerInterface;
}

export const Gamer = (props: Props) => {
  const {
    gamer: { role },
  } = props;

  const GamerComponent = useGamer(role);

  return (
    <GamerCard>
      <h2>{role.name}</h2>

      <GamerBottom>
        <GamerComponent {...props} />
      </GamerBottom>
    </GamerCard>
  );
};
