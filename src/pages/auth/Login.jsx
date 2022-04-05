import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <main className="main-wrapper">
      <div className="auth-wrapper">
        <h2 className="h2 text-center">Login</h2>

        <div className="divider divider-a"></div>

        <section className="quiz-content">
          <form action="" className="input-validation">
            <label htmlFor="email-input"></label>
            <input type="email" placeholder="Enter Email" required />

            <label htmlFor="password"></label>
            <input type="password" placeholder="Enter Password" required />

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

          <Link to="/profile" className="btn-primary next-quest btn-login">
            Login ▶
          </Link>
          <Link to="/" className="btn-primary next-quest btn-home">
            Home 🏠
          </Link>

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
