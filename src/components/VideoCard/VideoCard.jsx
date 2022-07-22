import React from "react";
import "./videocard.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useFilter } from "../../context";
import {
  addToHistory,
  addToWatchlater,
  removeFromWatchlater,
} from "../../utils/actions";
import { PlaylistModal } from "../index";
import { useState } from "react";

export const VideoCard = ({ video }) => {
  const [currVideoId, setCurrVideoId] = useState("");
  const navigate = useNavigate();
  const { token } = useAuth();
  const { state, dispatch } = useFilter();

  const isInHistory = state.history.find(
    (historyVideo) => historyVideo._id === video._id
  );

  const isInWatchlater = state.watchlater.find(
    (watchlaterVideo) => watchlaterVideo._id === video._id
  );

  const clickToVideoHandler = () => {
    navigate(`/singlevideo/${video._id}`);
    token && !isInHistory && addToHistory(dispatch, video, token);
  };

  const clickToWatchlater = (e) => {
    e.stopPropagation();
    if (token) {
      isInWatchlater
        ? removeFromWatchlater(dispatch, video._id, token)
        : addToWatchlater(dispatch, video, token);
    } else navigate("/login");
  };

  const openPlaylistModal = (e) => {
    e.stopPropagation();
    setCurrVideoId(video._id);
    token ? dispatch({ type: "TOGGLE_PLAYLIST_MODAL" }) : navigate("/login");
  };

  return (
    <>
      <div className="card-badge" onClick={() => clickToVideoHandler()}>
        <div className="card-header">
          <img
            className="thumbnail-image"
            src={`https://i.ytimg.com/vi/${video._id}/0.jpg`}
            alt={video.title}
          />
          <div className="card-floating-icon">
            <div
              onClick={(e) => openPlaylistModal(e)}
              className="vid-card-icon"
            >
              <i className="material-icons">playlist_play</i>
            </div>
            <div
              onClick={(e) => clickToWatchlater(e)}
              className="vid-card-icon"
            >
              {isInWatchlater ? (
                <i className="fas fa-bookmark"></i>
              ) : (
                <i className="far fa-bookmark"></i>
              )}
            </div>
          </div>
          <div className="card-header-txt vid-card-header-txt">
            <span className="vid-card-title-hover">
              <h3 className="semibold vid-card-title">{video.title}</h3>
            </span>
            <small className="gray-color">{video.creator}</small>
          </div>
        </div>
      </div>
      {video._id === currVideoId && (
        <div
          className={state.isPlaylistOpen ? "modal-container" : "dis-none"}
          onClick={() => dispatch({ type: "TOGGLE_PLAYLIST_MODAL" })}
        >
          <PlaylistModal key={video._id} video={video} />
        </div>
      )}
    </>
  );
};
