/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GamerInterface } from "../interfaces";

interface Props {
  item: GamerInterface;
}

export const Gamer = ({ item }: Props) => (
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
      {item.id}
    </p>
  </div>
);
