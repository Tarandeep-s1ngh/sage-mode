import axios from "axios";

export const createPlaylist = async (dispatch, playlistName, token) => {
  try {
    (async () => {
      const {
        data: { playlists },
      } = await axios.post(
        "/api/user/playlists",
        {
          playlist: { title: playlistName, description: "" },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      playlists &&
        dispatch({
          type: "PLAYLIST_FOLDER",
          payload: { playlists },
        });
    })();
  } catch (error) {
    console.log("Error! Couldn't Add To Playlists", error);
  }
};

export const deletePlaylist = (dispatch, id, token) => {
  try {
    (async () => {
      const {
        data: { playlists },
      } = await axios.delete(`/api/user/playlists/${id}`, {
        headers: {
          authorization: token,
        },
      });
      playlists &&
        dispatch({
          type: "PLAYLIST_FOLDER",
          payload: { playlists },
        });
    })();
  } catch (error) {
    console.log("Error! Couldn't remove from Playlists", error);
  }
};

export const addVideoToPlaylist = (dispatch, id, token, video) => {
  try {
    (async () => {
      const {
        data: { playlist },
      } = await axios.post(
        `/api/user/playlists/${id}`,
        {
          video: video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      playlist &&
        dispatch({
          type: "UPDATE_VIDEO_IN_PLAYLIST",
          payload: { playlist },
        });
    })();
  } catch (error) {
    console.log("Error! Couldn't add video to playlist", error);
  }
};

export const getSinglePlaylist = async (id, token) => {
  try {
    let {
      data: { playlist },
    } = await axios.get(`/api/user/playlists/${id}`, {
      headers: {
        authorization: token,
      },
    });
    if (playlist) return playlist;
    return {};
  } catch (error) {
    if (error.response.status === 500) {
      return {};
    }
    console.log("Error! Couldn't fetch the playlist", error);
  }
};

export const removeVideoFromPlaylist = (
  dispatch,
  playlistId,
  videoId,
  token
) => {
  try {
    (async () => {
      const {
        data: { playlist },
      } = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      if (playlist) {
        dispatch({
          type: "UPDATE_VIDEO_IN_PLAYLIST",
          payload: { playlist },
        });
        dispatch({
          type: "PLAYLIST_UPDATED",
        });
      }
    })();
  } catch (error) {
    console.log("Error! Couldn't remove video from playlist", error);
  }
};
