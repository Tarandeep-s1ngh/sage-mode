export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_CATEGORY":
      return {
        ...state,
        category: action.payload.categName,
      };

    case "SEARCH_VIDEO":
      return {
        ...state,
        searchQuery: action.payload.searchBy,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        category: "All",
        searchQuery: "",
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

    case "ADD_TO_WATCHLATER":
      return {
        ...state,
        watchlater: [...action.payload.watchlater],
      };

    case "REMOVE_FROM_WATCHLATER":
      return {
        ...state,
        watchlater: [...action.payload.watchlater],
      };

    case "LIKED":
      return {
        ...state,
        liked: [...action.payload.likes],
      };

    case "DISLIKED":
      return {
        ...state,
        liked: [...action.payload.likes],
      };

    case "TOGGLE_PLAYLIST_MODAL":
      return {
        ...state,
        isPlaylistOpen: !state.isPlaylistOpen,
      };

    case "UPDATE_PLAYLIST_NAME":
      return {
        ...state,
        playlistName: action.payload.playlistName,
      };

    case "PLAYLIST_FOLDER":
      return {
        ...state,
        playlists: [...action.payload.playlists],
      };

    case "PLAYLIST_UPDATED":
      return {
        ...state,
        didPlaylistUpdate: !state.didPlaylistUpdate,
      };

    case "UPDATE_VIDEO_IN_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists?.map((pl) =>
          pl.title === action.payload.playlist.title
            ? action.payload.playlist
            : pl
        ),
      };

    case "LOADER_UPDATE":
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return { ...state };
  }
};
