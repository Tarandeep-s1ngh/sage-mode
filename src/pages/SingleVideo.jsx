import { thumbnail1, thumbnail3 } from "../assets";
import { Sidebar } from "../components";

export const SingleVideo = () => {
  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <section
          className="single-video-card"
          style={{ width: "882px", margin: "auto" }}
          //   INLINE STYLES WILL BE REMOVED AFTER EMBEDDING VIDEO
        >
          {/* INLINE STYLES WILL BE REMOVED AFTER EMBEDDING VIDEO */}
          <div className="main-video-embed" style={{ width: "882px" }}>
            <img
              src={thumbnail3}
              alt=""
              style={{ objectFit: "cover", aspectRatio: "2/1" }}
            />
            {/* INLINE STYLES WILL BE REMOVED AFTER EMBEDDING VIDEO */}
          </div>
          <div className="video-decription flex-row-wrap align-items-center justify-sb">
            <div className="main-video-title">
              <div class="avatar-sm-size">
                <img class="img-round avatar-round" src={thumbnail1} />
              </div>
              <div>
                <h3>Opening Theory</h3>
                <small className="light-gray-color">ChessBase India</small>
              </div>
            </div>

            <div className="category-chips lightbold">
              <a href="/">
                <i class="far fa-thumbs-up"></i>
              </a>
              <a href="/">
                <i class="far fa-bookmark"></i>
              </a>
              <a href="/">
                <i className="material-icons">playlist_add</i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
