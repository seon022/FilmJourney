import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BackHeader = ({ text }) => {
	const navigate = useNavigate();
	const iconSize = 30;
	return (
		<Box
			component="header"
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				position: "relative",
				height: "50px",
				marginBottom: "20px",
			}}
		>
			<Box
				onClick={() => navigate(-1)}
				sx={{ cursor: "pointer", width: `${iconSize}px` }}
			>
				<ArrowBackIcon />
			</Box>

			<Box
				sx={{
					position: "absolute",
					left: "50%",
					transform: "translateX(-50%)",
				}}
			>
				{text}
			</Box>

			<Box sx={{ width: `${iconSize}px` }} />
		</Box>
	);
};

export default BackHeader;
