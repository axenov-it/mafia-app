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
        font-size: 24px;
        border-radius: 5px;
        font-family: Cuprum;
        letter-spacing: 0.1em;
        line-height: 28px;
        margin: 70px auto;
        padding: 15px 19px;
        width: 200px;
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
