/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTimeSecond } from "../hooks/useTimeSecond";

export const GamerTime = () => {
  const counter = useTimeSecond();

  return (
    <div
      css={css`
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 300px;
        top: -30px;
        background-color: white;
      `}
    >
      <p
        css={css`
          font-size: 40px;
          font-weight: 700;
        `}
      >
        {counter}
      </p>
    </div>
  );
};
