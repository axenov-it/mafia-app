import { NigthGamer } from "common/components";
import { useGamer } from "./hooks";

export const NightActions = () => {
  const { activeGamer } = useGamer();

  return <NigthGamer gamer={activeGamer} />;
};
