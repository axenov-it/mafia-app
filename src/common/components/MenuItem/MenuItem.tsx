/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MenuItemMUI from "@mui/material/MenuItem";
import { MenuItemProps } from "@mui/material";

export const MenuItem = ({ children, ...props }: MenuItemProps) => (
  <MenuItemMUI
    {...props}
    css={css`
      display: flex;
      justify-content: center;
      padding: 15px 15px;
      font-family: "Cuprum";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      letter-spacing: 0.05em;
      color: #abb0c5;
      text-transform: uppercase;
    `}
  >
    {children}
  </MenuItemMUI>
);
