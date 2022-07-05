/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GamerTime } from "./GamerTime";

export const GamerCard = () => (
  <div
    css={css`
      display: flex;
      position: relative;
      margin-top: 15px;
      border: 1px solid;
      padding: 50px 15px;
    `}
  >
    <GamerTime
      cooldown={2}
      css={css`
        position: absolute;
        right: 20px;
        top: 20px;
      `}
    />

    <img
      css={css`
        max-width: 500px;
        width: 100%;
        margin: auto;
      `}
      src="./img/gamer.jpg"
      alt="img"
    />
  </div>
);
