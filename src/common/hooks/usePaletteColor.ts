import { useTheme } from "@mui/material";

type colorTypes =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "error";

export const usePaletteColor = (color: colorTypes) => {
  const { palette } = useTheme();

  return {
    modeColor: palette[color][palette.mode],
    themeColor: palette[color],
  };
};
