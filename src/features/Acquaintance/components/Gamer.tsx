/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GamerInterface } from "../interfaces";

interface Props {
  gamer: GamerInterface;
}

export const Gamer = ({ gamer }: Props) => (
  <div
    css={css`
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: 1px solid;
      margin: auto;
      box-shadow: 8px 9px 27px rgba(0, 0, 0, 1);
      font-family: "Raleway", sans-serif;
      cursor: pointer;
      :hover {
        background-color: #444444;
      }
    `}
  >
    <p
      css={css`
        font-weight: 500;
        font-size: 20px;
      `}
    >
      {gamer.id}
    </p>
  </div>
);
