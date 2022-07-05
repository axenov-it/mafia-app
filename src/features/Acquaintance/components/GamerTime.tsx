/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTimeSecond } from "../hooks/useTimeSecond";

interface Props {
  cooldown: number;
  format?: "m" | "s";
  className?: any;
}

export const GamerTime = ({ className, cooldown, format }: Props) => {
  const timeTikerRef = useTimeSecond(cooldown, format);

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
