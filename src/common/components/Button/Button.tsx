/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonProps } from "@mui/material";
import ButtonMUI from "@mui/material/Button";
import { usePaletteColor } from "common/hooks";

export const Button = ({ children, ...props }: ButtonProps) => {
  const { themeColor } = usePaletteColor("primary");

  return (
    <ButtonMUI
      {...props}
      css={css`
        border-radius: 5px;
        letter-spacing: 0.1em;
        padding: 6px 20px 5px 20px;
        color: ${themeColor.contrastText};
        background: ${themeColor.main};
        transition: 0.5s;
        &:hover {
          background: ${themeColor.main};
          opacity: 0.8;
        }
      `}
    >
      {children}
    </ButtonMUI>
  );
};
