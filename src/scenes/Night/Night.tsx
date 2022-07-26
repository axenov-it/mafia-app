/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "common/components";

export const Night = () => (
  <div
    css={css`
      width: 350px;
      height: 600px;
      margin: auto;
      margin-top: 20px;
      background-image: url(./img/night.jpg);
      position: relative;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 20px;

        p {
          color: white;
          font-size: 80px;
          margin: 0;
          font-family: "Courier New";
        }
      `}
    >
      <p>N</p>
      <p>I</p>
      <p>G</p>
      <p>H</p>
      <p>T</p>
    </div>
    <Button
      css={css`
        width: 130px;
        position: absolute;
        bottom: 25px;
        left: 20px;
      `}
    >
      Далі
    </Button>
  </div>
);
