import React, { useState } from "react";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import RateReviewIcon from "@mui/icons-material/RateReview";
import SearchIcon from "@mui/icons-material/Search";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const SMALL_SIZE = 20;
const LARGE_SIZE = 28;

const navItems = [
	{ label: "Movie", icon: <MovieIcon />, path: "/" },
	{ label: "Search", icon: <SearchIcon />, path: "/search" },
	{ label: "Favorite", icon: <FavoriteIcon />, path: "/favorites" },
	{ label: "Review", icon: <RateReviewIcon />, path: "/review" },
	{ label: "My Page", icon: <AccountBoxIcon />, path: "/mypage" },
];

const Navigation = () => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();

	const handleNavigation = (newValue) => {
		setValue(newValue);
		navigate(navItems[newValue].path);
	};

	return (
		<Paper
			sx={{
				position: "fixed",
				bottom: 0,
				left: "50%",
				transform: "translateX(-50%)",
				width: "100%",
				maxWidth: "760px",
				zIndex: 1000,
			}}
		>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					handleNavigation(newValue);
				}}
				sx={{
					backgroundColor: "primary.main",
					height: { xs: 60, sm: 70 },
					"& .MuiBottomNavigationAction-root": {
						minWidth: 0,
						maxWidth: "none",
					},
					"& .MuiBottomNavigationAction-label": {
						fontSize: { xs: "10px", sm: "12px", md: "13px" },
					},
					"& .Mui-selected": {
						color: "#fff",
						"& .MuiSvgIcon-root": {
							color: "#fff",
						},
					},
				}}
			>
				{navItems.map((item, index) => (
					<BottomNavigationAction
						key={index}
						label={item.label}
						icon={React.cloneElement(item.icon, {
							sx: {
								fontSize: { sm: SMALL_SIZE, xl: LARGE_SIZE },
							},
						})}
					/>
				))}
			</BottomNavigation>
		</Paper>
	);
};
export default Navigation;
