/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  isBlocked: boolean;
  isKilled: boolean;
  onDbClick: () => void;
}

export const GamerCardStatus = ({ isKilled, isBlocked, onDbClick }: Props) => {
  const isRender = isKilled || isBlocked;

  return isRender ? (
    <div
      onDoubleClick={onDbClick}
      css={css`
        position: absolute;
        background: #00000059;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
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
