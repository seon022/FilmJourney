import React, { useEffect, useState } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import {
	Container,
	Box,
	Typography,
	Grid2,
	Card,
	CardContent,
	Button,
} from "@mui/material";
import { useNavigate , Navigate } from "react-router-dom";

import { getReviewsCount } from "../api/reviewService";
import useUserStore from "../store/userStore";

function MyPage() {
	const { user, logout } = useUserStore();
	const navigate = useNavigate();
	const [reviewCount, setReviewCount] = useState(0);

	useEffect(() => {
		const fetchReviewCount = async () => {
			if (user) {
				const count = await getReviewsCount();
				setReviewCount(count);
			}
		};

		fetchReviewCount();
	}, [user]);

	const handleEditProfile = () => {
		navigate("/edit-profile");
	};

	const handleNavigateReviews = () => {
		navigate("/review");
	};

	const handleNavigateFavorites = () => {
		navigate("/favorites");
	};

	if (!user) {
		return <Navigate to="/auth" replace />;
	}

	return (
		<Container
			sx={{
				minHeight: "90vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "start",
				alignItems: "center",
				py: 6,
			}}
		>
			<Box textAlign="center" mb={4}>
				<AccountCircleIcon sx={{ fontSize: 120, color: "primary.light" }} />
				<Typography variant="h4" mb={1}>
					{user.displayName.split(" ")[0]}
				</Typography>
				<Typography variant="body1" color="textSecondary">
					{user.email}
				</Typography>
			</Box>

			<Box display="flex" gap={2} mb={6}>
				<Button
					variant="contained"
					startIcon={<EditIcon />}
					onClick={handleEditProfile}
					sx={{ minWidth: 150 }}
				>
					Edit Profile
				</Button>
				<Button
					variant="outlined"
					startIcon={<LogoutIcon />}
					onClick={logout}
					sx={{ minWidth: 150 }}
				>
					Sign Out
				</Button>
			</Box>
			<Grid2 container spacing={2} sx={{ width: "100%" }}>
				<Grid2 size="grow">
					<Card
						onClick={handleNavigateReviews}
						sx={{ cursor: "pointer", textAlign: "center" }}
					>
						<CardContent>
							<Typography variant="h5">{reviewCount || 0}</Typography>
							<Typography variant="subtitle1">Reviews</Typography>
						</CardContent>
					</Card>
				</Grid2>
				<Grid2 size="grow">
					<Card
						onClick={handleNavigateFavorites}
						sx={{ cursor: "pointer", textAlign: "center" }}
					>
						<CardContent>
							<Typography variant="h5">{user.favoriteCount || 0}</Typography>
							<Typography variant="subtitle1">Favorites</Typography>
						</CardContent>
					</Card>
				</Grid2>
			</Grid2>
		</Container>
	);
}

export default MyPage;
