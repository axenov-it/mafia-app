/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { usePaletteColor } from "common/hooks";
import { colorTypes } from "common/interfaces";

type VariantTypes = "outlined" | "contained" | "text";

interface VariantType {
  color: colorTypes;
  background?: colorTypes;
}

const variants: Record<VariantTypes, VariantType> = {
  contained: {
    color: "primary",
    background: "primary",
  },
  text: {
    color: "secondary",
    background: "secondary",
  },
  outlined: {
    color: "primary",
  },
};

export const useStyles = (variant: VariantTypes | undefined) => {
  const variantType = variants[variant || "contained"];

  const background = usePaletteColor(variantType.background || "primary");
  const text = usePaletteColor(variantType.color || "primary");

  return css`
    border-radius: 5px;
    letter-spacing: 0.1em;
    padding: 6px 20px 5px 20px;
    transition: 0.5s;
    background: ${variantType.background ? background.themeColor.main : ""};
    color: ${variantType.color ? text.themeColor.contrastText : ""};
    &:hover {
      background: ${variantType.background ? background.themeColor.main : ""};
      opacity: 0.8;
    }
  `;
};
