import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: theme.spacing(2),
	width: "300px",
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	width: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 2),
		width: "100%",
	},
}));

export default function ButtonAppBar({ showSearch = false }) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					<Box
						component="img"
						src="/FilmJourney_white.svg"
						alt="logo"
						sx={{ height: 56 }}
						onClick={() => (window.location.href = "/")}
					/>

					<Box sx={{ display: "flex", alignItems: "center" }}>
						{showSearch && (
							<Search>
								<SearchInput
									placeholder="Search..."
									inputProps={{ "aria-label": "search" }}
								/>
							</Search>
						)}

						{/* <Button color="secondary" sx={{ marginLeft: 2 }}>
							Login
						</Button> */}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
