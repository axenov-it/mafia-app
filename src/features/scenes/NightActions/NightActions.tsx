import { Gamer } from "common/components";
import { useNightActions } from "./hooks";

export const NightActions = () => {
  const { activeGamer, gamerNumbers, runNextGamer } = useNightActions();

  return (
    <Gamer
      gamer={activeGamer}
      gamerNumbers={gamerNumbers}
      onFinishAbility={runNextGamer}
    />
  );
};
