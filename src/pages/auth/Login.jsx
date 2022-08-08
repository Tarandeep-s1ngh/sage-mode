import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context";
import { triggerToast } from "../../utils";

export const Login = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
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

            <span className="input-span">
              {/* <Link to="/forgot" className="input-validation-link">
                Forgot password?
              </Link> */}
              <div>
                <label>
                  <input
                    type="checkbox"
                    value={remember}
                    onChange={() => setRemember((prev) => !prev)}
                  />{" "}
                  Remember me
                </label>
              </div>
            </span>

            <button
              onClick={(e) => {
                e.preventDefault();
                if (!!userDetails.email && !!userDetails.password)
                  login(userDetails.email, userDetails.password, remember);
                else triggerToast("error", "Please fill all the fields");
              }}
              className="btn-primary next-quest btn-login"
            >
              Login <i className="fa-solid fa-right-to-bracket"></i>
            </button>
          </form>

          <button
            onClick={() => login("test1608@gmail.com", "test@1608")}
            className="btn-primary next-quest btn-login mt-0p5"
          >
            Guest Login <i className="fa-solid fa-right-to-bracket"></i>
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
