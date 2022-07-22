export const sortVideos = (videos, category) => {
  if (category && category !== "All") {
    return videos.filter((video) => video.category === category);
  }
  return videos;
};
