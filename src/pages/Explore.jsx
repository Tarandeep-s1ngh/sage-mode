import { useEffect, useState } from "react";
import { categories } from "../backend/db/categories";
import { Sidebar, VideoCard } from "../components";
import { getAllVideos } from "../utils";

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
          {categories.map((categ) => {
            return (
              <a className="chip" href="/" key={categ._id}>
                {categ.categoryName}
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
