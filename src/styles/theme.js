import { createTheme } from "@mui/material/styles";
import { blue, blueGrey, brown } from "@mui/material/colors";
import { lineHeight, margin, minWidth, width } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: { main: brown[500] },
    secondary: {
      main: blueGrey[400],
      light: "#BBA88D",
      contrastText: "#FFFFFF",
    },
    background: {
      default: blue[50],
    },
    text: {
      primary: brown[500],
    },
  },
  typography: {
    fontFamily: '"Pretendard", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": { lineHeight: 1.2 },
        "#root": {
          maxWidth: "760px",
          minWidth: "320px",
          width: "100%",
          textAlign: "left",
          overflowX: "hidden",
          margin: "2rem auto",
          padding: "0",
        },
        html: {
          fontSize: "62.5%",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
