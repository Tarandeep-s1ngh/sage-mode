export const searchVideos = (videos, searchBy) => {
  return searchBy
    ? [...videos].filter((video) =>
        video.title.toLowerCase().includes(searchBy.toLowerCase())
      )
    : [...videos];
};
