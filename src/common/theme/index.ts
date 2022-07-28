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
  },
});

export default theme;
