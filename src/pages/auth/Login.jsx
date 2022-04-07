import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context";

export const Login = () => {
  const [userDetails, setUserDetails] = useState({ email: "", passowrd: "" });
  const { login } = useAuth();

  return (
    <main className="main-wrapper">
      <div className="auth-wrapper">
        <h2 className="h2 text-center">Login</h2>

        <div className="divider divider-a"></div>

        <section className="quiz-content">
          <form action="" className="input-validation">
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

            <span className="input-span">
              <Link to="/forgot" className="input-validation-link">
                Forgot password?
              </Link>
              <div>
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
            </span>
          </form>

          <button
            onClick={() => login(userDetails.email, userDetails.passowrd)}
            className="btn-primary next-quest btn-login"
          >
            Login ▶
          </button>
          <button
            onClick={() => login("test1608@gmail.com", "test@1608")}
            className="btn-primary next-quest btn-login"
          >
            Guest Login ▶
          </button>

          <div className="text-center mt-1">
            Not a user yet? &nbsp;
            <Link to="/signup" className="input-validation-link">
              Create an account
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
