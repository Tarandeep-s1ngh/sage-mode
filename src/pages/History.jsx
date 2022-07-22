import { Link } from "react-router-dom";
import { Sidebar, CardWithDeleteBtn } from "../components";
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
          <h4 className="content-title semibold flex-row align-items-center">
            Watch History
          </h4>

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
              <CardWithDeleteBtn
                key={video._id}
                video={video}
                usedIn="history"
              />
            ))}
          </div>
        ) : (
          <div className="flex-col empty-playlist">
            <div>Looks like you haven't watched anything yet.</div>
            <Link to="/explore" className="btn-primary vid-btn">
              Explore Now
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};
