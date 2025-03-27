import { useState } from "react";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 Hook

import { signInWithGooglePopup } from "../firebase";
import useUserStore from "../store/userStore";

function Auth() {
  const { user, setUser, logout } = useUserStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logGoogleUser = async () => {
    try {
      setLoading(true);
      const response = await signInWithGooglePopup();
      setUser(response.user); // Zustand에 로그인 정보 저장
    } catch (error) {
      console.error("Google sign-in error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="auth-bg"></div>
      <div className="auth-form">
        <h1>Login</h1>
        {user ? (
          <>
            <h2>Welcome {user.displayName.split(" ")[0]}!</h2>
            {/* message appears after login */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Button variant="contained" onClick={() => navigate("/mypage")}>
                Go to mypage
              </Button>
              <Button variant="contained" onClick={logout}>
                signout
              </Button>
            </div>
          </>
        ) : (
          <Button
            variant="contained"
            onClick={logGoogleUser}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In With Google"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Auth;
