import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "../components";
import { useAuth, useFilter } from "../context";
import { getVideo } from "../utils";
import { addToWatchlater } from "../utils/actions";

export const SingleVideo = () => {
  const [currVideo, setCurrVideo] = useState({});
  const { videoId } = useParams();
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

  const clickToWatchlater = () => {
    token && !isInWatchlater && addToWatchlater(dispatch, currVideo, token);
  };

  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
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
              <a className="flex-row align-items-center" href="/">
                <i className="far fa-thumbs-up"></i>
              </a>
              <span
                onClick={() => clickToWatchlater()}
                className="flex-row align-items-center icon-hover"
              >
                <i className="far fa-bookmark"></i>
              </span>
              <a className="flex-row align-items-center" href="/">
                <i className="material-icons video-info-icon">playlist_add</i>
              </a>
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
      </main>
    </div>
  );
};
