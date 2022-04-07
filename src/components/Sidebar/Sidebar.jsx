import { NavLink } from "react-router-dom";
import { useAuth } from "../../context";

export const Sidebar = () => {
  const { isLogedIn } = useAuth();

  return (
    <aside className="sidebar semibold">
      <ul className="side-heading">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/explore"
        >
          <li>
            <i className="fas fa-compass"></i>
            <span className="side-title"> Explore</span>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to={isLogedIn() ? "/playlist" : "/login"}
        >
          <li className="odd-icon">
            <i className="material-icons">playlist_play</i>
            <span className="side-title"> Playlist</span>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to={isLogedIn() ? "/liked" : "/login"}
        >
          <li>
            <i className="fas fa-heart"></i>
            <span className="side-title"> Liked</span>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to={isLogedIn() ? "/watchlater" : "/login"}
        >
          <li>
            <i className="fas fa-bookmark"></i>
            <span className="side-title"> Watchlater</span>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to={isLogedIn() ? "/history" : "/login"}
        >
          <li>
            <i className="fas fa-history"></i>
            <span className="side-title"> History</span>
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};
