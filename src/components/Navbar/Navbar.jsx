import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { sageLogo } from "../../assets";
import { useAuth, useFilter, useTheme } from "../../context";
import "./navbar.css";

export const Navbar = () => {
  const { isLogedIn, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isHome = () => (pathname === "/" ? true : false);

  const { dispatch } = useFilter();

  const { themeState, setThemeState } = useTheme();

  const [searchInput, setsearchInput] = useState("");

  const searchHandler = (e) => {
    if (e.key === "Enter" || e.keyCode === 8 || e.target.value === "") {
      dispatch({
        type: "SEARCH_VIDEO",
        payload: { searchBy: e.target.value },
      });
      if (pathname !== "/explore") {
        navigate("/explore");
      }
    }
  };

  const searchClickHandler = () => {
    dispatch({
      type: "SEARCH_VIDEO",
      payload: { searchBy: searchInput },
    });
    if (pathname !== "/explore") {
      navigate("/explore");
    }
  };

  return (
    <nav className={isHome() ? "nav-bar" : "nav-bar nav-fixed"}>
      <div className="h3 nav-txt">
        <Link to="/" className="flex-row align-items-center gap0p5">
          <img src={sageLogo} className="img-responsive" alt="Main Logo" />{" "}
          <span className="logo-title">Sage Mode</span>
        </Link>
      </div>
      <div className="search-bar flex-row justify-sb align-items-center">
        <input
          type="text"
          name="search"
          value={searchInput}
          placeholder="Search"
          className="search-input"
          autoComplete="off"
          onKeyDown={(e) => searchHandler(e)}
          onChange={(e) => setsearchInput(e.target.value)}
        />
        <i onClick={() => searchClickHandler()} className="fas fa-search"></i>
      </div>

      {pathname !== "/explore" ? (
        <Link to="/explore" className="icon-in-nav tooltip">
          <i className="fas fa-compass"></i>
          <span className="tooltiptext">Explore</span>
        </Link>
      ) : null}

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
            <i className="fas fa-sign-out-alt"></i>

            <span className="tooltiptext">Logout</span>
          </button>

          <button
            onClick={() => logout()}
            className="icon-in-nav nav-hamburger tooltip"
          >
            <i className="fas fa-sign-out-alt"></i>

            <span className="tooltiptext">Logout</span>
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="icon-in-nav tooltip">
            <i className="fas fa-user-circle"></i>

            <span className="tooltiptext">Login</span>
          </Link>
          <Link to="/login" className="icon-in-nav nav-hamburger">
            <i className="fas fa-user-circle"></i>
          </Link>
        </>
      )}

      <button
        onClick={() => {
          setThemeState((prev) => ({
            ...prev,
            darkTheme: !themeState.darkTheme,
          }));
          localStorage.setItem(
            "VIDTHEME",
            JSON.stringify({
              darkTheme: !themeState.darkTheme,
            })
          );
        }}
        className="icon-in-nav tooltip"
      >
        {themeState.darkTheme ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-solid fa-sun"></i>
        )}
        <span className="tooltiptext">Theme</span>
      </button>
    </nav>
  );
};
