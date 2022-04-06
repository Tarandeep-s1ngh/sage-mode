import React from "react";
import "./videocard.css";
import { thumbnail1 } from "../../assets";
import { thumbnail2 } from "../../assets";
import { Link } from "react-router-dom";

export const VideoCard = () => {
  return (
    <div className="card-badge">
      <div className="card-header">
        <img className="thumbnail-image" src={thumbnail1} alt="" />
        <div className="card-floating-icon">
          <div className="vid-card-icon">
            <i className="material-icons">playlist_play</i>
          </div>
          <div className="vid-card-icon">
            <i className="fas fa-bookmark"></i>
          </div>
        </div>
        <div className="card-header-txt vid-card-header-txt">
          <Link to={`/singlevideo/${video._id}`}>
            <h3 className="semibold vid-card-title">{video.title}</h3>
          </Link>
          <small className="gray-color">ChessBase India</small>
        </div>
      </div>
    </div>
  );
};
