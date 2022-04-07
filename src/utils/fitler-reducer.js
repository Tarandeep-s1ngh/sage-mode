import { videos } from "../backend/db/videos";
import { sortVideos, searchVideos } from "./actions";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_CATEGORY":
      return {
        ...state,
        filteredVideos: sortVideos(state.videosList, action.payload.categName),
      };

    case "SEARCH_VIDEO":
      return {
        ...state,
        filteredVideos: searchVideos(state.videosList, action.payload.searchBy),
      };

    case "CLEAR_FILTER":
      return {
        videosList: [...videos],
        filteredVideos: [...videos],
      };

    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: [...action.payload.history],
      };

    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        history: [...action.payload.history],
      };

    case "CLEAR_HISTORY":
      return {
        ...state,
        history: [...action.payload.history],
      };

    default:
      return { ...state };
  }
};
