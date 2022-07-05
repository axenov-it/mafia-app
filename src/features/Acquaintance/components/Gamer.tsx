/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GamerInterface } from "../interfaces";

interface Props {
  gamer: GamerInterface;
}

export const Gamer = ({ gamer }: Props) => (
  <div
    css={css`
      width: 60px;
      height: 60px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: 1px solid;
      font-family: "Raleway", sans-serif;
      cursor: pointer;
      :hover {
        background-color: #444444;
        color: white;
      }
    `}
  >
    <p
      css={css`
        font-weight: 500;
        font-size: 40px;
      `}
    >
      {gamer.id}
    </p>
  </div>
);
