import axios from "axios";
import { triggerToast } from "../toastTrigger";

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
    console.log("Error! Couldn't create playlist", error);
    triggerToast("error", "Couldn't create playlist!");
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
      triggerToast("success", "Playlist deleted!");
    })();
  } catch (error) {
    console.log("Error! Couldn't delete playlist", error);
    triggerToast("error", "Couldn't delete playlist!");
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
      triggerToast("success", "Added to playlist!");
    })();
  } catch (error) {
    console.log("Error! Couldn't add video to playlist", error);
    triggerToast("error", "Couldn't add video to playlist!");
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
        triggerToast("success", "Removed from playlist!");
      }
    })();
  } catch (error) {
    console.log("Error! Couldn't remove video from playlist", error);
    triggerToast("error", "Couldn't remove video from playlist!");
  }
};
