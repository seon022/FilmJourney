import { useState } from "react";
import { signInWithGooglePopup } from "../firebase";

function Auth() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response.user.displayName);
  };

  return (
    <div>
      <div className="auth-page"></div>
      <div className="auth-form">
        {response.user ? (
          <h1>Welcome {response.user.displayName}</h1>
        ) : (
          <div>
            <h1>Login</h1>
            <div>
              <button onClick={logGoogleUser}>Sign In With Google</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
