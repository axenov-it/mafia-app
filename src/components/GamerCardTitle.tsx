/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

interface Props {
  title: string;
  isActive: boolean;
  onClick: (e: any) => void;
}

export const GamerCardTitle = ({ title, isActive, onClick }: Props) => (
  <Typography
    css={css`
      background: #ddd;
      cursor: pointer;
      width: 100%;
      padding: 5px 10px;
      position: relative;
      z-index: 20;
      ${isActive &&
      css`
        box-shadow: 0 0 4px 4px #1976d263;
        border: 2px solid #1976d2;
      `}
    `}
    onClick={onClick}
    variant="h6"
  >
    {title}
  </Typography>
);
