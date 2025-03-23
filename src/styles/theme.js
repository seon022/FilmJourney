import { createTheme } from "@mui/material/styles";
import { blue, blueGrey, brown, yellow } from "@mui/material/colors";

const NAVIGATION_HEIGHT = 70;
const theme = createTheme({
  typography: {
    fontFamily: '"Pretendard", sans-serif',
  },
  palette: {
    primary: {
      main: brown[500],
      light: brown[300],
    },
    secondary: {
      main: blueGrey[400],
      light: "#BBA88D",
      contrastText: "#FFFFFF",
    },
    rating: {
      main: yellow[700],
      light: yellow[300],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
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

    MuiCssBaseline: {
      styleOverrides: {
        "*": { lineHeight: 1.2 },
        "#root": {
          backgroundColor: blue[50],
          color: brown[500],
          minWidth: "320px",
          maxWidth: "760px",
          width: "100%",
          minHeight: `calc(100svh - ${NAVIGATION_HEIGHT}px)`,
          paddingBottom: `calc(20px + ${NAVIGATION_HEIGHT}px)`,
          margin: "0 auto",
        },
        a: { textDecoration: "none" },
        img: { display: "block" },
        ul: { padding: 0 },
        li: { listStyle: "none" },
      },
    },
  },
});

export default theme;
