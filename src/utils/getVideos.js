import axios from "axios";

export const getAllVideos = async () => {
  try {
    let { data } = await axios.get(`/api/videos`);
    if (data.videos) return data.videos;
    return [];
  } catch (err) {
    throw new Error("Failed to fetch Videos");
  }
};

export const getVideo = async (id) => {
  try {
    let { data } = await axios.get(`/api/video/${id}`);
    if (data.video) return data.video;
    return {};
  } catch (err) {
    if (err.response.status === 500) {
      return {};
    }
    throw new Error("Failed to fetch Videos");
  }
};
