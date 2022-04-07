import React from "react";
import "./videocard.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useFilter } from "../../context";
import { addToHistory } from "../../utils/actions";

export const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { state, dispatch } = useFilter();

  const isInHistory = state.history.find(
    (historyVideo) => historyVideo._id === video._id
  );

  const clickToVideoHandler = () => {
    navigate(`/singlevideo/${video._id}`);
    token && !isInHistory && addToHistory(dispatch, video, token);
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
          <div className="vid-card-icon">
            <i className="material-icons">playlist_play</i>
          </div>
          <div className="vid-card-icon">
            <i className="fas fa-bookmark"></i>
          </div>
        </div>
        <div className="card-header-txt vid-card-header-txt">
          <span onClick={() => clickToVideoHandler()}>
            <h3 className="semibold vid-card-title">{video.title}</h3>
          </span>
          <small className="gray-color">{video.creator}</small>
        </div>
      </div>
    </div>
  );
};
