import axios from "axios";

export const getCategory = async (id) => {
  try {
    let { data } = await axios.get(`/api/category/${id}`);
    if (data.category) return data.category;
    return {};
  } catch (err) {
    if (err.response.status === 500) {
      return {};
    }
    throw new Error(err, "Failed to fetch category");
  }
};
