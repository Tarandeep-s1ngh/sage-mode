import { Sidebar, VideoCard } from "../components";
import { getAllVideos, productCategories } from "../utils";

export const Explore = () => {
  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <section className="category-chips lightbold">
          {productCategories.map((categ) => {
            return (
              <a className="chip" href="/" key={categ}>
                {categ}
              </a>
            );
          })}
        </section>

        <section className="video-listing">
          {/* TO BE CHANGED WITH FUNCTIONALITY */}
          {[...Array(9)].map(() => {
            return <VideoCard />;
          })}
        </section>
      </main>
    </div>
  );
};
