/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GamerCard = ({ children }: Props) => (
  <div
    css={css`
      color: #fff;
      max-width: 375px;
      text-align: center;
      margin: 0 auto;
      min-height: 600px;
      position: relative;
      display: flex;
      justify-content: center;
    `}
  >
    {children}
  </div>
);
