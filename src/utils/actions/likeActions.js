import axios from "axios";

export const liked = async (dispatch, video, token) => {
  try {
    (async () => {
      const {
        data: { likes },
      } = await axios.post(
        "/api/user/likes",
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      likes &&
        dispatch({
          type: "LIKED",
          payload: { likes },
        });
    })();
  } catch (error) {
    console.log("Error! Couldn't Add To Likes", error);
  }
};

export const disliked = (dispatch, id, token) => {
  try {
    (async () => {
      const {
        data: { likes },
      } = await axios.delete(`/api/user/likes/${id}`, {
        headers: {
          authorization: token,
        },
      });
      likes &&
        dispatch({
          type: "DISLIKED",
          payload: { likes },
        });
    })();
  } catch (error) {
    console.log("Error! Couldn't remove from Likes", error);
  }
};
