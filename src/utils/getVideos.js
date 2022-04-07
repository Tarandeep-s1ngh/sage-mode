import axios from "axios";

export const getVideo = async (id) => {
  try {
    let { data } = await axios.get(`/api/video/${id}`);
    if (data.video) return data.video;
    return {};
  } catch (err) {
    if (err.response.status === 500) {
      return {};
    }
    throw new Error(err, "Failed to fetch Videos");
  }
};
