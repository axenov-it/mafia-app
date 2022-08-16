import { GamerInterface } from "common/interfaces";
import { GamerCard, GamerBottom } from "./components";
import { useGamer, useIsBlocked } from "./hooks";
import { RunNextGamerInterface } from "./interface";

interface Props {
  gamer: GamerInterface;
  gamerNumbers: number[];
  onFinishAbility: RunNextGamerInterface;
}

export const Gamer = (props: Props) => {
  const {
    gamer: { role, id },
    onFinishAbility,
  } = props;

  const { checkIsBlocked } = useIsBlocked(props.gamer, onFinishAbility);
  const GamerComponent = useGamer(role);

  return (
    <GamerCard>
      <h2>Гравець-{id}</h2>
      <h2>{role.name}</h2>

      <GamerBottom>
        <GamerComponent {...props} checkIsBlocked={checkIsBlocked} />
      </GamerBottom>
    </GamerCard>
  );
};
