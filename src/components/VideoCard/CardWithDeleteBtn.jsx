import React from "react";
import "./videocard.css";
import { Link } from "react-router-dom";
import { useAuth, useFilter } from "../../context";
import {
  disliked,
  removeFromHistory,
  removeFromWatchlater,
  removeVideoFromPlaylist,
} from "../../utils/actions";

export const CardWithDeleteBtn = ({ video, usedIn, playlistId }) => {
  const { dispatch } = useFilter();
  const { token } = useAuth();

  const checkAndHandle = () => {
    switch (usedIn) {
      case "watchlater":
        removeFromWatchlater(dispatch, video._id, token);
        break;

      case "history":
        removeFromHistory(dispatch, video._id, token);
        break;

      case "liked":
        disliked(dispatch, video._id, token);
        break;

      case "singlePlaylist":
        removeVideoFromPlaylist(dispatch, playlistId, video._id, token);
        break;

      default:
        break;
    }
  };

  return (
    <div className="card-badge">
      <div className="card-header">
        <img
          className="thumbnail-image"
          src={`https://i.ytimg.com/vi/${video._id}/0.jpg`}
          alt={video.title}
        />
        <div className="card-floating-icon">
          <div onClick={() => checkAndHandle()} className="history-icon">
            <i
              className={
                usedIn === "liked" ? "far fa-thumbs-down" : "far fa-trash-alt"
              }
            ></i>
          </div>
        </div>
        <div className="card-header-txt vid-card-header-txt">
          <Link to={`/singlevideo/${video._id}`}>
            <h3 className="semibold vid-card-title">{video.title}</h3>
          </Link>
          <small className="gray-color">{video.creator}</small>
        </div>
      </div>
    </div>
  );
};
