import { Link } from "react-router-dom";
import { Sidebar } from "../components";

export const Playlist = () => {
  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <h4 className="content-title semibold">Your Playlist</h4>

        <div className="flex-col empty-playlist">
          <div>Looks like you haven't created a playlist yet.</div>
          <Link to="/" className="btn-primary vid-btn">
            Start Creating Now
          </Link>
        </div>
      </main>
    </div>
  );
};
