/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import{Acquaintance} from "../interfaces"

interface Props {
  item:Acquaintance;
 }

export const Player = ({ item }:Props) => {
  return (
    <div>
      <div
        css={css`
          max-width: 200px;
          height: 200px;
          border: 1px solid;
          margin: auto;
          background: url(img/games.jpg) no-repeat;
          background-size: cover;
          position: relative;
          box-shadow: 8px 9px 27px rgba(0, 0, 0, 1);
        `}
      >
        <div
          css={css`
            width: 25px;
            height: 25px;
            background: #f7e6ca;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            font-size: 20px;
            font-weight: 700;
            position: absolute;
            top: -6px;
            left: -6px;
          `}
        >
          {item.id}
        </div>
      </div>
    </div>
  );
};
