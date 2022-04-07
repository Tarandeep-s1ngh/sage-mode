import { Link } from "react-router-dom";
import { HistoryCard, Sidebar } from "../components";
import { useAuth, useFilter } from "../context";
import { clearHistory } from "../utils/actions";

export const History = () => {
  const { state, dispatch } = useFilter();
  const { token } = useAuth();

  const inHistory = state.history.length > 0;

  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <div className="flex-row justify-sb">
          <h4 className="content-title semibold">Watch History</h4>

          {inHistory && (
            <button
              className="btn-primary btn-danger btn-clear"
              onClick={() => clearHistory(dispatch, token)}
            >
              <i className="far fa-trash-alt"></i>
              <span>Clear History</span>
            </button>
          )}
        </div>

        {inHistory ? (
          <div className="video-listing">
            {state.history.map((video) => (
              <HistoryCard key={video._id} video={video} />
            ))}
          </div>
        ) : (
          <div className="flex-col empty-playlist">
            <div>Looks like you haven't watched anything yet.</div>
            <Link to="/" className="btn-primary vid-btn">
              Explore Now
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};
