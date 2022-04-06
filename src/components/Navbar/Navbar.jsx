import { Link } from "react-router-dom";
import { sageLogo } from "../../assets";
import { useAuth } from "../../context";
import "./navbar.css";

export const Navbar = () => {
  const { isLogedIn, logout } = useAuth();

  return (
    <nav className="nav-bar">
      <div className="h3 nav-txt">
        <Link to="/" className="flex-row align-items-center gap0p5">
          <img src={sageLogo} className="img-responsive" alt="Main Logo" />{" "}
          <span>Sage Mode</span>
        </Link>
      </div>
      <div className="search-bar flex-row justify-sb align-items-center">
        <input type="text" className="search-input" />
        <i className="fas fa-search"></i>
      </div>
      <Link to="/explore" className="icon-in-nav tooltip">
        <i className="fas fa-compass"></i>
        <span className="tooltiptext">Explore</span>
      </Link>

      {isLogedIn() ? (
        <>
          <Link to="/playlist" className="icon-in-nav tooltip">
            <i className="material-icons">playlist_play</i>
            <span className="tooltiptext">Playlist</span>
          </Link>
          <Link to="/liked" className="icon-in-nav tooltip">
            <i className="fas fa-heart"></i>

            <span className="tooltiptext">Liked</span>
          </Link>
          <button onClick={() => logout()} className="icon-in-nav tooltip">
            <i class="fas fa-sign-out-alt"></i>

            <span className="tooltiptext">Logout</span>
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="icon-in-nav tooltip">
            <i className="fas fa-user-circle"></i>

            <span className="tooltiptext">Login</span>
          </Link>
        </>
      )}

      <Link to="/" className="icon-in-nav nav-hamburger">
        <i className="fas fa-bars"></i>
      </Link>
    </nav>
  );
};
