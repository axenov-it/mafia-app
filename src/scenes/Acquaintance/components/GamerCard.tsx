/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  gamer: number;
}

export const GamerCard = ({ gamer }: Props) => (
  <div
    css={css`
      display: flex;
      position: relative;
      margin-top: 15px;
      flex-direction: column;
      max-width: 350px;
    `}
  >
    <img
      css={css`
        max-width: 500px;
        width: 100%;

        @media (max-width: 680px) {
          max-width: 200px;
          margin-top: 25px;
        }
      `}
      src="./img/gamer.jpg"
      alt="img"
    />
    <h2
      css={css`
        font-size: 32px;
        background: #000;
        color: white;
        text-align: center;
        margin: 5px 0;
        padding: 15px 0;
      `}
    >
      Гравець {gamer}
    </h2>
  </div>
);
