import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Analysis",
    description:
      "Analysis of various chess games, including the current tournaments and famous historic games played by some of the best players of all time",
  },
  {
    _id: uuid(),
    categoryName: "Tutorial",
    description:
      "All the things you need to know about chess at different difficulty levels, from beginner to master",
  },
  {
    _id: uuid(),
    categoryName: "Casual",
    description:
      "Fun chess streams, with a lot of knowledge and laughter packed in a single place! Including the casual late night puzzle rush",
  },
];
