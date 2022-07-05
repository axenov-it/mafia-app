/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Cooldown } from "common/components";

export const GamerCard = () => (
  <div
    css={css`
      display: flex;
      position: relative;
      margin-top: 15px;
    `}
  >
    <Cooldown
      cooldownTime={1}
      css={css`
        position: absolute;
        right: 40px;
        top: 80px;
      `}
    />

    <h2
      css={css`
        position: absolute;
        right: 40px;
        top: 20px;
        margin: 0;
        border-bottom: 1px solid;
        font-size: 32px;
      `}
    >
      Гравець 1
    </h2>

    <img
      css={css`
        max-width: 500px;
        width: 100%;
        margin-left: 30px;

        @media (max-width: 680px) {
          max-width: 200px;
          margin-top: 25px;
          margin-left: 15px;
        }
      `}
      src="./img/gamer.jpg"
      alt="img"
    />
  </div>
);
