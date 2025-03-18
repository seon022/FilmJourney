import { createTheme } from "@mui/material/styles";
import { blue, blueGrey, brown } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		primary: { main: brown[500] },
		secondary: {
			main: blueGrey[400],
			light: "#BBA88D",
			contrastText: "#FFFFFF",
		},
		background: {},
		text: {},
	},
	typography: {
		fontFamily: '"Pretendard", sans-serif',
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
		MuiContainer: {
			styleOverrides: {
				root: {
					minWidth: "320px",
					maxWidth: "600px",
					width: "50%",
					margin: "0 auto",
					minHeight: "100vh",
					backgroundColor: blue[50],
					color: brown[500],
					padding: "16px",
					overflow: "hidden",
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
