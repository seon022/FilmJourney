import useUserStore from "../store/userStore"; // Zustand 스토어 가져오기

function MyPage() {
  const { user } = useUserStore(); // Zustand에서 user 정보 가져오기
  return (
    <div>
      <h1>My Page</h1>
      {user && <h2>Welcome {user.displayName.split(" ")[0]}!</h2>}
      <p>Welcome to your profile!</p>
    </div>
  );
}

export default MyPage;
