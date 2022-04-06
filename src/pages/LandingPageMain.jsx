import { awesomeIcons } from "../utils/";
import { Link } from "react-router-dom";

export const LandingPageMain = () => {
  return (
    <main className="main-wrapper">
      <section className="hero-section">
        <div className="hero-txt">
          <h2 className="h2">Learn chess with</h2>
          <h1 className="h1">Sage Mode</h1>
          <Link
            to="/explore"
            className="btn-primary dis-inline-block btn-slide"
          >
            Watch Now
          </Link>
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
              <div key={item.categ} className="card-badge">
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
