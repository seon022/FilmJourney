import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const BackHeader = ({ text }) => {
	const navigate = useNavigate();

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					onClick={() => navigate(-1)}
					sx={{ mr: 2 }}
				>
					<ArrowBackIcon />
				</IconButton>

				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, textAlign: "center" }}
				>
					{text}
				</Typography>

				{/* Placeholder to balance layout */}
				<IconButton edge="end" sx={{ visibility: "hidden" }}>
					<ArrowBackIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default BackHeader;
