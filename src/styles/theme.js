import { createTheme } from "@mui/material/styles";
import { blue, blueGrey, brown } from "@mui/material/colors";

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
    background: {},
    text: {},
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
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: "relative",
          minWidth: "320px",
          maxWidth: "600px",
          width: "50%",
          minHeight: `calc(100vh - ${NAVIGATION_HEIGHT}px)`,
          margin: "0 auto",
          padding: "16px",
          paddingBottom: `${NAVIGATION_HEIGHT}px`,
          backgroundColor: blue[50],
          color: brown[500],
          overflow: "hidden",
          [theme.breakpoints.down("lg")]: {
            width: "100%",
          },
        }),
      },
    },
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
      },
    },
  },
});

export default theme;
