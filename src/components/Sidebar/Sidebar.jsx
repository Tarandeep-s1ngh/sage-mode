import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="sidebar semibold">
      <ul className="side-heading">
        {}
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/explore"
        >
          <li>
            <i className="fas fa-compass"></i>
            <span> Explore</span>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/playlist"
        >
          <li className="odd-icon">
            <i className="material-icons">playlist_play</i>
            <span> Playlist</span>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/liked"
        >
          {" "}
          <li>
            <i className="fas fa-heart"></i>
            <span> Liked</span>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/watchlater"
        >
          {" "}
          <li>
            <i className="fas fa-bookmark"></i>
            <span> Watchlater</span>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : null)}
          to="/history"
        >
          {" "}
          <li>
            <i className="fas fa-history"></i>
            <span> History</span>
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};
