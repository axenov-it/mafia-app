import { useSettingsCountGamers } from "common/hooks";
import { useRef, useState } from "react";

export const useAcquaintance = (
  onResetTimer: () => void,
  runFinish: () => void
) => {
  const countGamers = useSettingsCountGamers();
  const gamerIndex = useRef(1);
  const isGamerStarted = useRef(false);

  const [activeGamer, setActiveGamer] = useState(1);

  const onNextGamer = () => {
    if (gamerIndex.current <= countGamers && !isGamerStarted.current) {
      isGamerStarted.current = true;
      gamerIndex.current++;
      setActiveGamer(gamerIndex.current);
      onResetTimer();
    }
    runFinish();
  };

  const onFinishTimer = () => {
    isGamerStarted.current = false;
  };

  return {
    countGamers,
    activeGamer,
    onNextGamer,
    onFinishTimer,
  };
};
