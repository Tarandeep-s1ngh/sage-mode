export const sortVideos = (videos, sortBy) => {
  if (sortBy && sortBy !== "All") {
    return [...videos].filter((video) => video.category === sortBy);
  }
  return [...videos];
};
