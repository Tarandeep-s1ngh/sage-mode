import { useEffect, useState } from "react";
import { Sidebar, VideoCard } from "../components";
import { productCategories } from "../utils";
import { getAllVideos } from "../utils/getVideos";

export const Explore = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const allVideos = await getAllVideos();
      setVideos(allVideos);
    })();
  }, []);

  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <section className="category-chips lightbold">
          {productCategories.map((categ) => {
            return (
              <a className="chip" href="/">
                {categ}
              </a>
            );
          })}
        </section>

        <section className="video-listing">
          {videos.map((video) => {
            return <VideoCard key={videos._id} video={video} />;
          })}
        </section>
      </main>
    </div>
  );
};
