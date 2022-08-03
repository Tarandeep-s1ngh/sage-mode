import Mockman from "mockman-js";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Navbar } from "./components";
import {
  Explore,
  Forgot,
  History,
  LandingPageMain,
  Liked,
  Login,
  Playlist,
  Profile,
  Signup,
  SinglePlaylist,
  SingleVideo,
  Watchlater,
} from "./pages";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPageMain />} />
          <Route path="explore" element={<Explore />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="liked" element={<Liked />} />
          <Route path="watchlater" element={<Watchlater />} />
          <Route path="history" element={<History />} />
          <Route path="singlevideo/:videoId" element={<SingleVideo />} />
          <Route
            path="singleplaylist/:playlistId"
            element={<SinglePlaylist />}
          />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="mockman" element={<Mockman />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="colored"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default App;
