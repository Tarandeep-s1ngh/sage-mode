import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context";
import { triggerToast } from "../../utils";

export const Signup = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const { signup } = useAuth();

  return (
    <main className="main-wrapper">
      <div className="auth-wrapper">
        <h2 className="h2 text-center">Sign Up</h2>

        <div className="divider divider-a" />

        <section className="quiz-content">
          <form action="" className="input-validation">
            <label htmlFor="username"></label>
            <input
              id="username"
              type="text"
              placeholder="Enter Your Name"
              required
            />

            <label htmlFor="email-input"></label>
            <input
              id="email-input"
              onChange={(e) =>
                setUserDetails((prev) => ({ ...prev, email: e.target.value }))
              }
              value={userDetails.email || ""}
              type="email"
              placeholder="Enter Email"
              required
            />

            <label htmlFor="password"></label>
            <input
              id="password"
              onChange={(e) =>
                setUserDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              value={userDetails.password || ""}
              type="password"
              placeholder="Enter Password"
              required
            />

            <span>
              Already registered?{" "}
              <Link to="/login" className="input-validation-link">
                Login here
              </Link>
            </span>

            <button
              onClick={(e) => {
                e.preventDefault();
                if (!!userDetails.email && !!userDetails.password)
                  signup(userDetails.email, userDetails.password);
                else triggerToast("error", "Please fill all the fields");
              }}
              className="btn-primary next-quest btn-login"
            >
              Sign Up <i className="fa-solid fa-right-to-bracket"></i>
            </button>
          </form>

          <Link to="/" className="btn-primary next-quest btn-home mt-0p5">
            Home <i className="fa-solid fa-house fa-sm"></i>
          </Link>
        </section>
      </div>
    </main>
  );
};
