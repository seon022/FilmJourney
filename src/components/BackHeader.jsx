import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/material";

const BackHeader = () => {
	const iconSize = 24;
	return (
		<Box
			component="header"
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				position: "relative",
				padding: "0",
				height: "40px",
			}}
		>
			<Box>
				<ArrowBackIcon sx={{ fontSize: iconSize }} />
			</Box>

			<Box
				sx={{
					position: "absolute",
					left: "50%",
					transform: "translateX(-50%)",
				}}
			>
				Film Journey
			</Box>

			<Box sx={{ width: `${iconSize}px` }} />
		</Box>
	);
};

export default BackHeader;
