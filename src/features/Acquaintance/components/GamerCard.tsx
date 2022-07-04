/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GamerTime } from "./GamerTime";

export const GamerCard = () => (
  <div
    css={css`
      height: 400px;
      padding: 20px;
      border: 1px solid;
      display: flex;
      margin-top: 50px;
      position: relative;
    `}
  >
    <div>
      <p
        css={css`
          margin: 0px;
          font-size: 30px;
          font-weight: 500;
          font-family: "Raleway", sans-serif;
          padding-right: 20px;
        `}
      >
        Игрок : 1
      </p>
    </div>
    <div
      css={css`
        width: 250px;
        height: 100%;
        border: 1px solid;
        background: url(./img/images.jpeg) no-repeat;
        background-size: cover;
      `}
    ></div>
    <GamerTime />
  </div>
);
