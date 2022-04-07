import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../utils";
import { videos } from "../backend/db/videos";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const initialState = {
    videosList: [...videos],
    filteredVideos: [...videos],
    history: [],
    watchlater: [],
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
