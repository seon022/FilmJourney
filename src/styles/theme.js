import { createTheme } from "@mui/material/styles";
import { blue, blueGrey, brown } from "@mui/material/colors";

const theme = createTheme({
	typography: {
		fontFamily: '"Pretendard", sans-serif',
	},
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
					minWidth: "320px",
					maxWidth: "600px",
					width: "50%",
					minHeight: "100vh",
					margin: "0 auto",
					padding: "16px",
					backgroundColor: blue[50],
					color: brown[500],
					overflow: "hidden",
					[theme.breakpoints.down("lg")]: {
						width: "100%", // 화면 너비가 1280px 이하일 때 100% 적용
					},
				}),
			},
		},
	},
});

export default theme;
