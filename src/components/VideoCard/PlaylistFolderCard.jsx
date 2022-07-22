import React from "react";
import "./videocard.css";
import { useNavigate } from "react-router-dom";
import { plFolder } from "../../assets";
import { deletePlaylist } from "../../utils/actions";
import { useAuth, useFilter } from "../../context";

export const PlaylistFolderCard = ({ playlistFolder }) => {
  const navigate = useNavigate();
  const { dispatch } = useFilter();
  const { token } = useAuth();

  return (
    <div
      className="card-badge"
      onClick={() => {
        navigate(`/singleplaylist/${playlistFolder._id}`);
      }}
    >
      <div className="card-header">
        <img
          className="thumbnail-image"
          src={plFolder}
          alt={playlistFolder.title}
        />
        <div className="card-header-txt vid-card-header-txt">
          <h3 className="semibold vid-card-title-hover">
            {playlistFolder.title}
          </h3>
        </div>
        <div className="playlist-folder-icon">
          <div
            onClick={(e) => {
              e.stopPropagation();
              deletePlaylist(dispatch, playlistFolder._id, token);
            }}
            className="history-icon"
          >
            <i className="far fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div className="playlist-overlay">
        <i className="material-icons">playlist_play</i>
      </div>
    </div>
  );
};
