import { blue, blueGrey, brown, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const NAVIGATION_HEIGHT = 70;
const theme = createTheme({
	typography: {
		fontFamily: '"Pretendard", sans-serif',
	},
	palette: {
		primary: {
			main: brown[400],
			light: brown[200],
		},
		secondary: {
			main: blueGrey[300],
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
					marginBottom: 14,
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
					minHeight: `calc(100vh - ${NAVIGATION_HEIGHT}px)`,
					paddingBottom: `calc(20px + ${NAVIGATION_HEIGHT}px)`,
					margin: "0 auto",
					boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
				},
				a: { textDecoration: "none" },
				img: { display: "block" },
				ul: { padding: 0 },
				li: { listStyle: "none" },
			},
		},
		MuiContainer: {
			styleOverrides: {
				root: {
					paddingTop: "30px",
					paddingLeft: "20px",
					paddingRight: "20px",
				},
			},
		},
	},
});

export default theme;
