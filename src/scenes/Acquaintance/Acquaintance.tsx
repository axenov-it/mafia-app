/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Title, Cooldown, useCooldownTimer } from "common/components";
import { useStartScene } from "common/hooks";
import { GamerCard, Navigation } from "./components";
import { useAcquaintance } from "./hooks";

export const Acquaintance = () => {
  const { isStart, runStart } = useStartScene();
  const { timer, onResetTimer } = useCooldownTimer(1, isStart);

  const { activeGamer, onNextGamer, onFinishTimer, onStart } = useAcquaintance(
    onResetTimer,
    runStart
  );

  return (
    <div>
      <Title>Знайомство</Title>
      <Navigation
        isStart={isStart}
        onStart={onStart}
        onNextGamer={onNextGamer}
        onResetTimer={onResetTimer}
      />

      <div
        css={css`
          display: flex;
          justify-content: space-around;
          margin-top: 30px;
        `}
      >
        <GamerCard gamer={activeGamer} />
        <Cooldown timer={timer} onFinishTimer={onFinishTimer} />
      </div>
    </div>
  );
};
