import React from "react";
import { Button, Grid2, Typography, Box, Divider } from "@mui/material";

import MovieCard from "../components/MovieCard";

function StyleGuidePage() {
	return (
		<div style={{ padding: "20px" }}>
			<h1>Style Guide</h1>
			<section>
				<h2>Color Palette</h2>
				<Grid2 container spacing={2}>
					<Grid2 item>
						<Box
							sx={{
								width: 100,
								height: 100,
								backgroundColor: "primary.main", // Primary color
								borderRadius: 2,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Typography variant="h6" color="white">
								Primary
							</Typography>
						</Box>
					</Grid2>
					<Grid2 item>
						<Box
							sx={{
								width: 200,
								height: 100,
								backgroundColor: "primary.light", // 자동계산된 light컬러러
								borderRadius: 2,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Typography variant="h6" color="white">
								primary.light
							</Typography>
						</Box>
					</Grid2>
					<Grid2 item>
						<Box
							sx={{
								width: 100,
								height: 100,
								backgroundColor: "background", // Background color
								borderRadius: 2,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Typography variant="h6" color="black">
								Background
							</Typography>
						</Box>
					</Grid2>
					<Grid2 item>
						<Box
							sx={{
								width: 100,
								height: 100,
								backgroundColor: "secondary.main",
								borderRadius: 2,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Typography variant="h6" color="white">
								secondary
							</Typography>
						</Box>
					</Grid2>
				</Grid2>
			</section>

			<Divider sx={{ my: 3 }} />

			<section>
				<h2>Buttons</h2>
				<Button
					variant="contained"
					color="primary"
					sx={{ marginRight: 2 }}
				>
					Primary Button
				</Button>
				<Button
					variant="outlined"
					color="primary"
					sx={{ marginRight: 2 }}
				>
					outlined Button
				</Button>
				<Button variant="text" color="primary">
					Text Button
				</Button>
			</section>
			<Divider sx={{ my: 2 }} />
			<section>
				<Button
					variant="contained"
					color="secondary"
					sx={{ marginRight: 2 }}
				>
					secondary Button
				</Button>
				<Button
					variant="outlined"
					color="secondary"
					sx={{ marginRight: 2 }}
				>
					outlined Button
				</Button>
				<Button variant="text" color="secondary">
					Text Button
				</Button>
			</section>

			<Divider sx={{ my: 3 }} />

			<section>
				<h2>Cards</h2>
				<Grid2 container spacing={3}>
					<Grid2 item xs={12} sm={6} md={4}>
						<MovieCard />
					</Grid2>
					<Grid2 item xs={12} sm={6} md={4}>
						<MovieCard />
					</Grid2>
				</Grid2>
			</section>

			<Divider sx={{ my: 3 }} />

			<section>
				<h2>Typography</h2>
				<Typography variant="h1">Heading 1</Typography>
				<Typography variant="h2">Heading 2</Typography>
				<Typography variant="h3">Heading 3</Typography>
				<Typography variant="body1">
					Body text example. This is where you can write longer
					descriptions.
				</Typography>
				<Typography variant="body2">
					Body text example. This is smaller than body1.
				</Typography>
			</section>

			<Divider sx={{ my: 3 }} />
		</div>
	);
}

export default StyleGuidePage;
