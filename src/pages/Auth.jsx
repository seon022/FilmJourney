import { useState } from "react";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="auth-page"></div>
      <div className="auth-form">
        <h1>Login</h1>
        <form>
          <form>
            <input
              name="email"
              type="text"
              placeholder="Email"
              required
              value={email}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              value={password}
            />
            <input type="submit" value="Create Account" />
          </form>
        </form>
      </div>
    </div>
  );
}

export default Auth;
