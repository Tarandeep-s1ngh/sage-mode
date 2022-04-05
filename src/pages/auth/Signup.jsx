import { Link } from "react-router-dom";

export const Signup = () => {
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
            <input type="email" placeholder="Enter Email" required />

            <label htmlFor="password"></label>
            <input type="password" placeholder="Enter Password" required />

            <label htmlFor="confirm password"></label>
            <input type="password" placeholder="Re-type Password" required />

            <span>
              Already registered?{" "}
              <Link to="/login" className="input-validation-link">
                Login here
              </Link>
            </span>
          </form>

          <Link to="/" className="btn-primary next-quest btn-login">
            Sign Up ▶
          </Link>
          <Link to="/" className="btn-primary next-quest btn-home">
            Home 🏠
          </Link>
        </section>
      </div>
    </main>
  );
};
