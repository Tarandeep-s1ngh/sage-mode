import { Link } from "react-router-dom";
import { Sidebar } from "../components";

export const Liked = () => {
  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <h4 className="content-title semibold">Liked Videos</h4>

        <div className="flex-col empty-playlist">
          <div>Looks like you haven't liked anything yet.</div>
          <Link to="/" className="btn-primary vid-btn">
            Explore Now
          </Link>
        </div>
      </main>
    </div>
  );
};
