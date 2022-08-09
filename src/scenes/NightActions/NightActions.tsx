import { NigthGamer } from "common/components";
import { useNightActions } from "./hooks";

export const NightActions = () => {
  const { activeGamer, gamerNumbers } = useNightActions();

  return <NigthGamer gamer={activeGamer} gamerNumbers={gamerNumbers} />;
};
