import { Link } from "react-router-dom";
import { LikedCard, Sidebar } from "../components";
import { useFilter } from "../context";

export const Liked = () => {
  const { state } = useFilter();

  const inLiked = state.liked.length > 0;

  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <h4 className="content-title semibold">Liked Videos</h4>

        {inLiked ? (
          <div className="video-listing">
            {state.liked.map((video) => (
              <LikedCard key={video._id} video={video} />
            ))}
          </div>
        ) : (
          <div className="flex-col empty-playlist">
            <div>Looks like you haven't liked anything yet.</div>
            <Link to="/explore" className="btn-primary vid-btn">
              Explore Now
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};
