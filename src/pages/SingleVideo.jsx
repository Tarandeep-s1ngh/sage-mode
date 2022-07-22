import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlaylistModal, Sidebar } from "../components";
import { useAuth, useFilter } from "../context";
import { getVideo } from "../utils";
import { addToWatchlater, liked, removeFromWatchlater } from "../utils/actions";

export const SingleVideo = () => {
  const [currVideo, setCurrVideo] = useState({});
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const { state, dispatch } = useFilter();
  useEffect(() => {
    (async () => {
      const resVideo = await getVideo(videoId);
      setCurrVideo(resVideo);
    })();
  }, [videoId]);

  const isInWatchlater = state.watchlater.find(
    (watchlaterVideo) => watchlaterVideo._id === currVideo._id
  );

  const isInLiked = state.liked.find(
    (likedVideo) => likedVideo._id === currVideo._id
  );

  const clickToWatchlater = () => {
    if (token) {
      isInWatchlater
        ? removeFromWatchlater(dispatch, currVideo._id, token)
        : addToWatchlater(dispatch, currVideo, token);
    } else navigate("/login");
  };

  const clickToLike = () => {
    token
      ? !isInLiked && liked(dispatch, currVideo, token)
      : navigate("/login");
  };

  const openPlaylistModal = () => {
    token ? dispatch({ type: "TOGGLE_PLAYLIST_MODAL" }) : navigate("/login");
  };

  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        {/* <div className="alert alert-icon alert-success">
          <i className="fas fa-check-circle"></i> Profile has been updated
          successfully!
        </div> */}
        <section className="single-video-card">
          <div>
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>
          </div>
          <div className="video-info flex-row-wrap align-items-center justify-sb">
            <div className="main-video-title">
              <h3>{currVideo.title}</h3>
            </div>

            <div className="category-chips lightbold">
              <span
                onClick={() => clickToLike()}
                className="flex-row align-items-center icon-hover"
              >
                {isInLiked ? (
                  <i className="fas fa-thumbs-up"></i>
                ) : (
                  <i className="far fa-thumbs-up"></i>
                )}
              </span>
              <span
                onClick={() => clickToWatchlater()}
                className="flex-row align-items-center icon-hover"
              >
                {isInWatchlater ? (
                  <i className="fas fa-bookmark"></i>
                ) : (
                  <i className="far fa-bookmark"></i>
                )}
              </span>
              <span
                onClick={() => openPlaylistModal()}
                className="flex-row align-items-center icon-hover"
              >
                <i className="material-icons video-info-icon">playlist_add</i>
              </span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex-row align-items-fs gap1">
            <div className="avatar-lg-size">
              <img
                className="img-round avatar-round"
                alt="channel logo"
                src={currVideo.logo}
              />
            </div>
            <div>
              <h4 className="light-gray-color t1p125">{currVideo.creator}</h4>
              <div className="mt-0p5 main-video-description">
                {currVideo.description}
              </div>
            </div>
          </div>
        </section>
        <div
          className={state.isPlaylistOpen ? "modal-container" : "dis-none"}
          onClick={() => dispatch({ type: "TOGGLE_PLAYLIST_MODAL" })}
        >
          <PlaylistModal key={currVideo._id} video={currVideo} />
        </div>
      </main>
    </div>
  );
};
