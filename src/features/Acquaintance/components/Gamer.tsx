/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GamerInterface } from "../interfaces";

interface Props {
  item: GamerInterface;
}

export const Gamer = ({ item }: Props) => (
  <div>
    <div
      css={css`
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: 1px solid;
        margin: auto;
        box-shadow: 8px 9px 27px rgba(0, 0, 0, 1);
      `}
    >
      {item.id}
    </div>
  </div>
);
