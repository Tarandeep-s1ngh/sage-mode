import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <main className="main-wrapper">
      <div className="auth-wrapper">
        <h2 className="h2 text-center">User Profile</h2>

        <div className="divider divider-a divider-b-full"></div>

        <section className="quiz-content">
          <div className="profile-details">
            <div>
              <span className="semibold">Full Name: </span>
              <span> User</span>
            </div>

            <div>
              <span className="semibold">Email: </span>
              <span>ipsumlorem@email.com</span>
            </div>

            <div>
              <span className="semibold">Mobile No: </span>
              <span>+91 9128****68</span>
            </div>

            <div className="flex-row gap0p3">
              <span className="semibold">Address: </span>
              <address> Lorem ipsum, dolor sit amet consectetur elit.</address>
            </div>
          </div>

          <Link to="/" className="btn-primary next-quest btn-login">
            Log Out ◀
          </Link>
          <Link to="/" className="btn-primary next-quest btn-home">
            Deactivate My Account
          </Link>
        </section>
      </div>
    </main>
  );
};
