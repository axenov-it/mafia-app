import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "rgba(240, 205, 135, 1)",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#0c0d12",
      // light: will be calculated from palette.primary.main,
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: "#1D1E26",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#ABB0C5",
      // light: will be calculated from palette.primary.main,
    },
  },
});

export default theme;
