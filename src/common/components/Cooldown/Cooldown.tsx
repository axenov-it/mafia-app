/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCooldown } from "./hooks";

interface Props {
  timer: { cooldownTime: number };
  format?: "m" | "s";
  className?: any;
  onFinishTimer: () => void;
}

export const Cooldown = ({
  className,
  format,
  timer,
  onFinishTimer,
}: Props) => {
  const timeTikerRef = useCooldown(timer, format, onFinishTimer);

  return (
    <div
      className={className}
      css={css`
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        font-weight: bold;
        background: url(img/oclock4.png);
        background-size: cover;
        span {
          text-align: center;
          background: white;
        }
      `}
    >
      <span ref={timeTikerRef} />
    </div>
  );
};
