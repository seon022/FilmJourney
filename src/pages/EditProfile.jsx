import { useEffect, useState } from "react";

import { Container, Box, TextField, Typography, Button } from "@mui/material";
import { updateProfile } from "firebase/auth";

import BackHeader from "../components/BackHeader";
import { auth } from "../firebase";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
	const { user } = useUserStore();
	const [username, setUsername] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (user?.displayName) {
			setUsername(user.displayName.split(" ")[0]);
		}
	}, [user]);

	const handleChange = (e) => {
		setUsername(e.target.value);
	};

	const handleUpdateUsername = async () => {
		try {
			await updateProfile(auth.currentUser, {
				displayName: username,
			});
			alert("Successfully updated your name!");
			navigate("/mypage");
		} catch (error) {
			console.error("failed to update username:", error);
			alert("failed to update username");
		}
	};

	return (
		<div>
			<BackHeader text="Edit Profile" />
			<Container
				maxWidth="sm"
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				<Typography variant="p" mb={1}>
					USERNAME
				</Typography>
				<Box
					component="form"
					sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
					noValidate
					autoComplete="off"
				>
					<TextField
						id="updateUsername"
						value={username}
						onChange={handleChange}
					/>
				</Box>
				<Box
					component="form"
					sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
					noValidate
					autoComplete="off"
				>
					<Button
						variant="contained"
						sx={{ minWidth: 150 }}
						onClick={handleUpdateUsername}
					>
						Update
					</Button>
				</Box>
			</Container>
		</div>
	);
};

export default EditProfile;
