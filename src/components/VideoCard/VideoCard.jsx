import React from "react";
import "./videocard.css";
import { Link } from "react-router-dom";

export const VideoCard = ({ video }) => {
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
          <Link to="/singlevideo">
            <h3 className="semibold vid-card-title">{video.title}</h3>
          </Link>
          <small className="gray-color">{video.creator}</small>
        </div>
      </div>
    </div>
  );
};
