import { useAuth, useFilter } from "../../context";
import {
  addVideoToPlaylist,
  createPlaylist,
  removeVideoFromPlaylist,
} from "../../utils/actions";
import "./playlistComps.css";

export const PlaylistModal = ({ video }) => {
  const { state, dispatch } = useFilter();
  const { token } = useAuth();

  const playlistNameHandler = (e) => {
    dispatch({
      type: "UPDATE_PLAYLIST_NAME",
      payload: { playlistName: e.target.value },
    });
  };

  const isInPlaylistFolder = state.playlists.find(
    (prev) => prev.title === state.playlistName
  );

  const createPlaylistHandler = () => {
    state.playlistName !== "" &&
      token &&
      !isInPlaylistFolder &&
      createPlaylist(dispatch, state.playlistName, token);
  };

  const addVideoToPlaylistHandler = (e) => {
    const [playlist] = state.playlists.filter(
      (playlist) => playlist.title === e.target.value
    );
    addVideoToPlaylist(dispatch, playlist._id, token, video);
  };

  const removeVideoFromPlaylistHandler = (e) => {
    const [playlist] = state.playlists.filter(
      (playlist) => playlist.title === e.target.value
    );
    removeVideoFromPlaylist(dispatch, playlist._id, video._id, token);
  };

  return (
    <div className="modal" onClick={(event) => event.stopPropagation()}>
      <h3 className="modal-title">
        Save to...
        <button
          className="modal-icon"
          onClick={() => dispatch({ type: "TOGGLE_PLAYLIST_MODAL" })}
        >
          <i className="fas fa-times"></i>
        </button>
      </h3>
      <div className="divider"></div>
      {state.playlists.length !== 0 && (
        <div className="modal-content">
          {state.playlists.map((item) => {
            const isChecked = item.videos.some((vid) => vid._id === video._id);
            return (
              <label key={item._id} className="label-full-width">
                <input
                  type="checkbox"
                  value={item.title}
                  checked={isChecked}
                  onChange={(e) => {
                    e.target.checked
                      ? addVideoToPlaylistHandler(e)
                      : removeVideoFromPlaylistHandler(e);
                  }}
                />
                {item.title}
              </label>
            );
          })}
        </div>
      )}
      <div className="modal-name-input">
        <label htmlFor="playist-name">Name:</label>
        <input
          className="modal-input"
          type="text"
          placeholder="Enter Playlist Name"
          id="playist-name"
          autoComplete="off"
          onChange={(e) => {
            playlistNameHandler(e);
          }}
        />
      </div>
      <div className="modal-footer">
        <span className="span-hover" onClick={() => createPlaylistHandler()}>
          <i className="fas fa-plus"></i> Create New
        </span>
      </div>
    </div>
  );
};
