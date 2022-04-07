import axios from "axios";

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
    })();
  } catch (error) {
    console.log("Error! Couldn't Add To Watchlater", error);
  }
};

export const removeFromWatchlater = (dispatch, id, token) => {
  try {
    (async () => {
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
    })();
  } catch (error) {
    console.log("Error! Couldn't remove from Watchlater", error);
  }
};
