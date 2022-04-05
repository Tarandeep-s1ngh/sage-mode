import { Link } from "react-router-dom";
import { sageLogo } from "../../assets";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="h3 nav-txt">
        <Link to="/" className="flex-row align-items-center gap0p5">
          <img src={sageLogo} className="img-responsive" />{" "}
          <span>Sage Mode</span>
        </Link>
      </div>
      <div className="search-bar flex-row justify-sb align-items-center">
        <input type="text" className="search-input" />
        <i className="fas fa-search"></i>
      </div>
      <Link to="/product-detail" className="icon-in-nav tooltip">
        <i className="fas fa-compass"></i>
        <span className="tooltiptext">Explore</span>
      </Link>
      <Link to="/cart" className="icon-in-nav tooltip">
        <i className="material-icons">playlist_play</i>
        <span className="tooltiptext">Playlist</span>
      </Link>
      <Link to="/wishlist" className="icon-in-nav tooltip">
        <i className="fas fa-heart"></i>

        <span className="tooltiptext">Liked</span>
      </Link>
      <Link to="/login" className="icon-in-nav tooltip">
        <i className="fas fa-user-circle"></i>

        <span className="tooltiptext">Login</span>
      </Link>
      <Link to="/" className="icon-in-nav nav-hamburger">
        <i className="fas fa-bars"></i>
      </Link>
    </nav>
  );
};
