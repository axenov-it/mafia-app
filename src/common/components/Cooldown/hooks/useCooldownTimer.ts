import { useState } from "react";

export const useCooldownTimer = (time: number = 1) => {
  const [timer, setTimer] = useState({ cooldownTime: time });

  const onResetTimer = () => {
    setTimer({ cooldownTime: time });
  };

  return {
    timer,
    setTimer,
    onResetTimer,
  };
};
