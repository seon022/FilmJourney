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
