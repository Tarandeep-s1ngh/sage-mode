import { Link } from "react-router-dom";
import { Sidebar, CardWithDeleteBtn } from "../components";
import { useFilter } from "../context";

export const Watchlater = () => {
  const { state } = useFilter();

  const inWatchlater = state.watchlater.length > 0;

  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <h4 className="content-title semibold">Watch Later</h4>

        {inWatchlater ? (
          <div className="video-listing">
            {state.watchlater.map((video) => (
              <CardWithDeleteBtn
                key={video._id}
                video={video}
                usedIn="watchlater"
              />
            ))}
          </div>
        ) : (
          <div className="flex-col empty-playlist">
            <div>Looks like you haven't added anything in watchlater yet.</div>
            <Link to="/explore" className="btn-primary vid-btn">
              Explore Now
            </Link>
          </div>
        )}
        {state.loading ? <span className="loader"></span> : <></>}
      </main>
    </div>
  );
};
