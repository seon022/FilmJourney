import { Container } from "@mui/system";

import useUserStore from "../store/userStore";

function MyPage() {
	const { user } = useUserStore();
	return (
		<>
			<Container>
				<h1>My Page</h1>
				{user && <h2>Welcome {user.displayName.split(" ")[0]}!</h2>}
				<p>Welcome to your profile!</p>
			</Container>
		</>
	);
}

export default MyPage;
