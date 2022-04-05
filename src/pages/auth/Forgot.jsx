import { Link } from "react-router-dom";

export const Forgot = () => {
  return (
    <main className="main-wrapper">
      <div className="auth-wrapper">
        <h2 className="h2 text-center">Forgot your password?</h2>

        <div className="divider divider-a" />

        <section className="quiz-content">
          <form action="" className="input-validation" novalidate>
            <label htmlFor="email-input"></label>
            <input
              type="email"
              placeholder="Please enter the same email you used for login"
              required
            />

            <span>
              <Link to="/login" className="input-validation-link">
                Back to login
              </Link>
            </span>
          </form>

          <Link to="/" className="btn-primary next-quest btn-login">
            Reset Password ▶
          </Link>
          <Link to="/" className="btn-primary next-quest btn-home">
            Home 🏠
          </Link>
        </section>
      </div>
    </main>
  );
};
