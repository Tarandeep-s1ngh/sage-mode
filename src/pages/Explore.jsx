import { Sidebar, VideoCard } from "../components";
import { useFilter } from "../context";
import { productCategories } from "../utils";

export const Explore = () => {
  const { state, dispatch } = useFilter();

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
          {state.filteredVideos.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </section>
      </main>
    </div>
  );
};
