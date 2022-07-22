import { Sidebar, VideoCard } from "../components";
import { useData, useFilter } from "../context";
import { productCategories, searchVideos, sortVideos } from "../utils";

export const Explore = () => {
  const { state, dispatch } = useFilter();

  const { videos } = useData();

  const searchedVideos = searchVideos(videos, state.searchQuery);

  const filteredVideos = sortVideos(searchedVideos, state.category);

  return (
    <div className="explore-wrapper">
      <Sidebar />

      <main className="main-content">
        <section className="category-chips lightbold">
          {productCategories.map((categ) => {
            return (
              <button
                onClick={() => {
                  dispatch({
                    type: "SORT_CATEGORY",
                    payload: { categName: categ },
                  });
                }}
                className="chip"
                key={categ}
              >
                {categ}
              </button>
            );
          })}
        </section>
        <section className="video-listing">
          {filteredVideos.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </section>
      </main>
    </div>
  );
};
