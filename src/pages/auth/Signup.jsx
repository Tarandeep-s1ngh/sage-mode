import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context";

export const Signup = () => {
  const [userDetails, setUserDetails] = useState({ email: "", passowrd: "" });
  const { signup } = useAuth();

  return (
    <main className="main-wrapper">
      <div className="auth-wrapper">
        <h2 className="h2 text-center">Sign Up</h2>

        <div className="divider divider-a" />

        <section className="quiz-content">
          <form action="" className="input-validation">
            <label htmlFor="username"></label>
            <input type="text" placeholder="Enter Your Name" required />

            <label htmlFor="email-input"></label>
            <input
              onChange={(e) =>
                setUserDetails((prev) => ({ ...prev, email: e.target.value }))
              }
              value={userDetails.email}
              type="email"
              placeholder="Enter Email"
              required
            />

            <label htmlFor="password"></label>
            <input
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  passowrd: e.target.value,
                }))
              }
              value={userDetails.passowrd}
              type="password"
              placeholder="Enter Password"
              required
            />

            <label htmlFor="confirm password"></label>
            <input type="password" placeholder="Re-type Password" required />

            <span>
              Already registered?{" "}
              <Link to="/login" className="input-validation-link">
                Login here
              </Link>
            </span>
          </form>

          <button
            onClick={() => signup(userDetails.email, userDetails.passowrd)}
            className="btn-primary next-quest btn-login"
          >
            Sign Up ▶
          </button>

          <Link to="/" className="btn-primary next-quest btn-home">
            Home 🏠
          </Link>
        </section>
      </div>
    </main>
  );
};
