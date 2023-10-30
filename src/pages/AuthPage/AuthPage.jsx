import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main>
      <div className="auth-cards">
        {showSignUp ? (
          <>
            <SignUpForm setUser={setUser} />
            <button
              className="btn waves-effect waves-light indigo lighten-2"
              onClick={() => setShowSignUp(false)}
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <LoginForm setUser={setUser} />
            <button
              className="btn waves-effect waves-light indigo lighten-2"
              onClick={() => setShowSignUp(true)}
            >

              Sign Up
            </button>
          </>
        )}
      </div>
    </main>
  );
}
