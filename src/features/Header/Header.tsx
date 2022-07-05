/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Header = () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      padding: 15px 0;
      background: black;
    `}
  >
    <img
      css={css`
        max-width: 300px;
      `}
      src="img/logo2.png"
      alt=""
    />
  </div>
);
