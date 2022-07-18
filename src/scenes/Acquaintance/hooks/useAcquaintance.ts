import { useSettingsCountGamers } from "common/hooks";
import { useRef, useState } from "react";

export const useAcquaintance = (
  onResetTimer: () => void,
  runStart: () => void
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
  };

  const onStart = () => {
    isGamerStarted.current = true;
    runStart();
  };

  const onFinishTimer = () => {
    isGamerStarted.current = false;
  };

  return {
    countGamers,
    activeGamer,
    onNextGamer,
    onFinishTimer,
    onStart,
  };
};
