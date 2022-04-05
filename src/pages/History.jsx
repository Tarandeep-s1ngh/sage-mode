import { Link } from "react-router-dom";
import { Sidebar } from "../components";

export const History = () => {
  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <h4 className="content-title semibold">Watch History</h4>

        <div className="flex-col empty-playlist">
          <div>Looks like you haven't watched anything yet.</div>
          <Link to="/" className="btn-primary vid-btn">
            Explore Now
          </Link>
        </div>
      </main>
    </div>
  );
};
