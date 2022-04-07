import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataState, setDataState] = useState({
    videosData: [],
    categoriesData: [],
  });

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`/api/videos`);
        const recVideos = data.videos;
        setDataState((curr) => ({ ...curr, videosData: [...recVideos] }));
      } catch (err) {
        throw new Error(err, "Failed to fetch Videos");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`/api/categories`);
        const recCategories = data.categories;
        setDataState((curr) => ({
          ...curr,
          categoriesData: [...recCategories],
        }));
      } catch (err) {
        throw new Error(err, "Failed to fetch categories");
      }
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{
        videos: dataState.videosData,
        categories: dataState.categoriesData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
