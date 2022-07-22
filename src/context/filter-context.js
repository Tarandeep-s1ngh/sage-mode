import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../utils";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const initialState = {
    category: "All",
    searchQuery: "",
    history: [],
    watchlater: [],
    liked: [],
    playlistName: "",
    playlists: [],
    isPlaylistOpen: false,
    didPlaylistUpdate: false,
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
