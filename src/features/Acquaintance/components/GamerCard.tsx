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
      cooldown={1}
      css={css`
        position: absolute;
        right: 20px;
        top: 20px;
      `}
    />

    <h2
      css={css`
        position: absolute;
        left: 50px;
        top: 20px;
        margin: 0;
        border-bottom: 1px solid;
      `}
    >
      Гравець 1
    </h2>

    <img
      css={css`
        max-width: 500px;
        width: 100%;
        margin: auto;

        @media (max-width: 545px) {
          max-width: 180px;
          margin: 0;
        }
      `}
      src="./img/gamer.jpg"
      alt="img"
    />
  </div>
);
