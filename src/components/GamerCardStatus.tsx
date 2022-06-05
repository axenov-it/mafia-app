/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  isBlocked: boolean;
  isKilled: boolean;
}

export const GamerCardStatus = ({ isKilled, isBlocked }: Props) => {
  const isRender = isKilled || isBlocked;

  return isRender ? (
    <div
      css={css`
        position: absolute;
        background: #00000059;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        text-transform: uppercase;
      `}
    >
      <i
        css={css`
          background: black;
          width: 100%;
          text-align: center;
          display: block;
          padding: 5px;
        `}
      >
        {isBlocked && "Заблокованний"}
        {isKilled && "Вбитий"}
      </i>
    </div>
  ) : (
    <></>
  );
};
