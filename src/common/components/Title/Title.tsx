/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Title = ({ children }: Props) => (
  <h2
    css={css`
      text-align: center;
      border-bottom: 1px solid;
      padding: 15px 0;
      margin: 0;
    `}
  >
    {children}
  </h2>
);
