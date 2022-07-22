import { Link } from "react-router-dom";
import { PlaylistFolderCard, Sidebar } from "../components";
import { useFilter } from "../context";

export const Playlist = () => {
  const { state } = useFilter();

  const inPlaylists = state.playlists.length > 0;

  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <h4 className="content-title semibold">
          {state.playlists.length > 1 ? "Your Playlists" : "Your Playlist"}
        </h4>

        {inPlaylists ? (
          <div className="video-listing">
            {state.playlists.map((playlistFolder) => (
              <PlaylistFolderCard
                key={playlistFolder._id}
                playlistFolder={playlistFolder}
              />
            ))}
          </div>
        ) : (
          <div className="flex-col empty-playlist">
            <div>Looks like you haven't created a playlist yet.</div>
            <Link to="/explore" className="btn-primary vid-btn">
              Start Creating Now
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};
