import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sidebar, CardWithDeleteBtn } from "../components";
import { useAuth, useFilter } from "../context";
import { getSinglePlaylist } from "../utils/actions";

export const SinglePlaylist = () => {
  const [currPlaylist, setCurrPlaylist] = useState([]);
  const { playlistId } = useParams();
  const { token } = useAuth();
  const { state } = useFilter();
  useEffect(() => {
    (async () => {
      const resPlaylist = await getSinglePlaylist(playlistId, token);
      setCurrPlaylist(resPlaylist.videos);
    })();
  }, [playlistId, state.didPlaylistUpdate]);

  const inplaylist = currPlaylist?.length > 0;

  const currPlaylistFolder = state.playlists.find(
    (playlist) => playlist._id === playlistId
  );

  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <h4 className="content-title semibold">{currPlaylistFolder?.title}</h4>

        {inplaylist ? (
          <div className="video-listing">
            {currPlaylist?.map((video) => (
              <CardWithDeleteBtn
                key={video._id}
                video={video}
                usedIn="singlePlaylist"
                playlistId={playlistId}
              />
            ))}
          </div>
        ) : (
          <div className="flex-col empty-playlist">
            <div>
              Looks like you haven't added anything in this playlist yet.
            </div>
            <Link to="/explore" className="btn-primary vid-btn">
              Explore Now
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};
