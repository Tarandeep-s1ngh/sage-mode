import { awesomeIcons } from "../utils/";
import { Link, useNavigate } from "react-router-dom";
import { useFilter } from "../context";

export const LandingPageMain = () => {
  const { dispatch } = useFilter();
  const navigate = useNavigate();

  const watchNowHandler = () => {
    dispatch({
      type: "CLEAR_FILTER",
    });
    navigate("/explore");
  };

  const featuredCategoryHandler = (item) => {
    dispatch({
      type: "SORT_CATEGORY",
      payload: { categName: item.title },
    });
    navigate("/explore");
  };

  return (
    <main className="main-wrapper">
      <section className="hero-section">
        <div className="hero-txt">
          <h2 className="h2">Learn chess with</h2>
          <h1 className="h1">Sage Mode</h1>
          <button
            onClick={() => watchNowHandler()}
            className="btn-primary btn-slide"
          >
            Watch Now
          </button>
        </div>
      </section>

      {/* =====  Categories  ====== */}

      <section className="categories">
        <h3 className="h3 text-center">
          <Link to="/explore">Featured Categories</Link>
        </h3>

        <div className="category-cards">
          {/* CATEGORY CARD  */}
          {awesomeIcons.map((item) => {
            return (
              <div
                key={item.categ}
                className="card-badge"
                onClick={() => featuredCategoryHandler(item)}
              >
                <i className={`fas fa-${item.icon}`}></i>

                <div className="card-header-txt">
                  <h3 className="semibold">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
