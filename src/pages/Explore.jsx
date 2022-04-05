import { Sidebar, VideoCard } from "../components";

export const Explore = () => {
  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <section className="category-chips lightbold">
          <a className="chip" href="/">
            Tourney
          </a>
          <a className="chip" href="/">
            Tutorial
          </a>
          <a className="chip" href="/">
            Practice
          </a>
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
