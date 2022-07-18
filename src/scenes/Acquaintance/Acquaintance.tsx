/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Title, Cooldown, useCooldownTimer } from "common/components";
import { GamerCard, Navigation, Start } from "./components";
import { useAcquaintance, useStart, useFinish } from "./hooks";

export const Acquaintance = () => {
  const { timer, onResetTimer } = useCooldownTimer();
  const { isStart, runStart } = useStart();
  const { isFinish, runFinish } = useFinish();

  const { activeGamer, onNextGamer, onFinishTimer } = useAcquaintance(
    onResetTimer,
    runFinish
  );

  return (
    <div>
      <Title>Знайомство</Title>
      <Navigation
        isStart={isStart}
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
        <Start isStart={isStart} onStartGame={runStart} />

        {isStart && <GamerCard gamer={activeGamer} />}
        {isStart && <Cooldown timer={timer} onFinishTimer={onFinishTimer} />}
      </div>
    </div>
  );
};
