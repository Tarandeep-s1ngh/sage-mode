import axios from "axios";
import { triggerToast } from "../toastTrigger";

export const addToWatchlater = async (dispatch, video, token) => {
  try {
    (async () => {
      const {
        data: { watchlater },
      } = await axios.post(
        "/api/user/watchlater",
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      watchlater &&
        dispatch({
          type: "ADD_TO_WATCHLATER",
          payload: { watchlater },
        });
      triggerToast("success", "Added to watchlater!");
    })();
  } catch (error) {
    console.log("Error! Couldn't add to watchlater", error);
    triggerToast("error", "Couldn't add to watchlater!");
  }
};

export const removeFromWatchlater = (dispatch, id, token) => {
  try {
    (async () => {
      dispatch({
        type: "LOADER_UPDATE",
        payload: true,
      });
      const {
        data: { watchlater },
      } = await axios.delete(`/api/user/watchlater/${id}`, {
        headers: {
          authorization: token,
        },
      });
      watchlater &&
        dispatch({
          type: "REMOVE_FROM_WATCHLATER",
          payload: { watchlater },
        });
      dispatch({
        type: "LOADER_UPDATE",
        payload: false,
      });
      triggerToast("success", "Removed from watchlater!");
    })();
  } catch (error) {
    console.log("Error! Couldn't remove from watchlater", error);
    triggerToast("error", "Couldn't remove from watchlater!");
  }
};
